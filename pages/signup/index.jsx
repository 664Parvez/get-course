import Link from 'next/link'
import Image from 'next/image'

import WhiteLogo from "../../public/white-logo.png"
import loginImage from "../../public/login-form.gif"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import signupCss from "../../styles/signup.module.css"


const Signup = () => {
    return (
        <>
            <HeadTag title = "Signup"/>
            <Navbar />

            <Gap>
                <div className={signupCss.signupPage}>
                    <div className="text-center mb-5">
                        <Image src={WhiteLogo} width="100%" height="40" alt=''></Image>
                    </div>
                    <div className='container' id={signupCss.signup_form}>
                            <div className='row flex align-items-center'>
                            <div className='col-lg-5 col-md-4'>
                                <Image src={loginImage} height="0" layout='responsive' width="0" alt=''></Image>
                            </div>
                            <div className='col-lg-7 col-md-8'>
                                <h2>Welcome to Our Course Portal!</h2>
                                <p>Register for create your profile</p>

                                <input type='text' placeholder='User Name' className='form-control pt-3 pb-3 mt-3' id={signupCss.form_control} />

                                <input type='email' placeholder='Email' className='form-control pt-3 pb-3 mt-3' id={signupCss.form_control} />
                                
                                <input type='password' placeholder='Password' className='form-control pt-3 pb-3 mt-3' id={signupCss.form_control} />

                                <input type='password' placeholder='Confirm Password' className='form-control pt-3 pb-3 mt-3' id={signupCss.form_control} />

                                <div className='row mt-4 flex align-items-center'>
                                    <div className='col-6'>
                                        <button className='btn btn-lg' id={signupCss.login_btn}>Sign Up</button>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <p className='mb-0' id={signupCss.backtosignup}><Link href="/login">Do you have an account already?</Link></p>
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

export default Signup