import React from 'react';
import banner from '../../images/banner.jpg'
import './Banner.css'
import profilePic from '../../images/user.png'
import { FaFacebookSquare } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className='banner-image'>
                <div className='black-shadow'></div>
                <img className='banner-img' src={banner} alt="" />

                {/* users image  */}
                <img className='propic p-3' src={profilePic} alt="" />

                {/* name and links  */}
                <div className="banner-text-part d-flex justify-content-between align-items-end">
                    <h2 className='ubuntu user-name text-white ps-2'>Md Homayan</h2>
                    <div className='banner-social-icons'>
                        <a href="#"><FaFacebookSquare className='mx-2'></FaFacebookSquare></a>
                        <a href="#"><FaFacebookSquare className='mx-2'></FaFacebookSquare></a>
                        <a href="#"><FaFacebookSquare className='mx-2'></FaFacebookSquare></a>
                        <a href="#"><FaFacebookSquare className='mx-2'></FaFacebookSquare></a>
                    </div>
                </div>


            </div>

            <div className='bg-white py-2'>
                <h3 className='ubuntu user-id text-secondary ps-2 fw-semi-bold'>Id: 97983274928374</h3>
            </div>
            
        </div>
    );
};

export default Banner;