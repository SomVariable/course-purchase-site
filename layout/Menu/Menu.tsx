import React, { useContext } from 'react'
import {BooksIcon, IMenuIcon} from '../../components';
import {CoursesIcon} from '../../components';
import {ProductsIcon} from '../../components';
import {ServeciesIcon} from '../../components';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItems } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { PageItem} from '../../interfaces/menu.interface'
import styles from './Menu.module.css'
import cn from 'classnames'
import Link from 'next/link';


function Menu() {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const firstLevelMenuItems : FirstLevelMenuItems[] = [
        {route: "courses", name: "Courses", icon: (props: IMenuIcon) => <CoursesIcon {...props} />, id: TopLevelCategory.Courses},
        {route: "books", name: "Books", icon: (props: IMenuIcon) => <BooksIcon {...props} />, id: TopLevelCategory.Books},
        {route: "services", name: "Services", icon: (props: IMenuIcon) =><ServeciesIcon {...props} />, id: TopLevelCategory.Services},
        {route: "products", name: "Products", icon:(props: IMenuIcon) => <ProductsIcon {...props} />, id: TopLevelCategory.Products}
    ]

    const buildFirstLevelMenuItems = () => {
        return (
            firstLevelMenuItems.map((menu: FirstLevelMenuItems) => {
                return <div className = {styles.menuItem} key = {menu.route}>
                    <Link href={`/${menu.route}`}>
                        <div className = {cn(styles.firstLevel, {
                            [styles.active]: menu.id == firstCategory
                        })}>
                            {menu.icon({className: styles.icon})}
                            <span>{menu.name}</span>
                        </div>
                    </Link>
                    <div className={styles.secondCategory}>
                        
                        {menu.id == firstCategory && buildSecondLevelMenuItems(menu.id)}
                    </div>
                </div>
            })
        )
    }

    const buildSecondLevelMenuItems = (route: TopLevelCategory) => {
        return (menu.map(menuItem => {
                    return <div className = {styles.category} key = {menuItem._id.secondCategory}>
                        <div className={styles.secondLevel}>{menuItem._id.secondCategory}</div>
                        <div className={cn(styles.secondBlock, {
                            [styles.secondBlockOpened]: menuItem.isOpened
                        })}>
                            {buildThirdLevelMenuItems(menuItem.pages, route)}
                        </div>
                    </div>
                })
        )
    }
    
    const buildThirdLevelMenuItems = (pages:  PageItem[], route: TopLevelCategory) => {
        return (pages.map(page => {
                    return <Link className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: true
                    })} href={`/${route}/${page.alias}`}>
                        {page.category}
                    </Link>
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
