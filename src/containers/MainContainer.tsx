import React from 'react'
import { Outlet } from "react-router-dom"

const MainContainer = () => {
    return (
        <>
            <div className="container py-2" style={{minHeight:'calc(100vh - 128px)'}}>
               <Outlet/>
            </div>


        </>
    )
}

export default MainContainer