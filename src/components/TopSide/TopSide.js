import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Banner from './Banner';

const TopSide = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center bg-white py-2'>
                <div className="d-flex align-items-center">
                    <div className='toggleSidebar d-lg-none'>
                        {[false].map((expand) => (
                            <Navbar key={expand} expand={expand} className="">
                                <Container fluid>
                                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                                    <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand-${expand}`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                        placement="start"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                Offcanvas
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link href="#action1">Home</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <Nav.Link href="#action2">Logout</Nav.Link>
                                            </Nav>

                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        ))}
                    </div>

                    <div className="envelope m-2 ms-md-4" style={{ color: "#5A5A5A" }}>
                        <HiOutlineEnvelope className='fs-1'></HiOutlineEnvelope>
                    </div>

                    <div className="user1 d-flex" style={{ color: "#5A5A5A" }}>
                        <FaUserAlt className='fs-2 ms-3 ms-md-5 my-2'></FaUserAlt>
                        <div className='ms-2'>
                            <p className='mb-0' style={{ fontSize: "14px" }}>Total Patient</p>
                            <h5 className='m-0 p-0'>215</h5>
                        </div>
                    </div>


                    <div className="user2 d-flex" style={{ color: "#5A5A5A" }}>
                        <FaUserAlt className='fs-2 ms-3 ms-md-5 my-2'></FaUserAlt>
                        <div className='ms-2'>
                            <p className='mb-0' style={{ fontSize: "14px" }}>Total Patient</p>
                            <h5 className='m-0 p-0'>215</h5>
                        </div>
                    </div>
                </div>

                <div className='me-5'>
                    <Button variant="outline-dark" className='fw-semibold'>Doctor Visit: 400</Button>
                </div>

            </div>

            <Banner></Banner>
        </div>
    );
};

export default TopSide;