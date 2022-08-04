import React, { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
        const currentDate= new Date()
        console.log(currentDate);

    const [isClick , setIsClick]=useState(false);
    function handleClick(){
       setIsClick(true)
    }

    return (
      
        <div className="navbar">
            <div className="headline">
            <p onClick={handleClick}>Compose</p>
            <h1>SOUTH BOGOR MORNING POST</h1>
            </div>
            <div className="rubrik">
                <a>World</a>
                <a>Bogor</a>
                <a>Politics</a>
                <a>Indonesia</a>
                <a>Bussiness</a>
                <a>World</a>
                <a>Bogor</a>
                <a>Politics</a>
                <a>Indonesia</a>
                <a>Bussiness</a>
                <a>World</a>
                <a>Bogor</a>
                <a>Politics</a>
                <a>Indonesia</a>
                <a>Bussiness</a>
            </div>
            <div className="horizontal">
                <hr></hr>
                <hr className="bawah"></hr>
            </div>
            <div className={isClick? "compose":"none"}>
                <h1>HALO DUNIA</h1>
            </div>
        </div>
    )
}

export default Navbar;