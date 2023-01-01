import React, { FunctionComponent, ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './Layout.module.css'

interface ILayoutProps {
    children: ReactNode;
}

function Layout({children} : ILayoutProps) : JSX.Element{
  return (
    <>
        <Header />
        <div className="">
            <Sidebar />
            <div className = "">
                {children}
            </div>
        </div>
        <Footer />
    </>
  )
}

const withLayout = <T extends Record<string, unknown>>(Component : FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) : JSX.Element{
        return (
            <Layout>
				<Component {...props} />
			</Layout>
        )
    }
}

export default Layout