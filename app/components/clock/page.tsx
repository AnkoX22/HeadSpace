'use client'

import React, { useState, useEffect } from 'react';
import './clock.modules.css';

const Clock = () => {
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {

        let interval: NodeJS.Timeout | undefined;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        setIsActive(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const formatTime = (timeInSeconds:number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        if (!isActive) {
            setIsActive(true);
            setIsPaused(false);
        } else {
            setIsPaused(false);
        }
    };

    const handleTimer=() =>{
        setTime(25*60);
        setIsActive(true);
    }

    const handleCounter=() =>{
       setTime(0);
    }

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setTime(25 * 60);
        setIsActive(false);
        setIsPaused(false);
    };

    return (
        <div className="text-center">
            <div className="btn-group w-100 mb-4" role={"group"}>
                <button type={"button"} className="btn btn-outline-primary active" onClick={handleTimer} >Timer</button>
                <button type={"button"} className="btn btn-outline-primary" onClick={handleCounter}>Counter</button>
            </div>
            <div className="position-relative d-inline-block mb-4">
                <div
                    className="rounded-circle border border-3 d-flex align-items-center justify-content-center"
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: 'white'
                    }}
                >
                    <h1 className="display-4 mb-0 font-monospace">
                        {formatTime(time)}
                    </h1>
                </div>
            </div>

            <div className="btn-group">
                {!isActive || isPaused ? (
                    <button
                        className="btn btn-primary px-4"
                        onClick={handleStart}
                    >
                        {isPaused ? 'Resume' : 'Start'}
                    </button>
                ) : (
                    <button
                        className="btn btn-warning px-4"
                        onClick={handlePause}
                    >
                        Pause
                    </button>
                )}
                <button
                    className="btn btn-secondary px-4"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Clock;