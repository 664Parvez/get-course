import NavbarCss from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import React, {useState, useEffect} from "react"

import {BiShoppingBag, BiSearch, BiUser, BiSolidShoppingBagAlt, BiLogoDiscourse} from "react-icons/bi"
import {TbMenu, TbCategory} from "react-icons/tb"
import {LiaTimesSolid, LiaAwardSolid, LiaClock} from "react-icons/lia"
import {PiHouseBold, PiBookBookmarkBold} from "react-icons/pi"
import {FiHeart, FiStar, FiSettings, FiLogOut} from "react-icons/fi"
import {FaHourglassStart} from "react-icons/fa"

import Logo from "../public/logo.png"
import WhiteLogo from "../public/white-logo.png"
import Profile from "../public/profile.jpg"

const Navbar = () => {

    const [navbarChange, setNavbarChange] = useState(false)
    const [resNav, setResNev] = useState(false)
    const [crossIcon, setCrossIcon] = useState(false)


    const navChange = () => {
        if(window.scrollY >= 60) {
            setNavbarChange(true)
        } else {
            setNavbarChange(false)
        }
    }

    useEffect(() => {
        if(resNav === true) {
            setCrossIcon(true)
        } else {
            setCrossIcon(false)
        }
    }, [resNav])

    useEffect(() => {
        window.addEventListener("scroll", navChange)
    }, [])

    return (
        <>
            <div className={navbarChange ? `${NavbarCss.scroll_nav}` : `${NavbarCss.nav}`}>
                <div className={NavbarCss.logo}>
                    <Link href=""> {navbarChange ? <Image src={Logo} width="0" height="0" alt=""></Image> : <Image src={WhiteLogo} width="0" height="0" alt=""></Image>}</Link>
                </div>
                <ul className={NavbarCss.navItems}>

                    {/* Course Category */}
                    <li className={NavbarCss.course}><Link href="#" id={NavbarCss.courseBtn}><TbCategory /> Course Category</Link>
                    <div id={navbarChange ? `${NavbarCss.courseDropScroll}` : `${NavbarCss.courseDrop}`}>
                        <div className="row">
                            <div className="col-3">
                                <ul id={NavbarCss.courseFirst}>
                                    <li className="mb-4">Courses Type</li>
                                    <li><BiLogoDiscourse /> Online Courses</li>
                                    <li><BiLogoDiscourse /> Offline Courses</li>
                                    <li><BiLogoDiscourse /> Top Selling Courses</li>
                                    <li><BiLogoDiscourse /> Design Related Courses</li>
                                    <li><BiLogoDiscourse /> Programing Related Courses</li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li className="mb-4"><LiaAwardSolid />Top Design Courses</li>
                                    <li><Link href="">Adobe Illustrator</Link></li>
                                    <li><Link href="">Adobe Photoshop</Link></li>
                                    <li><Link href="">Adobe XD</Link></li>
                                    <li><Link href="">Adobe Premier Pro</Link></li>
                                    <li><Link href="">Adobe After Effect</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <ul>
                                    <li className="mb-4"><LiaAwardSolid />Top Marketing Courses</li>
                                    <li><Link href="">SEO (Search Engine Optimization)</Link></li>
                                    <li><Link href="">Digital Marketing</Link></li>
                                    <li><Link href="">Advertisement</Link></li>
                                    <li><Link href="">Google Ads</Link></li>
                                    <li><Link href="">Email Marketing</Link></li>
                                </ul>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                    </li>

                    {/* Home */}
                    <li className={NavbarCss.home}><Link href="/">Home</Link></li>

                    {/* Courses */}
                    <li className={NavbarCss.cors}><Link href="courses">Courses</Link></li>

                    {/* About Us */}
                    <li><Link href="about-us">About Us</Link></li>

                    {/* Become a teacher */}
                    <li><Link href="become-a-teacher">Become a Teacher</Link></li>

                    {/* Blog */}
                    <li><Link href="/blog">Blog</Link></li>

                    {/* Contact */}
                    <li><Link href='/contact-us'>Contact Us</Link></li>
                </ul>
                
                <ul id={NavbarCss.navCart} className="align-items-center">
                    <li><BiSearch /></li>
                    <li><Link href=""><BiShoppingBag /></Link></li>
                    <li className={NavbarCss.admin}><Link href=""><BiUser /><span className={NavbarCss.adminText}> Admin</span></Link>
                        <div className={NavbarCss.admin_drop}>
                            <div className="p-4">
                                <Image className={NavbarCss.profile} src={Profile} width="50" height="50" alt=""></Image>
                                <h5>Name of User</h5>
                            </div>
                            <ul>
                                <div className="px-2">
                                    <li><Link href=""><PiHouseBold/> My Dashboard</Link></li>
                                    <li><Link href=""><PiBookBookmarkBold/> Bookmark</Link></li>
                                    <li><Link href=""><BiSolidShoppingBagAlt/> Enroll Courses</Link></li>
                                    <li><Link href=""><FiHeart/> Wishlist</Link></li>
                                    <li><Link href=""><FiStar/> Reviews</Link></li>
                                    <li><Link href=""><LiaClock/> Order History</Link></li>
                                </div>
                                <hr />
                                <div className="px-2">
                                    <li><Link href=""><FaHourglassStart/> Getting Started</Link></li>
                                </div>
                                <hr />
                                <div className="px-2">
                                    <li><Link href=""><FiSettings/> Settings</Link></li>
                                    <li><Link href=""><FiLogOut/> Logout</Link></li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li onClick={() => setResNev(!resNav)}> {crossIcon ? <LiaTimesSolid className={NavbarCss.crossMenu} /> : <TbMenu className={NavbarCss.resMenu} />} </li>
                </ul>

            </div>
                <div className={resNav ? `${NavbarCss.responsiveNav}` : `${NavbarCss.responsiveNav_hide}` }>
                    <ul>
                        <li><Link href="">Home</Link></li>
                        <li><Link href="">Courses</Link></li>
                        <li><Link href="">About Us</Link></li>
                        <li><Link href="">Become a Teacher</Link></li>
                        <li><Link href="">Blog</Link></li>
                        <li><Link href="">Contact Us</Link></li>
                        <li><Link href='' id={NavbarCss.enrollBtn} className="btn"><marquee>Enroll Now</marquee></Link></li>
                    </ul>
                </div>
        </>
    )
}

export default Navbar