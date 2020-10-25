import React from 'react';
import '../../css/ltd-login.css';
import logo from '../../images/ltd-logo-600.png';
import companyLogo from '../../images/company-logo.png';

const Login = () =>{
    return(
        <React.Fragment>
            <div className="container">
                {/* <!--begin header--> */}
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-start">
                            <span className="ltd-title-font font-weight-bold">شرکت پدید آوران امید پارس</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <img src={companyLogo} style={{maxHeight: "150px"}}/>
                        </div>
                    </div>
                </div>
                {/* <!--end header--> */}
                {/* <!--begin body--> */}
                <div className="row">
                    <div className="col-md-6">
                        <br/><br/>
                        <img src={logo}  className="border-0" alt="Logo"/>
                    </div>
                    <div className="col-md-6">
                        <div className="row-cols-1 justify-content-center">
                            <div className="col-md-auto">
                                <span className="font-weight-bolder ltd-title-font mr-3">ورود کاربران</span>
                            </div>
                            <br/>
                            <div className="col-md-auto">
                                <span className="ltd-title-font mr-3">
                                    لطفا مشخصات حساب کاربری خود را وارد نمایید
                                </span>
                            </div>
                            <br/>
                            <div className="col-md-auto">
                                <form action="#">
                                    <div className="row-cols-1">
                                        <div className="col-md-auto input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text ltd-0radius ltd-bg1 border-0 fa fa-user text-white"></span>
                                            </div>
                                            <input className="form-control form-control-lg ltd-0radius ltd-input-font" type="text" id="ltd-user" 
                                                placeholder="نام کاربری"/>		
                                        </div>
                                        <br/>
                                        <div className="col-md-auto input-group input-group-lg">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text ltd-0radius ltd-bg1 border-0 fa fa-lock text-white"></span>
                                            </div>
                                            <input className="form-control form-control-lg ltd-0radius ltd-input-font" type="password" id="ltd-pass" placeholder="کلمه عبور"/>		
                                        </div>
                                        <br/>
                                        <div className="col-md-auto">
                                        <button type="submit" className="form-control form-control-lg 
                                            btn ltd-bg1 w-100 ltd-0radius ltd-input-font text-white">ورود به سیستم</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end body--> */}
                {/* <!--begin footer--> */}
                <div className="row mb-4 fixed-bottom " style={{paddingLeft: "10%"}}>
                    <div className="col-md-12">
                        <div id="social-footer" className="d-flex justify-content-end ">	 
                            <a href="#" className="ltd-color"><span className="fab fa-facebook fa-3x ltd-color1">&nbsp;</span></a>
                            <a href="#" className="ltd-color"><span className="fab fa-instagram fa-3x ltd-color1">&nbsp;</span></a>
                            <a href="#" className="ltd-color"><span className="fab fa-twitter fa-3x ltd-color1">&nbsp;</span></a>
                        </div>
                    </div>
                </div>
                {/* <!--end footer--> */}
            </div>
        </React.Fragment>        
    )

}

export default Login;

