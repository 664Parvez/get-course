import Link from "next/link"
import Image from "next/image"

import {BsArrowRight} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {FiMonitor, FiBook} from "react-icons/fi"
import {FaLocationArrow} from "react-icons/fa"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'
import Subscribe from "../../components/subscribe"

import aboutCss from "../../styles/about.module.css"

import Second1 from "../../public/about-01.jpg"
import Second2 from "../../public/about-02.jpg"
import Second3 from "../../public/about-03.jpg"
import Teacher1 from "../../public/team-01.jpg"
import Teacher2 from "../../public/team-02.jpg"
import Teacher3 from "../../public/team-03.jpg"
import Teacher4 from "../../public/team-04.jpg"
import Teacher5 from "../../public/team-05.jpg"
import Teacher6 from "../../public/team-06.jpg"

const Aboutus = () => {
    return (
        <>
            <HeadTag title="About us" />
            <Navbar />
            
            <div id={aboutCss.about_first}>
                <Gap>
                    <div className="text-center">
                        <h6>HOW WE WORK</h6>
                        <h1>Take Challenge for Build Your Life. <br /> The World Most Lessons for Back to Your Life.</h1>
                        <Link href="" className="btn btn-lg">More About Us <BsArrowRight/> </Link>
                    </div>
                </Gap>
            </div>

            <Gap>
                <div className={aboutCss.about_second}>
                    <div className="container-fluid">
                        <div className="row" id={aboutCss.secondSection}>
                            <div className="col-lg-6 col-md-6 text-xxl-center">
                                <Image src={Second1} height="0" width="0" className={aboutCss.second_img_one} alt=""></Image> {/* 450 350 */}
                                <Image src={Second1} height="0" width="0" layout="responsive" className={aboutCss.second_res_img_one} alt=""></Image>
                                <Image src={Second2} height="200" width="250" className={aboutCss.second_img_two} alt=""></Image>
                                <Image src={Second3} height="330" width="270" className={aboutCss.second_img_three} alt=""></Image>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h6>KNOW ABOUT US</h6>
                                <h2>Know About Histudy Learning Platform</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <div className={aboutCss.icon}>
                                            <AiOutlineHeart />
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <h5>Flexible Classes</h5>
                                        <p>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                                    </div>

                                    <div className="col-2">
                                        <div className={aboutCss.icon}>
                                            <FiBook />
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <h5>Learn From Anywhere</h5>
                                        <p>Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                                    </div>

                                    <div className="col-2">
                                        <div className={aboutCss.icon}>
                                            <FiMonitor />
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <h5>Experienced Teachers service.</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquid mollitia Officia, aliquid mollitia.</p>
                                    </div>
                                </div>
                                <Link href="" className="btn btn-lg">More About Us <BsArrowRight/> </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={aboutCss.about_third}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">        
                                <h6>HOW WE WORK</h6>
                                <h2>Build your Career And Upgrade Your Life</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <Link href="" className="btn btn-lg">More About Us <BsArrowRight/> </Link>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <iframe className="rounded" width="100%" height="380" src="https://www.youtube.com/embed/BAUGBnggQ7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={aboutCss.about_forth}>
                    <div className="container">
                        <h6 className="text-center">SKILL TEACHER</h6>
                        <h2 className="text-center">Whose Inspirations You Love</h2>
                        <p className="text-center">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                        <div className={aboutCss.teachers}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="card" id={aboutCss.teachers_card}>
                                        <Image src={Teacher1} layout="responsive" alt=""></Image>
                                        <h3 className="text-center mt-4">Alejandro</h3>
                                        <h5 className="text-center">Math Teacher</h5>
                                        <p className="text-center"><FaLocationArrow /> CO Miego, AD,USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card" id={aboutCss.teachers_card}>
                                        <Image src={Teacher2} layout="responsive" alt=""></Image>
                                        <h3 className="text-center mt-4">John Due</h3>
                                        <h5 className="text-center">Depertment Head</h5>
                                        <p className="text-center"><FaLocationArrow /> CO Miego, AD,USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card" id={aboutCss.teachers_card}>
                                        <Image src={Teacher3} layout="responsive" alt=""></Image>
                                        <h3 className="text-center mt-4">Joo Bieden</h3>
                                        <h5 className="text-center">Math Teacher</h5>
                                        <p className="text-center"><FaLocationArrow /> CO Miego, AD,USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card" id={aboutCss.teachers_card}>
                                        <Image src={Teacher4} layout="responsive" alt=""></Image>
                                        <h3 className="text-center mt-4">Jogn Due</h3>
                                        <h5 className="text-center">English Teacher</h5>
                                        <p className="text-center"><FaLocationArrow /> CO Miego, AD,USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card" id={aboutCss.teachers_card}>
                                        <Image src={Teacher5} layout="responsive" alt=""></Image>
                                        <h3 className="text-center mt-4">John Due</h3>
                                        <h5 className="text-center">Math Teacher</h5>
                                        <p className="text-center"><FaLocationArrow /> CO Miego, AD,USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="card" id={aboutCss.teachers_card}>
                                        <Image src={Teacher6} layout="responsive" alt=""></Image>
                                        <h3 className="text-center mt-4">Alejandro</h3>
                                        <h5 className="text-center">Math Teacher</h5>
                                        <p className="text-center"><FaLocationArrow /> CO Miego, AD,USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Subscribe />

            </Gap>

            <Footer />

        </>
    )
}

export default Aboutus