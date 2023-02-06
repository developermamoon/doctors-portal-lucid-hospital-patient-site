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
import { FiSearch } from "react-icons/fi";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';

const Home = () => {
    return (
        <div className='p-1 bg-white text-black'>
            <div className="row g-0">
                <div className="col col-md-3">

                    <Tabs
                        defaultActiveKey="menu"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="menu" className='ubuntu fw-semibold' title="Menu">

                            <div className='menu-items'>
                                <Link to='/'><MdOutlineHome className='fs-4 me-3'></MdOutlineHome>Dashboard</Link>
                                <Link to='/'><VscPersonAdd className='fs-4 me-3'></VscPersonAdd>Create A New Form</Link>
                                <Link to='/'><TfiMenuAlt className='fs-4 me-3'></TfiMenuAlt>Case Form History</Link>
                                <Link to='/'><BsCircleHalf className='fs-4 me-3'></BsCircleHalf>Drafts</Link>
                                <Link to='/'><CgUserList className='fs-4 me-3'></CgUserList>Chat List</Link>
                                <Link to='/'><FaUserMd className='fs-4 me-3'></FaUserMd>Doctor List</Link>
                                <Link to='/'><RiDraftLine className='fs-4 me-3'></RiDraftLine>Bill Info</Link>
                                <Link to='/'><FaMoneyBillWave className='fs-4 me-3'></FaMoneyBillWave>Notification</Link>
                                <Link to='/'><ImProfile className='fs-4 me-3'></ImProfile>Profile</Link>
                                <Link to='/'><FaLock className='fs-4 me-3'></FaLock>Change Password</Link>
                                <Link to='/'><IoExitOutline className='fs-4 me-3'></IoExitOutline>Logout</Link>
                            </div>
                        </Tab>


                        <Tab eventKey="elements" title=<HiOutlineSquares2X2></HiOutlineSquares2X2>>

                        </Tab>

                        <Tab eventKey="chats" title=<SlBookOpen></SlBookOpen> >
                            <div>
                                <div className='search-box d-flex justify-content-center'>
                                    <button className='search-button btn btn-dark'><FiSearch ></FiSearch></button>
                                    <input type="text" className='w-75' name="" id="" placeholder='Search...' />
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="settings" title=<IoSettingsOutline></IoSettingsOutline> >
                            <div className='ps-3'>
                                <p className='ubuntu fw-semibold'>Choose Skin</p>
                            </div>
                        </Tab>
                    </Tabs>
                    
                </div>

                <div className="col col-md-9">
                    
                </div>
            </div>
        </div>
    );
};

export default Home;