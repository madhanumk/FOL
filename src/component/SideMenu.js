import React, { useState } from 'react'
import { Link } from 'react-router-dom/dist';
import "./SideMenu.css"


const SideMenu = () => {

    const [menu, setMenu] = useState(false);
    const [menuStatus, setMenuStatus] = useState('');
    const [mobileMenuStatus, setMobileMenuStatus] = useState('');


    function menuopenclose() {
        if (menu) {
            setMenu(false)
            setMenuStatus("")
            setMobileMenuStatus("")
        }
        else {
            setMenu(true);
            setMenuStatus("is-active")
            setMobileMenuStatus("opened")
        }


    }



    return (
        <div>
            <div className="elisc_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden">
                <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
                    <div className='logo-cover'>
                        <img src='assets/img/logo/logo.png' alt='logo'  className='logo-mobile' />
                    </div>
                    <div className="trigger" onClick={menuopenclose}>
                        <div className={`hamburger hamburger--slider ${menuStatus}`}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`elisc_tm_mobile_menu ${mobileMenuStatus}`}>
                <div className="inner relative w-full h-full text-right px-[20px] pt-[30px] pb-[20px] outer-menu">
                    <div className="wrapper sidemenu-main">
                        <div>
                            <div className="avatar w-[70px] h-[70px] relative float-right mb-[50px] responsive-menu">
                                <div className="image absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/about/1.jpg"></div>
                            </div>
                            {/* <div className="menu_list w-full h-auto clear-both float-left mb-[50px] ">
                                <ul className="transition_link m-0">
                                    <li className="mb-[7px] active">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="mb-[7px] ">
                                        <Link to="/chit-details">Chit Details</Link>
                                    </li>
                                    <li className="mb-[7px] ">
                                        <Link to="/pay-due">Pay Due</Link>
                                    </li>
                                    <li className="mb-[7px] ">
                                        <Link to="/payment">Payment</Link>
                                    </li>
                                    <li className="mb-[7px] ">
                                        <Link to="/closed-due">Closed Due</Link>
                                    </li>
                                    <li className="mb-[7px]" onClick={showConfirm}>
                                        <Link to="">Logout</Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className='socialmedia-outer'>
                            <div className="social w-full float-left mb-[5px]">
                                <ul>
                                    <li className="mr-[8px] inline-block"><a className="text-[#333]" target='_blank' href="https://www.facebook.com/sreethangamjewellry"><img className="svg"
                                        src="assets/img/svg/social/facebook.svg" alt="image" /></a></li>
                                    <li className="mr-[8px] inline-block"><a className="text-[#333]" target='_blank' href="https://twitter.com/sree_thangam"><img className="svg"
                                        src="assets/img/svg/social/twitter.svg" alt="image" /></a></li>
                                    <li className="mr-[8px] inline-block"><a className="text-[#333]" target='_blank' href="https://www.instagram.com/sree_thangam_jewellery/"><img className="svg"
                                        src="assets/img/svg/social/instagram.svg" alt="image" /></a></li>
                               
                                </ul>
                            </div>
                            <div className="copyright w-full float-left">
                                Copyright © {new Date().getFullYear()} Sree Thangam Jewellery. Concept by <Link to="https://irepute.in/" target='blank'>repute.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="elisc_tm_sidebar w-[370px] h-[100vh] fixed left-0 top-0 border-solid border-[rgba(85,82,124,.1)] border-r">
                <div className="sidebar_inner w-full float-left h-auto clear-both text-center">
                    <div className="author w-full float-left pt-[60px]">
                        {/* <div className="image relative w-[118px] inline-block"><img className="relative opacity-0 min-w-full"
                            src="assets/img/thumbs/1-1.jpg" alt="image" />
                            <div className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                                data-img-url="assets/img/about/1.jpg">

                                </div>
                        </div> */}
                        <div className='logo-cover'>
                            <img src='assets/img/logo/logo.png' alt='logo'  className='logo-mobile' />
                        </div>
                        <div className="name w-full float-left mt-[-19px]">
                            {/* <h3><span>Robert Elisc<span className="back">Robert Elisc</span></span></h3> */}
                        </div>
                    </div>
                    {/* <div className="menu scrollable w-full float-left">
                        <ul className="transition_link h-full flex items-center justify-center flex-col">
                            <li className="mb-[7px] active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="mb-[7px] ">
                                <Link to="/chit-details">Chit Details</Link>
                            </li>
                            <li className="mb-[7px] ">
                                <Link to="/pay-due">Pay Due</Link>
                            </li>
                            <li className="mb-[7px] ">
                                <Link to="/payment">Payment</Link>
                            </li>
                            <li className="mb-[7px] ">
                                <Link to="/closed-due">Closed Due</Link>
                            </li>
                            <li className="mb-[7px] " onClick={showConfirm}>
                                <Link to="">Logout</Link>
                            </li>
                        </ul>
                    </div> */}
                    <div className="copyright absolute bottom-[50px]">
                        <div className="social w-full float-left mb-[7px]">
                            <ul>
                                <li className="mr-[3px] inline-block"><a
                                    className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                    target='_blank' href="https://www.facebook.com/sreethangamjewellry"><i
                                        className="icon-facebook-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i></a>
                                </li>
                                <li className="mr-[3px] inline-block"><a
                                    className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                    target='_blank' href="https://twitter.com/sree_thangam"><i
                                        className="icon-twitter-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i></a>
                                </li>
                                <li className="mr-[3px] inline-block"><a
                                    className="w-[40px] h-[40px] inline-block relative rounded-full text-dark-color"
                                    href="https://www.instagram.com/sree_thangam_jewellery/" target='_blank'><i
                                        className="icon-instagram-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[16px]"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="text py-0 px-[50px]">
                            Copyright © {new Date().getFullYear()} Sree Thangam Jewellery. Concept by <Link to="https://irepute.in/" target='blank'>repute.</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideMenu