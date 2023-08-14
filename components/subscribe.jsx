import Link from "next/link"

import {BsArrowRight} from "react-icons/bs"

import SubCss from "../styles/subscribe.module.css"

const Subscribe = () => {
    return (
        <>
            <div className={SubCss.subscribe_section}>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <h6 className="text-center">GET LATEST HISTUDY UPDATE</h6>
                                <h2 className="text-center">Subscribe Our Newsletter</h2>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae beatae culpa, delectus ab, adipisci minus placeat molestias commodi mollitia similique officiis. Voluptatem, iure adipisci! Maiores eum laboriosam natus, beatae saepe cum, debitis dignissimos esse eos quo architecto a mollitia.</p>
                                <div className={SubCss.subscribe}>
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8">
                                            <input type="email" placeholder="Enter Your Email . . ." className="form-control form-control-lg" />
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="text-end">
                                                <button className="btn btn-lg">Subscribe <BsArrowRight/> </button>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <p className="text-center">No ads, No trails, No commitments</p>
                                <div className="row text-center">
                                    <div className="col-lg-6 col-md-6">
                                        <h2>500 +</h2>
                                        <h5>Successfully Trained</h5>
                                        <p>Learners & counting</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <h2>100 +</h2>
                                        <h5>Certification Students</h5>
                                        <p>Online Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Subscribe