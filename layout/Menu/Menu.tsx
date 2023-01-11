import React, { useContext } from 'react'
import {BooksIcon} from '../../components';
import {CoursesIcon} from '../../components';
import {ProductsIcon} from '../../components';
import {ServeciesIcon} from '../../components';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItems } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { PageItem} from '../../interfaces/menu.interface'
import styles from './Menu.module.css'
import cn from 'classnames'


function Menu() {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const firstLevelMenuItems : FirstLevelMenuItems[] = [
        {route: "courses", name: "Courses", icon: <CoursesIcon />, id: TopLevelCategory.Courses},
        {route: "books", name: "Books", icon: <BooksIcon />, id: TopLevelCategory.Books},
        {route: "services", name: "Services", icon: <ServeciesIcon />, id: TopLevelCategory.Services},
        {route: "products", name: "Products", icon: <ProductsIcon />, id: TopLevelCategory.Products}
    ]

    const buildFirstLevelMenuItems = () => {
        return (
            firstLevelMenuItems.map((menu: FirstLevelMenuItems) => {
                return <div key = {menu.route}>
                    <a href={`/${menu.route}`}>
                        <div className = {cn(styles.firstLevel, {
                            [styles.active]: menu.id == firstCategory
                        })}>
                            <span>{menu.name}</span>
                            {menu.icon}
                        </div>
                    </a>
                    {menu.id == firstCategory && buildSecondLevelMenuItems(menu.id)}
                </div>
            })
        )
    }

    const buildSecondLevelMenuItems = (route: TopLevelCategory) => {
        return (
            <div>
                {menu.map(menuItem => {
                    return <div key = {menuItem._id.secondCategory}>
                        <div className={styles.secondLevel}>{menuItem._id.secondCategory}</div>
                        <div className={cn(styles.secondBlock, {
                            [styles.secondBlockOpened]: menuItem.isOpened
                        })}>
                            {buildThirdLevelMenuItems(menuItem.pages, route)}
                        </div>
                    </div>
                })}
            </div>
        )
    }
    
    const buildThirdLevelMenuItems = (pages:  PageItem[], route: TopLevelCategory) => {
        return (pages.map(page => {
                    return <a className={cn(styles.secondLevel, {
                        [styles.thirdLevelActive]: true
                    })} href={`/${route}/${page.alias}`}>
                        {page.category}
                    </a>
                })
        )
    }

    return (
        <div className={styles.menu}>
            {buildFirstLevelMenuItems()}
        </div>
    )
}

export default Menu


// thirdLevel(pages, route): pages.map > a > {p.category}

// export interface MenuItem {
//     _id: Id;
//     isOpened?: boolean;
//     pages: PageItem[];
// }