import React, { useState, useEffect } from 'react'
import '../components/playground/js/constructor'
// import '../components/playground/js/polyfill'
// import '../components/playground/js/closure'
// import '../components/playground/js/hoist'
// import '../components/playground/js/this'
// import '../components/playground/js/promise'
// import '../components/playground/js/asyncAwait'


const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        handleStart();
    }, []);

    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-300 mb-4">Stopwatch</h2>
                    <div className="flex space-x-4 mb-6">
                        <div className="bg-gray-800 rounded-xl p-4 min-w-[100px]">
                            <div className="text-4xl font-bold text-pink-500">{hours}</div>
                            <div className="text-sm text-gray-400 mt-1">Hours</div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 min-w-[100px]">
                            <div className="text-4xl font-bold text-orange-500">{minutes}</div>
                            <div className="text-sm text-gray-400 mt-1">Minutes</div>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-4 min-w-[100px]">
                            <div className="text-4xl font-bold text-yellow-500">{seconds}</div>
                            <div className="text-sm text-gray-400 mt-1">Seconds</div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        {!isRunning ? (
                            <button
                                onClick={handleStart}
                                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Start
                            </button>
                        ) : (
                            <button
                                onClick={handleStop}
                                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Stop
                            </button>
                        )}
                        <button
                            onClick={handleReset}
                            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Playground = () => {
    return (
        <div>
            <Stopwatch />
        </div>
    )
}

export default Playground
