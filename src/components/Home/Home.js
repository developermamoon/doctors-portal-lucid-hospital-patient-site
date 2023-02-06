import React from 'react';
import './Home.css'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { VscPersonAdd } from "react-icons/vsc";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsCircleHalf } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import { FaUserMd, FaMoneyBillWave, FaLock } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiDraftLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-1 bg-white text-black'>
            <div className="row">
                <div className="col col-md-3">
                    <div className='menu-headers ubuntu'>
                        <ul className='d-flex mb-3'>
                            <li className='ubuntu fw-semibold' id='menu-home' style={{color: 'black'}}>Menu</li>
                            <li className='ms-3' id='menu-manu' style={{color: 'black'}}><HiOutlineSquares2X2></HiOutlineSquares2X2></li>
                            <li className='ms-3' id='menu-chats' style={{ color: 'black' }}><SlBookOpen></SlBookOpen></li>
                            <li className='ms-3' id='menu-settings' style={{ color: 'black' }}><IoSettingsOutline></IoSettingsOutline></li>
                        </ul>
                    </div>

                    <div className='menu-items'>
                        <ul>
                            <li className='p-2'>
                                <Link to='/'><MdOutlineHome className='fs-4 me-3'></MdOutlineHome> Dashboard</Link>
                            </li>
                            <li className='p-2'>
                                <Link to=''><VscPersonAdd className='fs-4 me-3'></VscPersonAdd>Create A New Form</Link>
                            </li>
                            <li className='p-2'>
                                <Link><TfiMenuAlt className='fs-4 me-3'></TfiMenuAlt>Case Form History</Link>
                            </li>
                            <li className='p-2'>
                                <Link><BsCircleHalf className='fs-4 me-3'></BsCircleHalf>Drafts</Link>
                            </li>
                            <li className='p-2'>
                                <Link><CgUserList className='fs-4 me-3'></CgUserList>Chat List</Link>
                            </li>
                            <li className='p-2'>
                                <Link><FaUserMd className='fs-4 me-3'></FaUserMd>Doctor List</Link>
                            </li>
                            <li className='p-2'>
                                <Link><RiDraftLine className='fs-4 me-3'></RiDraftLine>Bill Info</Link>
                            </li>
                            <li className='p-2'>
                                <Link><FaMoneyBillWave className='fs-4 me-3'></FaMoneyBillWave>Notification</Link>
                            </li>
                            <li className='p-2'>
                                <Link><ImProfile className='fs-4 me-3'></ImProfile>Profile</Link>
                            </li>
                            <li className='p-2'>
                                <Link><FaLock className='fs-4 me-3'></FaLock>Change Password</Link>
                            </li>
                            <li className='p-2'>
                                <Link><IoExitOutline className='fs-4 me-3'></IoExitOutline>Logout</Link>
                            </li>
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