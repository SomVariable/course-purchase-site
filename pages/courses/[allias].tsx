import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios"
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModel } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { ParsedUrlQuery } from "querystring";

const firstCategory = "courses"

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

    
	return {
		props: {
			firstCategory,
            page,
            products
		}
	}
}

interface CourseProps extends Record<string, unknown>{
	firstCategory: string;
    page: TopPageModel;
    products: ProductModel[]
}