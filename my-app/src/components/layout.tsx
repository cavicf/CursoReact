import { Children } from "react"
import { Footer } from "./footer"
import { Header } from "./Header/Header"

export const Layout = ({children}:any) => {
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}