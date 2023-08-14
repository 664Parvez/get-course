import Link from "next/link"
import Image from "next/image"

import {FiHeadphones} from "react-icons/fi"
import {BiMessageDetail, BiSolidEditLocation} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import contactCss from "../../styles/contact.module.css"

import ContactImage from "../../public/contact.jpg"

const Contact = () => {
    return(
        <>
            <HeadTag title="Contact Us"/>
            <Navbar />

            <Gap>
                <div className={contactCss.contact_first}>
                    <div className="row">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-sx-12"></div>
                        <div className="col-lg-2 col-md-4 col-sm-12 col-sx-12">
                            <p className="text-center mx-4" id={contactCss.conTitle}>CONTACT US</p>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-12 col-sx-12"></div>
                    </div>
                    <h1 className="text-center">Histudy Course Contact <br /> can join with us.</h1>
                </div>

                <div className={contactCss.contact_second}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className={contactCss.contact_info_div}>
                                    <FiHeadphones className={contactCss.contactInfoIcon} />
                                    <h5>Contact Phone Number</h5>
                                    <p className="mb-0"><Link href="tel:+444 555 666 777">+444 555 666 777</Link></p>
                                    <p className="mb-0"><Link href="tel:+222 222 222 333">+222 222 222 333</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className={contactCss.contact_info_div}>
                                    <BiMessageDetail className={contactCss.contactInfoIcon} />
                                    <h5>Our Email Address</h5>
                                    <p className="mb-0"><Link href="mailto:admin@gmail.com">admin@gmail.com</Link></p>
                                    <p className="mb-0"><Link href="mailto:example@gmail.com">example@gmail.com</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className={contactCss.contact_info_div}>
                                    <BiSolidEditLocation className={contactCss.contactInfoIcon} />
                                    <h5>Our Location</h5>
                                    <p className="mb-0">5678 Bangla Main Road, cities 580</p>
                                    <p className="mb-0">GBnagla, example 54786</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={contactCss.contact_third}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Image src={ContactImage} width="0" height="0" alt=""></Image>
                            </div>
                            <div className="col-lg-6">
                                <p>EDUCATION FOR EVERYONE</p>
                                <h2>Get a Free Course You Can Contact With Me</h2>
                                <form action="">
                                    <input type="text" name="" id="name" className="form-control form-control-lg" placeholder="Your Name" />

                                    <input type="email" name="" id="email" className="form-control form-control-lg" placeholder="Your Email" />

                                    <input type="text" name="" id="name" className="form-control form-control-lg" placeholder="Your Subject" />

                                    <textarea name="" id="" cols="30" rows="5" className="form-control form-control-lg" placeholder="Your Message"></textarea>

                                    <Link href="" className="btn btn-lg">GET IT NOW <BsArrowRight /></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 p-4" id={contactCss.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.229522317766!2d90.40309515!3d23.869846199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43c3a4e9ced%3A0xb032c4b6ec0c1bf9!2sUttara%20Adhunik%20Medical%20College%20Hospital(BMSRI)!5e0!3m2!1sen!2sbd!4v1689749186828!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Gap>

            <Footer/>
        </>
    )
}

export default Contact