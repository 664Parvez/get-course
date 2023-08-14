import Image from "next/image"
import { useRouter } from "next/router"

import {AiOutlineClockCircle} from "react-icons/ai"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import blogCss from "../../styles/blog.module.css"

export async function getServerSideProps () {
    const response = await fetch("http://localhost:3000/api/blog")
    const data = await response.json()

    return {
        props : {
            data
        }
    }
}

const Post = ({data}) => {

    console.log(data);

    const router = useRouter().query
    console.log(router);

    return (
        <>
            <HeadTag title={data.map((items) => {
                return (
                    items.slug === router.post ? items.title : "" 
                )
            })} />
            <Navbar />
                <Gap>
                    <div className="container" id={blogCss.singlePost}>
                        {
                            data.map((items) => {
                                return(
                                    router.post === items.slug ?
                                    <>
                                        <h1>{items.title}</h1>
                                        <p><AiOutlineClockCircle /><span> {items.time}</span> | <span>{items.date}</span></p>
                                        <Image src={items.img} width="0" height="0" layout="responsive" alt=""></Image>
                                        <p>{items.descrip}</p>
                                    </> :

                                    ""
                                )
                            })
                        }
                    </div>
                </Gap>
            <Footer />
        </>
    )
}

export default Post