import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import homeCss from '../styles/Home.module.css'


// Swiper Sider
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper Effect required modules
import { EffectCards, Pagination, Navigation } from "swiper/modules"


import Gap from "../components/gap"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import HeadTag from '../components/head'
import Subscribe from '../components/subscribe';

import {BiRightArrowAlt} from "react-icons/bi"
import {AiOutlineTrophy} from "react-icons/ai"
import {AiOutlineHeart, AiFillStar} from "react-icons/ai"
import {FiBook} from "react-icons/fi"
import {PiStudentBold} from "react-icons/pi"
import {FiLinkedin, FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"

import sec1 from "../public/home-second/design.png"
import sec2 from "../public/home-second/infographic.png"
import sec3 from "../public/home-second/paint-palette.png"
import sec4 from "../public/home-second/pantone.png"
import sec5 from "../public/home-second/personal.png"
import sec6 from "../public/home-second/server.png"
import sec7 from "../public/home-second/smartphone.png"
import sec8 from "../public/home-second/web-design.png"
import six1 from "../public/home-six/counter-01.png"
import six2 from "../public/home-six/counter-02.png"
import six3 from "../public/home-six/counter-03.png"
import six4 from "../public/home-six/counter-04.png"
import four from "../public/about-01.png"
import cour1 from "../public/home-course/course-01.jpg"
import cour2 from "../public/home-course/course-02.jpg"
import cour3 from "../public/home-course/course-03.jpg"
import teac1 from "../public/home-teacher/team-01.jpg"
import teac2 from "../public/home-teacher/team-02.jpg"
import teac3 from "../public/home-teacher/team-03.jpg"
import teac4 from "../public/home-teacher/team-04.jpg"


const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps () {
  const response = await fetch("http://localhost:3000/api/blog")
  const data = await response.json()

  return {
      props : {
          data
      }
  }
}

export default function Home({data}) {
  console.log(data.slice(0, 3));
  return (
    <>
    
      <HeadTag title="Courses Portal" />
      <Navbar />

      <Gap>
        <div className={homeCss.hero}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h6><AiOutlineTrophy className={homeCss.trophy} /> The Leader in Online Learning</h6>
                <h1>Build The Skills To Drive Your Career.</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo nostrum quod minima repellendus quisquam eos omnis doloremque nesciunt atque.</p>
                <Link href="" className='btn btn-lg'>View All Courses <BiRightArrowAlt /></Link>
              </div>
              <div className="col-lg-5" id={homeCss.slider_part}>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  slidesPerView={"auto"}
                  modules={[ EffectCards, Pagination, Navigation ]}
                  cardsEffect={
                    {
                      rotate: true,
                      perSlideOffset: 5,
                      perSlideRotate: 7
                    }
                  }
                  pagination={{el: ".swiper-pagination"}}
                  // className={homeCss.mySwiper}
                >
                  <SwiperSlide>
                    <div className={homeCss.sliderCard}>
                      <Image src={cour1} layout='responsive' alt=''></Image>
                      <ul className={homeCss.rating}>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /> </li>
                        <li className={homeCss.rating_text}> ( 15 Reviews )</li>
                      </ul> 
                      <h4>React Front To Back</h4>
                      <ul className={homeCss.lesson}>
                        <li><FiBook /> 20 Lessons | </li>
                        <li> <PiStudentBold /> 40 Students</li>
                      </ul>
                      <p>React Js long fact that a reader will be distracted by the readable.</p>
                      <div className="row align-items-center">
                        <div className="col-6">
                          <h2>$60 <span className='text-decoration-line-through'>$150</span></h2>
                        </div>
                        <div className="col-6 text-end">
                          <Link href="" className=''>Course Details <BiRightArrowAlt /></Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={homeCss.sliderCard}>
                      <Image src={cour2} layout='responsive' alt=''></Image>
                      <ul className={homeCss.rating}>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /> </li>
                        <li className={homeCss.rating_text}> ( 25 Reviews )</li>
                      </ul> 
                      <h4>PHP Beginner + Advanced</h4>
                      <ul className={homeCss.lesson}>
                        <li><FiBook /> 15 Lessons | </li>
                        <li> <PiStudentBold /> 30 Students</li>
                      </ul>
                      <p>It is a long established fact that a reader will be distracted by the readable.</p>
                      <div className="row align-items-center">
                        <div className="col-6">
                          <h2>$60 <span className='text-decoration-line-through'>$100</span></h2>
                        </div>
                        <div className="col-6 text-end">
                          <Link href="" className=''>Course Details <BiRightArrowAlt /></Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className={homeCss.sliderCard}>
                      <Image src={cour3} layout='responsive' alt=''></Image>
                      <ul className={homeCss.rating}>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /> </li>
                        <li className={homeCss.rating_text}> ( 5 Reviews )</li>
                      </ul> 
                      <h4>Angular Zero to Mastery</h4>
                      <ul className={homeCss.lesson}>
                        <li><FiBook /> 8 Lessons | </li>
                        <li> <PiStudentBold /> 30 Students</li>
                      </ul>
                      <p>Angular Js long fact that a reader will be distracted by the readable.</p>
                      <div className="row align-items-center">
                        <div className="col-6">
                          <h2>$70 <span className='text-decoration-line-through'>$170</span></h2>
                        </div>
                        <div className="col-6 text-end">
                          <Link href="" className=''>Course Details <BiRightArrowAlt /></Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className={homeCss.second_section}>
          <div className="container">
            <h6 className='text-center'>CATEGORIES</h6>
            <h2 className='text-center'>Explore Top Courses Caterories <br /> That Change Yourself</h2>
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>
                  <Link href="">
                      <div className="text-center">
                        <Image src={sec8} width="80" height="80" alt=""></Image>
                      </div>
                      <h4><b>Web Design</b></h4>
                      <p>14 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                  <Link href="">
                    <div className="text-center">
                        <Image src={sec1} width="80" height="80" alt=""></Image>
                    </div>
                      <h4><b>Graphics Design</b></h4>
                      <p>24 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                  <Link href="">
                    <div className="text-center">
                        <Image src={sec2} width="80" height="80" alt=""></Image>
                    </div>
                      <h4><b>Digital Marketing</b></h4>
                      <p>9 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                    <Link href="">
                      <div className="text-center">
                        <Image src={sec3} width="80" height="80" alt=""></Image>
                      </div>
                      <h4><b>Java Development</b></h4>
                      <p>13 Courses <BiRightArrowAlt /></p>
                    </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                  <Link href="">
                    <div className="text-center">
                        <Image src={sec4} width="80" height="80" alt=""></Image>
                    </div>
                    <h4><b>React JS</b></h4>
                    <p>10 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                  <Link href="">
                    <div className="text-center">
                        <Image src={sec5} width="80" height="80" alt=""></Image>
                      </div>
                    <h4><b>JavaScript</b></h4>
                    <p>26 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                  <Link href="">
                    <div className="text-center">
                        <Image src={sec6} width="80" height="80" alt=""></Image>
                      </div>
                      <h4><b>SEO</b></h4>
                      <p>6 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mt-lg-5">
                <div className={homeCss.service_box}>  
                  <Link href="">
                      <div className="text-center">
                        <Image src={sec7} width="80" height="80" alt=""></Image>
                      </div>
                      <h4><b>React Native</b></h4>
                      <p>7 Courses <BiRightArrowAlt /></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={homeCss.third_section}>
          <div className="container">
            <h6>TOP POPULAR COURSE</h6>
            <h3>Histudy Course student <br /> can join with us.</h3>

            <div className="row">
              <div className="col-lg-4 col-md-6">

                <div className="my-lg-5" id={homeCss.course_box}>
                  <Image src={cour1} width="0" height="0" layout='responsive' alt=''></Image>
                  <ul className={homeCss.rating}>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /> </li>
                    <li className={homeCss.rating_text}> ( 15 Reviews )</li>
                  </ul> 
                  <h4>React Front To Back</h4>
                  <ul className={homeCss.lesson}>
                    <li><FiBook /> 20 Lessons | </li>
                    <li> <PiStudentBold /> 40 Students</li>
                  </ul>
                  <p>React Js long fact that a reader will be distracted by the readable.</p>
                  <h2>$60 <span className='text-decoration-line-through'>$150</span></h2>
                  <Link href="" className='btn btn-sm'>Course Details <BiRightArrowAlt /></Link>
                </div>

              </div>
              <div className="col-lg-4 col-md-6">

                <div className="my-lg-5" id={homeCss.course_box}>
                  <Image src={cour2} width="0" height="0" layout='responsive' alt=''></Image>
                  <ul className={homeCss.rating}>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /> </li>
                    <li className={homeCss.rating_text}> ( 25 Reviews )</li>
                  </ul> 
                  <h4>PHP Beginner + Advanced</h4>
                  <ul className={homeCss.lesson}>
                    <li><FiBook /> 15 Lessons | </li>
                    <li> <PiStudentBold /> 30 Students</li>
                  </ul>
                  <p>It is a long established fact that a reader will be distracted by the readable.</p>
                  <h2>$60 <span className='text-decoration-line-through'>$100</span></h2>
                  <Link href="" className='btn btn-sm'>Course Details <BiRightArrowAlt /></Link>
                </div>

              </div>
              <div className="col-lg-4 col-md-6">

                <div className="my-lg-5" id={homeCss.course_box}>
                  <Image src={cour3} width="0" height="0" layout='responsive' alt=''></Image>
                  <ul className={homeCss.rating}>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /> </li>
                    <li className={homeCss.rating_text}> ( 5 Reviews )</li>
                  </ul> 
                  <h4>Angular Zero to Mastery</h4>
                  <ul className={homeCss.lesson}>
                    <li><FiBook /> 8 Lessons | </li>
                    <li> <PiStudentBold /> 30 Students</li>
                  </ul>
                  <p>Angular Js long fact that a reader will be distracted by the readable.</p>
                  <h2>$70 <span className='text-decoration-line-through'>$170</span></h2>
                  <Link href="" className='btn btn-sm'>Course Details <BiRightArrowAlt /></Link>
                </div>

              </div>
            </div>

            <div className={homeCss.more_course_btn}>
              <Link href="/courses" className='btn btn-lg'>See More Courses <BiRightArrowAlt /></Link>
            </div>

          </div>
        </div>

        <div className={homeCss.forth_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <Image src={four} width="0" height="0" layout='responsive' alt=""></Image>
              </div>
              <div className="col-lg-7 col-md-6">
                <h6>KNOW ABOUT US</h6>
                <h3>Know About Histudy <br /> Learning Platform</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div className="row align-items-center mt-5">

                    <div className="col-2">
                      <div className={homeCss.icon}>
                        <AiOutlineHeart />
                      </div>
                    </div>
                    <div className="col-10">
                      <h4>Flexible Classes</h4>
                      <p>It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                    </div>

                    <div className="col-2">
                      <div className={homeCss.icon}>
                        <FiBook />
                      </div>
                    </div>
                    <div className="col-10">
                      <h4>Learn From Anywhere</h4>
                      <p>Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                    </div>

                </div>
                <Link href="about-us" className='btn btn-lg'>Read More About Us <BiRightArrowAlt /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className={homeCss.fifth_section}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6" id={homeCss.fifth_box}>
                <div className='p-xl-5'>
                  <div className="row align-items-center">
                    <div className="col-xl-4">
                      <h6>New Collection</h6>
                      <h3><b>Online Courses from Histudy</b></h3>
                      <p>Top instructors from around the world </p>
                    </div>
                    <div className="col-xl-8">
                      <iframe width="0" height="0" src="https://www.youtube.com/embed/nO39QoSW5zM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6" id={homeCss.fifth_right_box}>
                <div className='p-lg-5'>
                  <h6>Top Teacher</h6>
                  <h3><b>Free Online Courses from Histudy School To Education</b></h3>
                  <p>Top instructors from around the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quis. Fugit</p>
                  <Link href="" className='btn btn-lg'>Join Now <BiRightArrowAlt /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={homeCss.sixth_section}>
          <div className="container">
            <h6>WHY CHOOSE US</h6>
            <h3>Creating A Community Of <br /> Life Long Learners.</h3>
            <div className="row mt-5">
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.sixth_section_box}>
                  <Image src={six1} width="50" height="50" alt=''></Image>
                  <h4>500 +</h4>
                  <p>Learners & counting</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.sixth_section_box}>
                  <Image src={six2} width="50" height="50" alt=''></Image>
                  <h4>800 +</h4>
                  <p>Courses & Video</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.sixth_section_box}>
                  <Image src={six3} width="50" height="50" alt=''></Image>
                  <h4>1000 +</h4>
                  <p>Certified Students</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.sixth_section_box}>
                  <Image src={six4} width="50" height="50" alt=''></Image>
                  <h4>100 +</h4>
                  <p>Registered Enrolls</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={homeCss.seven_section}>
          <div className="container">
            <h6 className='text-center'>OUR TEACHER</h6>
            <h3 className='text-center'>Whose Inspirations You</h3>

            <div className="row mt-5">
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.teacherBox}>
                  <Image src={teac1} layout='responsive' alt=''></Image>
                  <h3>Mames Mary</h3>
                  <p>React JS Teacher</p>
                  <ul id={homeCss.socialIcon}>
                    <li><Link href=""><FiFacebook/></Link></li>
                    <li><Link href=""><FiTwitter/></Link></li>
                    <li><Link href=""><FiInstagram/></Link></li>
                    <li><Link href=""><FiLinkedin/></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.teacherBox}>
                  <Image src={teac2} layout='responsive' alt=''></Image>
                  <h3>Robert Song</h3>
                  <p>PHP Teacher</p>
                  <ul id={homeCss.socialIcon}>
                    <li><Link href=""><FiFacebook/></Link></li>
                    <li><Link href=""><FiTwitter/></Link></li>
                    <li><Link href=""><FiInstagram/></Link></li>
                    <li><Link href=""><FiLinkedin/></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.teacherBox}>
                  <Image src={teac3} layout='responsive' alt=''></Image>
                  <h3>William Susan</h3>
                  <p>Front End Teacher</p>
                  <ul id={homeCss.socialIcon}>
                    <li><Link href=""><FiFacebook/></Link></li>
                    <li><Link href=""><FiTwitter/></Link></li>
                    <li><Link href=""><FiInstagram/></Link></li>
                    <li><Link href=""><FiLinkedin/></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={homeCss.teacherBox}>
                  <Image src={teac4} layout='responsive' alt=''></Image>
                  <h3>Soseph Sara</h3>
                  <p>Django Teacher</p>
                  <ul id={homeCss.socialIcon}>
                    <li><Link href=""><FiFacebook/></Link></li>
                    <li><Link href=""><FiTwitter/></Link></li>
                    <li><Link href=""><FiInstagram/></Link></li>
                    <li><Link href=""><FiLinkedin/></Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Subscribe />

        <div className={homeCss.eight_section}>
          <div className="container">
            <h6>BLOG POST</h6>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h3>Post Popular Post.</h3>
              </div>
              <div className="col-lg-6 col-md-6 text-lg-end text-md-center">
                <Link href="/blog" className='btn btn-lg'>See All Articles <BiRightArrowAlt /></Link>
              </div> 
            </div>
            <div className="row">
              {
                data.slice(0, 3).map((items) => {

                  const twoLine = items.descrip.slice(0, 70)

                  return (
                    <>      
                      <div className="col-lg-4 col-md-6">
                        <Link href={`/blog/${items.slug}`}>
                          <div className={homeCss.blog_box}>
                            <Image src={items.img} width="0" height="0" layout='responsive' alt=''></Image>
                            <h4 className='mt-4'>{items.title}</h4>
                            <p>{twoLine} . . . </p>
                          </div>
                        </Link>
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
