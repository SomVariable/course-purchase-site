import { BooksIcon, CoursesIcon, IMenuIcon, ProductsIcon, ServeciesIcon } from "../components";
import { FirstLevelMenuItems } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";


export const firstLevelMenuItems : FirstLevelMenuItems[] = [
    {route: "courses", name: "Courses", icon: (props: IMenuIcon) => <CoursesIcon {...props} />, id: TopLevelCategory.Courses},
    {route: "books", name: "Books", icon: (props: IMenuIcon) => <BooksIcon {...props} />, id: TopLevelCategory.Books},
    {route: "services", name: "Services", icon: (props: IMenuIcon) =><ServeciesIcon {...props} />, id: TopLevelCategory.Services},
    {route: "products", name: "Products", icon:(props: IMenuIcon) => <ProductsIcon {...props} />, id: TopLevelCategory.Products}
]