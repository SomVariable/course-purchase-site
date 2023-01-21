import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenuItems } from '../../helpers/helpers';
import { ParsedUrlQuery } from 'node:querystring';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

let firstCategory = TopLevelCategory.Courses

function Type({ menu, firstCategory }: TypeProps): JSX.Element {

	return (
		<>
			Menu: {menu.map(el => <p>{el._id.secondCategory}</p>)}
			Type: {firstCategory}
		</>
	);
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenuItems.map(m => '/' + m.route),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
		return {
			notFound: true
		};
	}
	const firstCategoryItem = firstLevelMenuItems.find(m => m.route == params.type);
	if (!firstCategoryItem) {
		return {
			notFound: true
		};
	}
    firstCategory = firstCategoryItem.id
    const {data: menu} = await axios.get<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/${firstCategory}`);
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    }        
}

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
}