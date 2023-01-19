import React, { useContext } from 'react'
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItems, MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { PageItem} from '../../interfaces/menu.interface'
import styles from './Menu.module.css'
import cn from 'classnames'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenuItems } from '../../helpers/helpers';


function Menu() {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevelCategory = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if(m._id.secondCategory == secondCategory){
                m.isOpened = !m.isOpened
            }
            return m 
        
        }))
    }

    const buildFirstLevelMenuItems = () => {
        return (
            firstLevelMenuItems.map((menu: FirstLevelMenuItems) => {
                return <div className = {styles.menuItem} key = {menu.route}>
                    <Link href={`/${menu.route}`}>
                        <div className = {cn(styles.firstLevel, {
                            [styles.active]: menu.id === firstCategory
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
        return (menu.map((menuItem : MenuItem) => {
            if (menuItem.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                menuItem.isOpened = true;
            }
            return <div className = {styles.category} key = {menuItem._id.secondCategory}>
                <div className={styles.secondLevel} onClick={() => openSecondLevelCategory(menuItem._id.secondCategory)}>{menuItem._id.secondCategory}</div>
                <div className={cn(styles.secondBlock, {
                    [styles.secondLevelBlockOpened]: menuItem.isOpened
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
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
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
