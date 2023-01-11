import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios"
import { MenuItem } from "../../interfaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { ParsedUrlQuery } from "querystring";
import {IAppContext} from "../../context/app.context"

const firstCategory = TopLevelCategory.Courses

function Course({menu, page, products} : CourseProps): JSX.Element {
	return (
		<div>
            {products && products.length}
            {!products&& <p>none</p>}
		</div>
	);
}


export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async() => {
	const {data: menu} = await axios.get<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}`);
    
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params){
        return {
            notFound: true
        }
    }
	
    const page:TopPageModel  = await (await axios.get<TopPageModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/byAlias?alias=${params.allias}`)).data[0];
    const products = await (await axios.get<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/products`)).data.filter(product => product.categories.includes(page.category));
    const {data: menu} = await axios.get<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}`);
    
	return {
		props: {
            menu,
			firstCategory,
            page,
            products
		}
	}
}

interface CourseProps extends Record<string, unknown>{
    menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}