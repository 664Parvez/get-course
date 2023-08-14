import Link from 'next/link'
import Image from 'next/image'

import WhiteLogo from "../../public/white-logo.png"

import Gap from "../../components/gap"
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import HeadTag from '../../components/head'

import forgetpassCss from "../../styles/forgetpass.module.css"

const Forgetpassword = () => {
    return (
        <>
            <HeadTag title = "Forget Password"/>
            <Navbar />

            <Gap>
                <div className={forgetpassCss.forgetpassword}>
                    <div className="text-center mb-5">
                        <Image src={WhiteLogo} width="100%" height="40" alt=''></Image>
                    </div>
                    <div className="container">
                        <h2 className='text-center mt-5'>Recover Your Password</h2>
                        <div className="row mt-4">
                            <div className="col-lg-2 col-md-2"></div>
                            <div className="col-lg-8 col-md-8">
                                <div className="text-center">
                                    <input type='email' placeholder='Enter Your Email' className='form-control pt-3 pb-3 mt-3' id={forgetpassCss.form_control} />

                                    <div className='row mt-4 align-items-center'>
                                        <div className='col-6 text-start'>
                                            <button className='btn btn-lg' id={forgetpassCss.login_btn}>Submit</button>
                                        </div>
                                        <div className='col-6 text-end'>
                                            <p className='mb-0' id={forgetpassCss.backtologin}><Link href="/login">Do you want to Login?</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2"></div>
                        </div>
                    </div>
                </div>
            </Gap>

            <Footer />
        </>
    )
}

export default Forgetpassword