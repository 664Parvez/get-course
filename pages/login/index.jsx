import Link from 'next/link'
import Image from 'next/image'

import loginCss from "../../styles/login.module.css"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import loginImage from "../../public/login-form.gif"


const Login = () => {
    return (
        <>
            <HeadTag title = "Login"/>
            <Navbar />

            <Gap>
                <div className={loginCss.loginPage}>
                    <div className='container'>
                        <div className='row flex align-items-center pt-4 pb-4'>
                        <div className='col-lg-6 col-sm-6 col-xs-6'>
                            
                        </div>
                        <div className='col-lg-6 col-sm-6 col-xs-6 text-end'>
                            <h6>New User - <span><Link href="/signup">Sign Up</Link></span></h6>
                        </div>
                        </div>
                    </div>

                    <div className='container' id={loginCss.login_form}>
                        <div className='row flex align-items-center'>
                        <div className='col-lg-5 col-md-4'>
                            <Image src={loginImage} height="0" layout='responsive' width="0" alt=''></Image>
                        </div>
                        <div className='col-lg-7 col-md-8'>
                            <h2>Welcome Back!</h2>
                            <p>Login Continue</p>

                            <input type='text' placeholder='Enter Your Email' className='form-control pt-3 pb-3' id={loginCss.form_control} />
                            
                            <input type='password' placeholder='Enter Password' className='form-control pt-3 pb-3 mt-3' id={loginCss.form_control} />

                            <div className='row mt-4 flex align-items-center'>
                            <div className='col-6'>
                                <button className='btn btn-lg' id={loginCss.login_btn}>Login</button>
                            </div>
                            <div className='col-6 text-end'>
                                <p className='mb-0' id={loginCss.forgetPassword}><Link href="/forget-password">Forget Password?</Link></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Gap>

            <Footer />
        </>
    )
}

export default Login