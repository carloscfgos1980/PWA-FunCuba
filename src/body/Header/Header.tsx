import FunCubaLogo from "./headerComponents/FunCubaLogo";
import FunCubaTitle from "./headerComponents/FunCubaTitle";
import HeaderNavBar from "./headerComponents/HeaderNavBar";

const Header = () => {
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="row justify-content-between align-items-center">
                <div className="col-sm-3 text-center py-1">
                    <FunCubaLogo/>
                </div>
                <div className="display-3 col-sm-4 text-center text-light py-1 d-none d-md-block">
                    <FunCubaTitle/>
                </div>
                <div className="col-sm-5 text-center">
                    <HeaderNavBar/>
                </div>
            </div>

        </div>
    )
}

export default Header