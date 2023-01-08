import { TopLevelCategory } from './page.interface';

export interface Id {
    secondCategory: string;
}

export interface PageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface Cours {
    _id: Id;
    pages: PageItem[];
}

export interface MenuItem {
    _id: Id;
    isOpened?: boolean;
    pages: PageItem[];
}

export interface FirstLevelMenuItems {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory
}
