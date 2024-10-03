import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Circle } from 'react-konva';

export const Home = () => {
    return (
        <div className="app" id="root">
            <div className="circle"></div>
            <div className="head">
                <h1>Taste Compass !</h1>
            </div>
            <div className="quest">
                <p>Don't know what to eat?</p>
            </div>

            <div className='start-button'>
                <Link to="/login">
                    <button type="submit">Start</button>
                </Link>
            </div>
        </div>
    )
}