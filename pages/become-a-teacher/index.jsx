import Link from "next/link"
import Image from "next/image"

import {BsArrowRight} from "react-icons/bs"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import Teacher1 from "../../public/team-01.jpg"
import Teacher2 from "../../public/team-02.jpg"
import Teacher3 from "../../public/team-03.jpg"
import teacherApply from "../../public/teacherApply.jpg"

import teacherCss from "../../styles/become-teacher.module.css"

const BecomeTeacher = () => {
    return (
        <>
            <HeadTag title="Become a teacher"/>
            <Navbar />
            
            <Gap>
                <div id={teacherCss.first_section}>
                    <div className="container">
                        <h1 className="text-center">Become a Teacher</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit facilis sit aperiam pariatur ducimus sequi facere dicta excepturi, necessitatibus distinctio cum quae. Quisquam totam adipisci iure non. Vel, vero.</p>
                    </div>
                </div>

                <div className={teacherCss.second_section}>
                    <div className="container">
                        <h6>INSTRUCTOR</h6>
                        <h2>Apply As Instructor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>

                        <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor" type="button" role="tab" aria-controls="instructor" aria-selected="true">Become an Intructor.</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="role-tab" data-bs-toggle="tab" data-bs-target="#role" type="button" role="tab" aria-controls="role" aria-selected="false">Intructor Role.</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="start-tab" data-bs-toggle="tab" data-bs-target="#start" type="button" role="tab" aria-controls="start" aria-selected="false">Start with courses.</button>
                            </li>
                        </ul>

                        <div className="tab-content mt-4" id="myTabContent">
                            <div className="tab-pane fade show active" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h3>Sit amet consectetur adipisicing</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloremque quae, dignissimos consectetur reprehenderit, mollitia nobis impedit at neque molestias totam. Quia placeat animi, rem eaque repellendus culpa fuga consequatur blanditiis consequuntur aperiam veritatis expedita quaerat facilis explicabo, a, ipsam voluptate rerum pariatur cumque. Facere in sit tempora fugit mollitia!</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <Image src={Teacher1} layout="responsive" alt=""></Image>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="role" role="tabpanel" aria-labelledby="role-tab">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h3>Sit amet consectetur adipisicing</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloremque quae, dignissimos consectetur reprehenderit, mollitia nobis impedit at neque molestias totam. Quia placeat animi, rem eaque repellendus culpa fuga consequatur blanditiis consequuntur aperiam veritatis expedita quaerat facilis explicabo, a, ipsam voluptate rerum pariatur cumque. Facere in sit tempora fugit mollitia!</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <Image src={Teacher2} layout="responsive" alt=""></Image>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="start" role="tabpanel" aria-labelledby="start-tab">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8">
                                        <h3>Sit amet consectetur adipisicing</h3>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur doloremque quae, dignissimos consectetur reprehenderit, mollitia nobis impedit at neque molestias totam. Quia placeat animi, rem eaque repellendus culpa fuga consequatur blanditiis consequuntur aperiam veritatis expedita quaerat facilis explicabo, a, ipsam voluptate rerum pariatur cumque. Facere in sit tempora fugit mollitia!</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <Image src={Teacher3} layout="responsive" alt=""></Image>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={teacherCss.third_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <Image src={teacherApply} layout="responsive" alt=""></Image>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <h6>FOR BECOME A INSTRUCTOR</h6>
                                <h2>Instructor Registration</h2>
                                <hr />
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="First Name" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Last Name" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Username" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="tel" placeholder="Phone No." className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="email" placeholder="Email" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="password" placeholder="Password" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="password" placeholder="Confirm Password" className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea name="" id="" cols="30" rows="5" placeholder="Bio" className="form-control form-control-lg"></textarea>
                                        </div>
                                    </div>

                                    <button className="btn btn-lg">Become a Instructor <BsArrowRight/> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Gap>

            <Footer />
        </>
    )
}

export default BecomeTeacher