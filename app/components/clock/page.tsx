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
    const[borderColor, setBorderColor] = useState('border-gray-300');

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
                else if( !isActive && !isPaused){
                    setBorderColor('border-gray-300');
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
            setBorderColor('border-pink-500');
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
            setBorderColor('border-purple-500');
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
        setBorderColor('border-gray-300');
    };

    return (
        <div className="text-center">
            {/* Timer/Counter Toggle Buttons */}
            <div className="flex justify-center gap-2 mb-4">
                <button
                    type="button"
                    className="px-4 py-2 border border-amber-900 text-indigo rounded-lg hover:bg-pink-100 active:bg-blue-100"
                    onClick={handleTimer}
                >
                    Timer
                </button>
                <button
                    type="button"
                    className="px-4 py-2 border border-amber-900 text-indigo rounded-lg hover:bg-pink-100 active:bg-blue-100"
                    onClick={handleCounter}
                >Counter
                </button>
            </div>

            {/* Clock Circle */}
            <div className="relative inline-block mb-4">
                <div
                    className={`rounded-full border-4 transition-all ${borderColor} duration-1500 flex items-center justify-center transition-colors`}
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
                        className="px-6 py-2 bg-cyan-900 text-white rounded-lg hover:bg-pink-600"
                        onClick={handleStart}
                    >
                        {isPaused ? 'Resume' : 'Start'}
                    </button>
                ) : (
                    <button
                        className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-purple-300"
                        onClick={handlePause}
                    >
                        Pause
                    </button>
                )}
                <button
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-pink-600"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};


export default Clock;