import Link from "next/link"
import Image from "next/image"

import {BsArrowRight} from "react-icons/bs"
import {FiLinkedin, FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"

import footerCss from "../styles/Footer.module.css"

import Logo from "../public/logo.png"

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <div className={footerCss.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <Link href="">
                                <Image className="pb-4" src={Logo} width="0" height="0" alt=""></Image>
                            </Link>
                            <p className="mb-0">We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
                            <Link href="/contact-us" id={footerCss.footerBtn} className="btn btn-lg">Contact with us <BsArrowRight/></Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-4">Useful Links</h5>
                            <ul className={footerCss.footerItems}>
                                <li><Link href="">Marketplace</Link></li>
                                <li><Link href="">Kindergarten</Link></li>
                                <li><Link href="">University</Link></li>
                                <li><Link href="">GYM Coaching</Link></li>
                                <li><Link href="">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="mb-4">Our Company</h5>
                            <ul className={footerCss.footerItems}>
                                <li><Link href="">Contact Us</Link></li>
                                <li><Link href="">Become Teacher</Link></li>
                                <li><Link href="">Blog</Link></li>
                                <li><Link href="">Instructor</Link></li>
                                <li><Link href="">Events</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="mb-4">Get Contact</h5>
                            <p><b>Phone:</b> (406) 555-0120</p>
                            <p><b>E-mail:</b> rainbow@example.com</p>
                            <p><b>Location:</b> North America, USA</p>
                            <ul id={footerCss.socialIcon}>
                                <li><Link href=""><FiFacebook/></Link></li>
                                <li><Link href=""><FiTwitter/></Link></li>
                                <li><Link href=""><FiInstagram/></Link></li>
                                <li><Link href=""><FiLinkedin/></Link></li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-lg-5 text-lg-start text-md-center">
                            <p className="mb-0" id={footerCss.copywrite}>Copyright © {year} <Link href="">Parvez Rabbi</Link>. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-7 text-lg-end text-md-center">
                            <ul id={footerCss.termsCondition}>
                                <li><Link href="">Terms of service</Link></li>
                                <li><Link href="">Privacy policy</Link></li>
                                <li><Link href="/subscription">Subscription</Link></li>
                                <li><Link href="/login">Login & Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer