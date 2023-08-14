import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from "react"

import {LiaTimesSolid} from "react-icons/lia"

import cartCss from "../../styles/cart.module.css"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import cour1 from "../../public/home-course/course-01.jpg"
import cour2 from "../../public/home-course/course-02.jpg"
import cour3 from "../../public/home-course/course-03.jpg"

const Cart = () => {

    const [count, setCount] = useState(0)

    if (count < 0) {
        setCount(0)
    }

    return(
        <>
            <HeadTag title="Cart" />
            <Navbar />

            <Gap>
                <div className={cartCss.cartPage}>
                    <div className="container">
                        <h1 className='text-center mb-5'>Cart</h1>
                        <div className="table-responsive">
                            <table className="table table-striped align-middle" id={cartCss.cartTable}>
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <Image src={cour1} width="150" height="100" alt=''></Image>
                                        </th>
                                        <td>React Course</td>
                                        <td>$60</td>
                                        <td>
                                            <ul>
                                                <li>
                                                    <button className='btn btn-light' onClick={() => {
                                                        setCount(count + 1)
                                                    }}>+</button>
                                                </li>
                                                <li>
                                                    <input id={cartCss.number_form} className='form-control text-center' value={count} type="text" />
                                                </li>
                                                <li>
                                                    <button className='btn btn-light' onClick={() => {
                                                        setCount(count - 1)
                                                    }}>-</button>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>$120</td>
                                        <td><LiaTimesSolid /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Image src={cour2} width="150" height="100" alt=''></Image>
                                        </th>
                                        <td>PHP + Laravel Course</td>
                                        <td>$70</td>
                                        <td>
                                            <ul>
                                                <li>
                                                    <button className='btn btn-light' onClick={() => {
                                                        setCount(count + 1)
                                                    }}>+</button>
                                                </li>
                                                <li>
                                                    <input id={cartCss.number_form} className='form-control text-center' value={count} type="text" />
                                                </li>
                                                <li>
                                                    <button className='btn btn-light' onClick={() => {
                                                        setCount(count - 1)
                                                    }}>-</button>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>$70</td>
                                        <td><LiaTimesSolid /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Image src={cour3} width="150" height="100" alt=''></Image>
                                        </th>
                                        <td>Node JS and MongoDB Course</td>
                                        <td>$70</td>
                                        <td>
                                            <ul>
                                                <li>
                                                    <button className='btn btn-light' onClick={() => {
                                                        setCount(count + 1)
                                                    }}>+</button>
                                                </li>
                                                <li>
                                                    <input id={cartCss.number_form} className='form-control text-center' value={count} type="text" />
                                                </li>
                                                <li>
                                                    <button className='btn btn-light' onClick={() => {
                                                        setCount(count - 1)
                                                    }}>-</button>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>$70</td>
                                        <td><LiaTimesSolid /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-6 col-md-6">
                                <div className={cartCss.coupone_code}>
                                    <h2>Discount Coupon Code</h2>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <input type="number" placeholder='Coupon Code' className='form-control form-control-lg' />
                                        </div>
                                        <div className="col-6">
                                            <button className='btn btn-lg'>Apply Code</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className={cartCss.cart_summary}>
                                    <h2>Cart Summary</h2>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6">
                                            <p>Subtotal</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <p>$300</p>
                                        </div>
                                        <hr />
                                        <div className="col-6">
                                            <h5>Total</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h5>$300</h5>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/checkout" className='btn btn-lg'>Checkout</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </Gap>

            <Footer/>
        </>
    )
}

export default Cart