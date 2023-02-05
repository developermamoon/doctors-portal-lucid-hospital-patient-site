import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSide from '../TopSide/TopSide';


const Main = () => {
    return (
        <div className='p-2'>
                <TopSide></TopSide>
                <Outlet></Outlet>
        </div>
    );
};

export default Main;