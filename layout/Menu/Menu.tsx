import React, { useContext } from 'react'
import {BooksIcon} from '../../components';
import {CoursesIcon} from '../../components';
import {ProductsIcon} from '../../components';
import {ServeciesIcon} from '../../components';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItems } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';


function Menu() {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const firstLevelMenuItems : FirstLevelMenuItems[] = [
        {route: "courses", name: "Courses", icon: <CoursesIcon />, id: TopLevelCategory.Courses},
        {route: "books", name: "Books", icon: <BooksIcon />, id: TopLevelCategory.Books},
        {route: "services", name: "Services", icon: <ServeciesIcon />, id: TopLevelCategory.Services},
        {route: "products", name: "Products", icon: <ProductsIcon />, id: TopLevelCategory.Products}
    ]

    return (
        <div>
            <ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
        </div>
    )
}

export default Menu


// 2) Menu: create objects menu: [
//     {route, name, icon, id} * 4
//    ]