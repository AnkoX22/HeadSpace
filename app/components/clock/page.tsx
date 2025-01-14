'use client'

import React, {useState, useEffect} from 'react';
import './clock.modules.css';

interface ClockProps {
    style?: { width: string; height: string }
}

const Clock = ({style}: ClockProps) => {
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [isCounter, setIsCounter] = useState(false);

    useEffect(() => {

        let interval: NodeJS.Timeout | undefined;

        if (isActive && !isPaused) {
            interval = setInterval(() => {


                if (isTimer && !isCounter) {
                    setTime((prevTime) => {
                        if (prevTime <= 0) {
                            clearInterval(interval);
                            setIsActive(false);
                            setIsTimer(false);
                            return 0;
                        }
                        return prevTime - 1;
                    });
                } else if (isCounter && !isTimer) {

                    setTime((prevTime) => {
                        if (isPaused) {
                            clearInterval(interval);
                            setIsActive(false);
                            setIsCounter(false);
                            return prevTime;
                        }
                        return prevTime + 1;
                    });
                }


            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const formatTime = (timeInSeconds: number) => {
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

    const handleTimer = () => {
        if (!isTimer) {
            setIsTimer(true);
            setIsActive(true);
            setIsCounter(false);
            setIsPaused(false);
        } else {
            setIsCounter(false);
            setIsPaused(false);
        }
    }

    const handleCounter = () => {
        if (!isCounter) {
            setTime(0);
            setIsCounter(true);
            setIsActive(true);
            setIsTimer(false);
            setIsPaused(false);
        } else {
            setIsTimer(false);
            setIsPaused(false);
        }
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
            {/* Timer/Counter Toggle Buttons */}
            <div className="flex justify-center gap-2 mb-4">
                <button
                    type="button"
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                    onClick={handleTimer}
                >
                    Timer
                </button>
                <button
                    type="button"
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                    onClick={handleCounter}
                >Counter
                </button>
            </div>

            {/* Clock Circle */}
            <div className="relative inline-block mb-4">
                <div
                    className="rounded-full border-4 border-gray-300 flex items-center justify-center"
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: 'white',
                    }}
                >
                    <h1 className="text-4xl font-mono">
                        {formatTime(time)}
                    </h1>
                </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center gap-2">
                {!isActive || isPaused ? (
                    <button
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={handleStart}
                    >
                        {isPaused ? 'Resume' : 'Start'}
                    </button>
                ) : (
                    <button
                        className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                        onClick={handlePause}
                    >
                        Pause
                    </button>
                )}
                <button
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};


export default Clock;