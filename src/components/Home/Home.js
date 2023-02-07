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
                                    <input type="text" className='w-75' style={{outline: "none"}}  name="" id="" placeholder='Search...' />
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="settings" title=<IoSettingsOutline></IoSettingsOutline> >
                            <div className='ps-3'>
                                <p className='ubuntu fw-semibold' style={{ color: "#5A5A5A" }}>Choose Skin</p>

                                <form action="" className='ubuntu'>
                                    
                                    <div className='my-2' style={{ color: '#5A5A5A' }}>
                                        <input type="radio" name="choose-skin" id="purple" checked />
                                        <label htmlFor="purple" className='ms-2'>Purple</label>
                                    </div>
                                    
                                    <div className='my-2' style={{ color: '#5A5A5A' }}>
                                        <input type="radio" name="choose-skin" id="blue" />
                                        <label htmlFor="blue" className='ms-2'>Blue</label>
                                    </div>
                                    
                                    <div className='my-2' style={{ color: '#5A5A5A' }}>
                                        <input type="radio" name="choose-skin" id="cyan" />
                                        <label htmlFor="cyan" className='ms-2'>Cyan</label>
                                    </div>
                                    
                                    <div className='my-2' style={{ color: '#5A5A5A' }}>
                                        <input type="radio" name="choose-skin" id="green" />
                                        <label htmlFor="green" className='ms-2'>Green</label>
                                    </div>
                                    
                                    <div className='my-2' style={{ color: '#5A5A5A' }}>
                                        <input type="radio" name="choose-skin" id="orange" />
                                        <label htmlFor="orange" className='ms-2'>Orange</label>
                                    </div>
                                    
                                    <div className='my-2' style={{ color: '#5A5A5A' }}>
                                        <input type="radio" name="choose-skin" id="blush" />
                                        <label htmlFor="blush" className='ms-2'>Blush</label>
                                    </div>

                                </form>

                                <p className='ubuntu fw-semibold' style={{ color: "#5A5A5A" }}>General Settings</p>

                                <form action="" className='ubuntu'>
                                    <div style={{ color: '#5A5A5A' }}>
                                        <input type="checkbox" name="" id="report-panel-usage" />
                                        <label htmlFor="report-panel-usage" className='ms-2'>Report Panel Usage</label>
                                    </div>

                                    
                                    <div className='my-2' style={{color: '#5A5A5A'}}>
                                        <input type="checkbox" name="" id="email-redirect" />
                                        <label htmlFor="email-redirect" className='ms-2'>Email Redirect</label>
                                    </div>

                                    
                                    <div className='my-2' style={{color: '#5A5A5A'}}>
                                        <input type="checkbox" name="" id="notifications" checked/>
                                        <label htmlFor="notifications" className='ms-2'>Notifications</label>
                                    </div>

                                    
                                    <div className='my-2' style={{color: '#5A5A5A'}}>
                                        <input type="checkbox" name="" id="auto-updates" checked />
                                        <label htmlFor="auto-updates" className='ms-2'>Auto Updates</label>
                                    </div>

                                    
                                    <div className='my-2' style={{color: '#5A5A5A'}}>
                                        <input type="checkbox" name="" id="offline" />
                                        <label htmlFor="offline" className='ms-2'>Offline</label>
                                    </div>

                                    
                                    <div className='my-2' style={{color: '#5A5A5A'}}>
                                        <input type="checkbox" name="" id="location-permission" checked />
                                        <label htmlFor="location-permission" className='ms-2'>Location Permission</label>
                                    </div>

                                    
                                </form>


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