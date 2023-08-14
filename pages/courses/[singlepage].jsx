import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from "next/router"
import React, {useState} from "react"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import {AiFillStar} from "react-icons/ai"
import {FiBook} from "react-icons/fi"
import {PiStudentBold} from "react-icons/pi"
import {BiRightArrowAlt} from "react-icons/bi"

import singlepageCss from "../../styles/singlepage.module.css"

export async function getServerSideProps () {
    const response = await fetch("http://localhost:3000/api/courses")
    const data = await response.json()

    return {
        props : {
            data
        }
    }
}

const Singlepage = ({data}) => {

    const router = useRouter().query

    const [count, setCount] = useState(0)

    if (count < 0) {
        setCount(0)
    }

    const date = new Date().toLocaleDateString()

    return (
        <>
            <HeadTag title={
                data.map((items) => {
                    return (
                        router.singlepage === items.slug ? items.slug : ""
                    )
                })
            } />
            <Navbar />

            <Gap>
                <div className={singlepageCss.singlepage}>
                    <div className="container">
                            {
                                data.map((items) => {
                                    return (
                                        router.singlepage === items.slug ? 
                                        <>
                                            <div className='row' key={items.id}>
                                                <div className="col-lg-6">
                                                    <Image src={items.img} layout="responsive" width="0" height="0" alt=''></Image>
                                                </div>
                                                <div className="col-lg-6">
                                                    <ul className={singlepageCss.rating}>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /> </li>
                                                        <li className={singlepageCss.rating_text}> ( {items.reviews} Reviews )</li>
                                                    </ul>
                                                    <h2 className="py-4">{items.courseName}</h2>
                                                    <p>By: {items.mentor}</p>
                                                    <h3>${items.newPrice} <span className='text-decoration-line-through'> ${items.oldPrice}</span></h3>
                                                    <p>{items.description}</p>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <ul>
                                                                <li>
                                                                    <button className='btn btn-light' id={singlepageCss.countBtn} onClick={() => {
                                                                        setCount(count + 1)
                                                                    }}>+</button>
                                                                </li>
                                                                <li>
                                                                    <input id={singlepageCss.number_form} className='form-control text-center' value={count} type="text" />
                                                                </li>
                                                                <li>
                                                                    <button className='btn btn-light' id={singlepageCss.countBtn} onClick={() => {
                                                                        setCount(count - 1)
                                                                    }}>-</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <Link href="/cart" className='btn btn-lg'>Add To Cart <BiRightArrowAlt/></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-5">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Reviews</button>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="myTabContent">
                                                    <div className="tab-pane fade show active mt-4" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                        <p>{items.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud.

                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                                                    </div>

                                                    <div className="tab-pane fade mt-4" id="review" role="tabpanel" aria-labelledby="review-tab">
                                                        <h4>Cameron Williamson</h4>
                                                        <small>{date}</small>
                                                        <ul className={singlepageCss.rating}>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /> </li>
                                                        </ul>
                                                        <p>Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.</p>

                                                        <hr />

                                                        <h4>Cameron Williamson</h4>
                                                        <small>{date}</small>
                                                        <ul className={singlepageCss.rating}>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /></li>
                                                            <li><AiFillStar /> </li>
                                                        </ul>
                                                        <p>Duis hendrerit velit scelerisque felis tempus, id porta libero venenatis. Nulla facilisi. Phasellus viverra magna commodo dui lacinia tempus. Donec malesuada nunc non dui posuere, fringilla vestibulum urna mollis. Integer condimentum ac sapien quis maximus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : ""
                                    )
                                })
                            }
                    </div>
                </div>
            </Gap>

            <Footer />
        </>
    )
}

export default Singlepage
