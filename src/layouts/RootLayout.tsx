import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {Outlet} from 'react-router-dom'



const RootLayout = () => {
    return (
        <body>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default RootLayout