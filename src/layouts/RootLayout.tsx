import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {Outlet} from 'react-router-dom'



const RootLayout = () => {
    return (
        <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>

        </div>
    )
}

export default RootLayout