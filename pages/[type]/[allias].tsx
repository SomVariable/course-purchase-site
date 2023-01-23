import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios"
import { MenuItem } from "../../interfaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { ParsedUrlQuery } from "querystring";
import {IAppContext} from "../../context/app.context"
import { firstLevelMenuItems } from "../../helpers/helpers";
import { TopPageComponents } from "../../pageComponents/TopPageComponents/TopPageComponents";

let firstCategory = TopLevelCategory.Courses

function TopPage({firstCategory, page, products} : TopPageProps): JSX.Element {
	return (
		<div>
            <TopPageComponents firstCategory = {firstCategory} page={page} products={products}></TopPageComponents>
		</div>
	);
}


export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async() => {
    let paths: string[] = [];
	for (const m of firstLevelMenuItems) {
        firstCategory = m.id;
		const {data: menu} = await axios.get<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}`);
		paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
	}
	return {
		paths,
		fallback: true
	};
}

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params){
        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenuItems.find(m => m.route === params.type)
    if (!firstCategoryItem)  {
        return {
            notFound: true
        }
    } 

    try {
        firstCategory = firstCategoryItem.id
        const page:TopPageModel  = await (await axios.get<TopPageModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}_byAlias?alias=${params.allias}`)).data[0];
        const products = await (await axios.get<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}_products`)).data.filter(product => product.categories.includes(page.category));
        const {data: menu} = await axios.get<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}`);

        return {
            props: {
                menu,
                firstCategory,
                page,
                products
            }
        }        
    } catch {
        return {
            notFound: true
        }
    }
	

}

interface TopPageProps extends Record<string, unknown>{
    menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}