import React from 'react';
import './Home.css'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";


const Home = () => {
    return (
        <div className='p-1 bg-white text-black'>
            <div className="row">
                <div className="col col-md-3 text-white">
                    <div>
                        <ul className='d-flex'>
                            <li className='' style={{color: 'black'}}>Home</li>
                            <li className='ms-4' style={{color: 'black'}}><HiOutlineSquares2X2></HiOutlineSquares2X2></li>
                            <li className='ms-4' style={{ color: 'black' }}><SlBookOpen></SlBookOpen></li>
                            <li className='ms-4' style={{ color: 'black' }}><IoSettingsOutline></IoSettingsOutline></li>
                        </ul>
                    </div>
                </div>

                <div className="col col-md-9">

                </div>
            </div>
        </div>
    );
};

export default Home;