import logo from "../FunCuba-logo2.jpg";
import Instagram from "../instagram.svg";
import Facebook from "../facebook.svg";
import Email from "../envelope-at-fill.svg";
// import '../../'

const Footer = () => {


    // function Mailto({ email, subject, body }:CardProps) {
    //     return (
    //         <a className="text-light" href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
    //         </a>
    //     );
    // }
    return (
        <div className="container-fluid bg-dark py-3">
            <div className="container-xxl">
                <div className="row justify-content-between align-items-start ">
                    <div className="col-sm-4 text-center py-2">
                        <img src={logo}
                            width="40%"
                            className="d-inline-block align-top"
                            alt="Logo" />
                    </div>
                    <div className="display-3 col-sm-4 row justify-content-center align-items-center ">
                        <h3 className="text-light pb-1">Contact us</h3>
                         <div className="d-flex flex-row justify-content-center align-items-baseline">
                            <div className="rounded mx-3">
                                <img width='50p%' className='orange px-2' src={Email} alt="Email" />
                            </div>
                            <h5 className="lead text-start">
                                fun.cuba@gmail.com
                            </h5>
                        </div> 
                        


                        </div>
                    <div className="col-sm-3 text-center py-2 align-items-center">
                        <h3 className="text-light py-1">Follow us</h3>
                        <a className="text-light p-1" href='https://www.instagram.com/ametlaza/?hl=es' target="_blank" rel="noreferrer">
                        <div className="d-flex flex-row justify-content-center align-items-baseline">
                            <div className="w-25 p-2 rounded">
                                <img className="orange p-2" width='40p%' src={Instagram} alt="Instagram" />
                            </div>
                            <h5>@fun.cuba</h5>
                        </div>
                        </a >
                        <a className="text-light px-1 lead" href='https://www.facebook.com/profile.php?id=61565170058709' target="_blank" rel="noreferrer">
                        <div className="d-flex flex-row justify-content-center align-items-baseline">
                            <div className="w-25 p-2 rounded">
                                <img className="orange p-2"  width='40p%' src={Facebook} alt="Facebook" />
                            </div>
                            <h5>@fun.cuba</h5>
                        </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;