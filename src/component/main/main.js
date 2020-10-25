import React, {Component, useEffect} from 'react';
import Mail from '../../images/Menu/mali.png';
import Omoomi from '../../images/Menu/omoomi.png';
import Other from '../../images/Menu/other.png';
import DaftarKol from '../../images/Menu/daftarkol.png'
import Paye from '../../images/Menu/paye.png'
import Hesab from '../../images/Menu/hesab.png'
import Avatar from '../../images/avatar.png'
import '../../css/ltd-main.css';
import $ from 'jquery';


const Main = () =>{
    
    useEffect(()=>{
        $("#flip").on('click',(function(){

			if(document.getElementById("ltd-sidebar").style.width == "0%")

			{

				document.getElementById("ltd-sidebar").style.width = "16.67%";

				document.getElementById("ltd-main").style.marginRight = "16.67%";

				document.getElementById("tab-content").style.width = "80%";	

				$("#ltd-sidebar").addClass("col-sm-2");

				$("#ltd-main").removeClass("col-sm-12");

				$("#ltd-main").addClass("col-sm-10");

				$("#flip").removeClass("fa-angle-left");

				$("#flip").addClass("fa-angle-right");			

			}

			else

			{

				$("#ltd-sidebar").removeClass("col-sm-2");

				document.getElementById("ltd-sidebar").style.width = "0%";

				document.getElementById("ltd-main").style.marginRight = "0%";

				document.getElementById("tab-content").style.width = "97%";	

				$("#ltd-main").removeClass("col-sm-10");

				$("#ltd-main").addClass("col-sm-12");

				$("#flip").removeClass("fa-angle-right");

				$("#flip").addClass("fa-angle-left");

			}

		}));

		$(function(){

			$(".sidebar-obj > ul > li").addClass("ltd-bg1");

			$(".sidebar-obj > ul > li").addClass("ltd-color5");

			$(".sidebar-obj > ul > ul> li").addClass("ltd-bg5");

			$(".sidebar-obj > ul > ul> ul > li").addClass("ltd-bg6");

			$(".sidebar-obj > ul > ul> ul > ul > li").addClass("ltd-bg3");

			$(".sidebar-obj > ul > ul").addClass("show");

			$(".sidebar-obj > ul > ul> ul > li > span").css("padding-right","10px");

			$(".sidebar-obj > ul > ul> ul > ul > li > span").css("padding-right","20px");

		});
    },[])
   
    return(        
        <React.Fragment>
            <div className="container-fluid">

                <div className="row">

                    {/*begin sidebar*/}

                    <div id="ltd-sidebar" className="col-sm-2  ltd-sidebar ltd-bg2">

                        <div className="w-100 d-flex justify-content-center">

                            <div className="row-cols-1 w-100 ltd-IRANSans-medium ltd-color111">

                                {/*begin company name*/}

                                <div className="w-100 badge ltd-bg5 mt-2 p-2">

                                    <span>شرکت پدید آوران امید پارس</span>

                                </div>

                                {/*end company name*/}

                                {/*begin recently*/}

                                <div className="mt-3 ltd-font sidebar-obj" style={{right: "10px"}}>

                                    <ul className="list-group ltd-0radius p-0">

                                        <li href="#" className="list-group-item list-group-item-action text-center">صفحات به تازگی بازدید شده</li>							  

                                    </ul> 

                                </div>

                                {/*end recently*/}

                                {/*begin menu*/}

                                <div id="ltd-menu" className=" mt-3 ltd-font sidebar-obj">

                                    <ul className="list-group ltd-0radius p-0">

                                    <li data-toggle="collapse" data-target="#ul2-1" href="#" 

                                            className="list-group-item list-group-item-action text-center ">

                                            <span>همه صفحات</span>

                                    </li>

                                    <ul id="ul2-1" className="list-group ltd-0radius p-0 collapse">

                                        <li href="#" className="list-group-item list-group-item-action">

                                            <span>

                                                <img src={Omoomi} alt="Omoomi"/>عمومی

                                            </span>

                                        </li>

                                        <li data-toggle="collapse" data-target="#ul2-2" href="#" className="list-group-item list-group-item-action">

                                            <span>

                                                <img src={Mail} alt="Mail"/>مالی

                                            </span>

                                        </li>

                                        <ul id="ul2-2" className="list-group ltd-0radius p-0 collapse">

                                            <li href="#" className="list-group-item list-group-item-action">

                                                <span><img src={Other} alt="Other"/>دارایی

                                                </span>

                                            </li>

                                            <li data-toggle="collapse" data-target="#ul3-2" href="#" className="list-group-item list-group-item-action">		<span>

                                                <img src={DaftarKol} alt="DaftarKol"/>دفتر کل

                                                </span>

                                            </li>

                                            <ul id="ul3-2" className="list-group ltd-0radius p-0 collapse">

                                                <li href="#" className="list-group-item list-group-item-action">

                                                    <span>

                                                        <img src={Other} alt="Other"/>فهرست

                                                    </span>

                                                </li>

                                                <li href="#" className="list-group-item list-group-item-action">

                                                    <span>

                                                        <img src={Paye} alt="Paye"/>اطلاعات پایه

                                                    </span>

                                                </li>

                                                <li href="#" className="list-group-item list-group-item-action">

                                                    <span>

                                                        <img src={Hesab} alt="Hesab"/>حساب ها

                                                    </span>

                                                </li>

                                            </ul>

                                        </ul>								   

                                    </ul> 

                                    </ul> 

                                </div>

                                {/*end menu*/}

                            </div>					

                        </div>

                    </div>

                    {/* end sidebar*/}

                    {/*begin main*/}

                    <div id="ltd-main" className="col-sm-10 ltd-mian ltd-bg3 px-0 ">

                        {/*begin flip*/}

                        <div>					

                            <i id="flip" className="fa fa-angle-right fa-2x pt-2 mt-5 ltd-bg2 position-fixed text-white" ></i>

                        </div>

                        {/*end flip*/}

                        {/*begin header*/}

                        <div className="row mr-0 mt-2 ltd-color1" >

                            <div className="col-sm-4 d-flex justify-content-start ltd-IRANSans-medium">

                                <div className="mr-0">

                                    <span id="preferences" className="fa fa-ellipsis-v fa-2x ltd-icon"></span>

                                </div>

                                <div className="badge ltd-bg5 p-2 mr-2 ltd-header-badge">

                                    <span>1399/10/17</span>

                                </div>

                                <div className="badge ltd-bg5 p-2 mr-2 ltd-header-badge">

                                    <span>دفتر کل : دفتر اصلی</span>

                                </div>

                                <div className="badge ltd-bg5 p-2 mr-2 ltd-header-badge">

                                    <span>دوره مالی : 99</span>

                                </div>

                            </div>

                            <div className="col-sm-4 ltd-IRANSans-light" >

                                <div className="input-group">

                                    <div className="input-group-prepend">

                                        <span id="srchic" className="input-group-text fa fa-search ltd-bg5 border-0"></span>

                                    </div>

                                    <input id="srchbx" type="text" className="border-0 ltd-bg5 w-75"/>

                                </div>

                            </div>

                            <div className="col-sm-4 d-flex justify-content-end ltd-IRANSans-medium" >

                                <div>

                                    <span className="far fa-question-circle fa-2x ml-2 ltd-icon" aria-hidden="true"></span>

                                </div>

                                <div>

                                    <span className="far fa-cog fa-2x ml-2 ltd-icon" aria-hidden="true"></span>

                                </div>

                                <div>

                                    <span className="far fa-bell fa-2x ml-2 ltd-icon" aria-hidden="true"></span>

                                </div>
                                
                                <div id="avatar-badge" className="ltd-avt badge ltd-bg5 p-2  ltd-header-badge">

                                    <span>عادل عامری</span>

                                </div>
                                
                            </div>	
                                
                            <div id="avatar" className="ltd-avt p-0 m-0 position-fixed">

                                <img src={Avatar} className="rounded-circle ltd-bg5 pt-0 mt-0" alt="Cinque Terre" style={{width: "50px", height: "50px"}}/>

                            </div>
                            
                        </div>

                        {/*ned header*/}

                        {/*begin content*/}				

                        <div className="ltd-content ltd-color1">

                            {/*begin tab title*/}

                            <ul className="nav nav-tabs ltd-IRANSans-bold border-0" >

                                <li className="nav-item ltd-bg-tab" dir="ltr">

                                    <a data-toggle="tab" href="#home" className="nav-link active">

                                        <span className="fa fa-times ltd-close-tab"></span>&nbsp;&nbsp;اطلاعات پایه 

                                        <img src="images/Menu/paye.png" alt="pic" style={{height: "25px"}}/>

                                    </a>

                                </li>

                                <li className="nav-item ltd-bg-tab" dir="ltr">

                                    <a data-toggle="tab" href="#menu1" className="nav-link">

                                        <span className="fa fa-times ltd-close-tab">&nbsp;</span>&nbsp;&nbsp;منوی اول

                                        <img src="images/Menu/daftarkol.png" alt="pic" style={{height: "25px"}}/>

                                    </a>

                                </li>

                                <li className="nav-item ltd-bg-tab" dir="ltr">

                                    <a data-toggle="tab" href="#menu2" className="nav-link">

                                        <span className="fa fa-times ltd-close-tab">&nbsp;</span>&nbsp;&nbsp;منوی دوم

                                        <img src="images/Menu/omoomi.png" alt="pic" style={{height: "25px"}}/>

                                    </a>

                                </li>

                                <li className="nav-item ltd-bg-tab" dir="ltr">

                                    <a data-toggle="tab" href="#menu3" className="nav-link">

                                        <span className="fa fa-times ltd-close-tab">&nbsp;</span>&nbsp;&nbsp;منوی سوم

                                        <img src="images/Menu/other.png" alt="pic" style={{height: "25px"}}/>

                                    </a>

                                </li>

                                <li id="addtab">

                                    <span className="fas fa-plus-square fa-2x mr-2 mt-2"></span>

                                </li>

                            </ul>

                            {/*end tab title*/}

                            {/*begin tab content*/}

                            <div id="tab-content" className="ltd-tabs tab-content ltd-bg-tab ltd-IRANSans-regular">

                                <div id="home" className="tab-pane fade in active show">
                                    
                                    {/* <iframe src="add-document.html" title="add document" className="ltd-iframe"></iframe> */}
                                    
                                </div>

                                <div id="menu1" className="tab-pane fade h-75 w-75">

                                    {/* <iframe src="accounts.html" title="accounts" className="ltd-iframe"></iframe> */}

                                </div>

                                <div id="menu2" className="tab-pane fade">

                                    <h3>Menu 2</h3>

                                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                </div>

                                <div id="menu3" className="tab-pane fade">

                                <h3>Menu 3</h3>

                                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                </div>

                            </div>

                            {/*end tab content*/}

                        </div>

                        {/*end content*/}

                    </div>

                    {/*end main*/}

                </div>		

            </div>
            <script src="test.js"/>
        </React.Fragment>
    )
}

export default Main;