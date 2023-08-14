import Link from "next/link"
import Image from "next/image"

import {FaMicroblog} from "react-icons/fa"
import {AiOutlineClockCircle} from "react-icons/ai"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import blogCss from "../../styles/blog.module.css"

export async function getServerSideProps () {
    const response = await fetch("https://get-course.vercel.app/api/blog")
    const data = await response.json()

    return {
        props : {
            data
        }
    }
}

const Blog = ({data}) => {

    return (
        <>
            <HeadTag title="blogs"/>
            <Navbar />

            <Gap>
                <div className="container" id={blogCss.blogHeading}>
                    <h1>All Blog <span><FaMicroblog /> 50 Articles</span></h1>
                    <p>Blog that help beginner designers become true unicorns.</p>
                </div>

                <div id={blogCss.blogSection}>
                    <div className="container">
                        <div className="row">

                            {
                                data.map((items, index=0) => {
                                    return(
                                        <>            
                                            <div className="col-lg-4 mt-4">
                                                <div className="card" key={index}>
                                                    <Image src={items.img} className="cart-img" width="0" layout="responsive" height="0" alt=""></Image>
                                                    <div className="card-body">
                                                        <div className="card-head">
                                                            <h5>{items.title}</h5>
                                                        </div>
                                                        <p>{items.descrip.slice(0, 50)} . . . </p>

                                                        <Link href={`/blog/${items.slug}`}>More Details</Link>
                                                    </div>
                                                    <div className="card-footer">
                                                        <ul>
                                                            <li><AiOutlineClockCircle /> {items.time} </li>
                                                            <li>| {items.date}</li>
                                                        </ul>
                                                    </div>
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

            <Footer />
        </>
    )
}

export default Blog
