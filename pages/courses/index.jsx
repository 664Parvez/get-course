import Link from 'next/link'
import Image from 'next/image'

import {AiFillStar} from "react-icons/ai"
import {FiBook} from "react-icons/fi"
import {PiStudentBold} from "react-icons/pi"
import {BiRightArrowAlt} from "react-icons/bi"

import courseCss from "../../styles/courses.module.css"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

export async function getServerSideProps () {
    const response = await fetch("http://localhost:3000/api/courses")
    const data = await response.json()

    return{
        props: {
            data
        }
    }
}

const Courses = ({data}) => {
    return(
        <>
            <HeadTag title="Courses" />
            <Navbar />

            <Gap>

                <div className={courseCss.course_section}>

                <h1 className='text-center'>Courses</h1>

                    <div className="container">

                        <div className="row">
                            {
                                data.map((items) => {
                                    return (
                                        <>            
                                            <div className="col-lg-4 col-md-6">
                                                <div className="my-lg-4" id={courseCss.course_box}>
                                                    <Image src={items.img} width="0" height="0" layout='responsive' alt=''></Image>
                                                    <ul className={courseCss.rating}>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /></li>
                                                        <li><AiFillStar /> </li>
                                                        <li className={courseCss.rating_text}> ( {items.reviews} Reviews )</li>
                                                    </ul> 
                                                    <h4>{items.courseName}</h4>
                                                    <ul className={courseCss.lesson}>
                                                        <li><FiBook /> {items.lessons} Lessons | </li>
                                                        <li> <PiStudentBold /> {items.students} Students</li>
                                                    </ul>
                                                    <p>React Js long fact that a reader will be distracted by the readable.</p>
                                                    <h2>${items.newPrice} <span className='text-decoration-line-through'>${items.oldPrice}</span></h2>
                                                    <Link href={`/courses/${items.slug}`} className='btn btn-sm'>Course Details <BiRightArrowAlt /></Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </Gap>

            <Footer/>
        </>
    )
}

export default Courses