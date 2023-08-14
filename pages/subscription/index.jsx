import Link from 'next/link'
import Image from 'next/image'

import subscripCss from "../../styles/subscription.module.css"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

const Subscription = () => {
    return (
        <>
            <HeadTag title="Subscription"/>
            <Navbar/>
            
            <Gap>
                <div className={subscripCss.subscripPage}>
                    <div className="container">
                        <h1 className='text-center'>Subscription</h1>
                            <div className="text-center mt-5">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link btn-lg active" id="pills-year-tab" data-bs-toggle="pill" data-bs-target="#pills-year" type="button" role="tab" aria-controls="pills-year" aria-selected="true">Yearly Plane</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link btn-lg" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="false">Monthly Plane</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-year" role="tabpanel" aria-labelledby="pills-year-tab">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className={subscripCss.plan_box}>
                                                    <h3>Basic Plan</h3>
                                                    <small>Free for a Month</small>
                                                    <h2>$30.99 <span>/ Year</span></h2>
                                                    <Link href="" className='btn btn-lg'>Join Course Plan</Link>
                                                    <ul>
                                                        <li className='text-success'>Unlimited Access Courses</li>
                                                        <hr />
                                                        <li className='text-success'>Certificate After Completion</li>
                                                        <hr />
                                                        <li className='text-danger'>24/7 Dedicated Support</li>
                                                        <hr />
                                                        <li className='text-danger'>Unlimited Emails</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className={subscripCss.plan_box}>
                                                    <h3>Standard Plan</h3>
                                                    <small>Most Popular</small>
                                                    <h2>$100.99 <span>/ Year</span></h2>
                                                    <Link href="" className='btn btn-lg'>Join Course Plan</Link>
                                                    <ul>
                                                        <li className='text-success'>Unlimited Access Courses</li>
                                                        <hr />
                                                        <li className='text-success'>Certificate After Completion</li>
                                                        <hr />
                                                        <li className='text-success'>24/7 Dedicated Support</li>
                                                        <hr />
                                                        <li className='text-success'>Unlimited Emails</li>
                                                        <hr />
                                                        <li className='text-success'>High Resolution Videos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className={subscripCss.plan_box}>
                                                    <h3>Exclusive Plan</h3>
                                                    <small>Free for a Month</small>
                                                    <h2>$99.99 <span>/ Year</span></h2>
                                                    <Link href="" className='btn btn-lg'>Join Course Plan</Link>
                                                    <ul>
                                                        <li className='text-success'>Unlimited Access Courses</li>
                                                        <hr />
                                                        <li className='text-success'>Certificate After Completion</li>
                                                        <hr />
                                                        <li className='text-danger disabled'>24/7 Dedicated Support</li>
                                                        <hr />
                                                        <li className='text-danger disabled'>Unlimited Emails</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className={subscripCss.plan_box}>
                                                    <h3>Basic Plan</h3>
                                                    <small>Free for a Month</small>
                                                    <h2>$10.99 <span>/ Year</span></h2>
                                                    <Link href="" className='btn btn-lg'>Join Course Plan</Link>
                                                    <ul>
                                                        <li className='text-success'>Unlimited Access Courses</li>
                                                        <hr />
                                                        <li className='text-success'>Certificate After Completion</li>
                                                        <hr />
                                                        <li className='text-danger'>24/7 Dedicated Support</li>
                                                        <hr />
                                                        <li className='text-danger'>Unlimited Emails</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className={subscripCss.plan_box}>
                                                    <h3>Standard Plan</h3>
                                                    <small>Most Popular</small>
                                                    <h2>$20.99 <span>/ Year</span></h2>
                                                    <Link href="" className='btn btn-lg'>Join Course Plan</Link>
                                                    <ul>
                                                        <li className='text-success'>Unlimited Access Courses</li>
                                                        <hr />
                                                        <li className='text-success'>Certificate After Completion</li>
                                                        <hr />
                                                        <li className='text-success'>24/7 Dedicated Support</li>
                                                        <hr />
                                                        <li className='text-success'>Unlimited Emails</li>
                                                        <hr />
                                                        <li className='text-success'>High Resolution Videos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className={subscripCss.plan_box}>
                                                    <h3>Exclusive Plan</h3>
                                                    <small>Free for a Month</small>
                                                    <h2>$39.99 <span>/ Year</span></h2>
                                                    <Link href="" className='btn btn-lg'>Join Course Plan</Link>
                                                    <ul>
                                                        <li className='text-success'>Unlimited Access Courses</li>
                                                        <hr />
                                                        <li className='text-success'>Certificate After Completion</li>
                                                        <hr />
                                                        <li className='text-danger disabled'>24/7 Dedicated Support</li>
                                                        <hr />
                                                        <li className='text-danger disabled'>Unlimited Emails</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </Gap>

            <Footer/>
        </>
    )
}

export default Subscription