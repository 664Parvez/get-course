import Link from 'next/link'
import Image from 'next/image'

import checkoutCss from "../../styles/checkout.module.css"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

const Checkout = () => {
    return (
        <>
            <HeadTag title="Checkout"/>
            <Navbar/>
            
            <Gap>
                <div className={checkoutCss.checkoutPage}>
                    <div className="container">
                        <h1 className='text-center'>Checkout</h1>
                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6">
                                <div className={checkoutCss.checkout_form}>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">First Name *</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' id={checkoutCss.form_control} placeholder='First Name' required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">Last Name *</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' id={checkoutCss.form_control} placeholder='Last Name' required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">Email *</label>
                                                <input type="email" className='pb-3 pt-3 mb-4 form-control' id={checkoutCss.form_control} placeholder='Email' required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">Phone No. *</label>
                                                <input type="tel" className='pb-3 pt-3 mb-4 form-control' id={checkoutCss.form_control} placeholder='Phone no.' required />
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <label htmlFor="">Company Name</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' id={checkoutCss.form_control} placeholder='Company Name' />
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <label htmlFor="">Address *</label>
                                                <input type="text" className='pb-3 pt-3 mb-3 form-control' id={checkoutCss.form_control} placeholder='Address Line 1' required />
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' id={checkoutCss.form_control} placeholder='Address Line 2' />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">Country *</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' placeholder='Country' id={checkoutCss.form_control} required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">Town / City *</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' placeholder='Town / City' id={checkoutCss.form_control} required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">State *</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' placeholder='State' id={checkoutCss.form_control} required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label htmlFor="">Zip code</label>
                                                <input type="text" className='pb-3 pt-3 mb-4 form-control' placeholder='Zip Code' id={checkoutCss.form_control} required />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <button className="btn btn-lg">Place Order</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <h4 className='text-white' id={checkoutCss.cartTotaltext}>Cart Total</h4>
                                <div className={checkoutCss.price_catelog}>
                                    <div className="row">
                                        <div className="col-6">
                                            <h3><b>Product</b></h3>
                                            <ul>
                                                <li>React JS Course</li>
                                                <li>JavaScript Course</li>
                                                <li>Node JS Course</li>
                                            </ul>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h3 className='text-end'><b>Total</b></h3>
                                            <ul>
                                                <li>$60</li>
                                                <li>$120</li>
                                                <li>$100</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <h3><b>Grand Total</b></h3>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h3><b>$280.00</b></h3>
                                        </div>
                                    </div>
                                </div>

                                <h4 className='mt-5 text-white'>Payment Methods</h4>
                                <div className={checkoutCss.payment_methods}>
                                    <div className="form-check" id={checkoutCss.paymentGetwaySelect}>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Visa Card
                                        </label>
                                    </div>
                                    <div className="form-check" id={checkoutCss.paymentGetwaySelect}>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Payoneer
                                        </label>
                                    </div>
                                    <div className="form-check" id={checkoutCss.paymentGetwaySelect}>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            bKash
                                        </label>
                                    </div>
                                    <div className="form-check" id={checkoutCss.paymentGetwaySelect}>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Rocket
                                        </label>
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

export default Checkout