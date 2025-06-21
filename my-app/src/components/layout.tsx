import { Children } from "react"
import { Footer } from "./footer"
import { Header } from "./Header"

export const Layout = ({Children}:any) => {
    return(
        <>
            <Header/>
            {Children}
            <Footer/>
        </>
    )
}