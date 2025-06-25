import React, { useMemo, useState } from 'react'
import { getNthPrimeNumber } from '../../utils/utils'

const MemoLeft = () => {
    const [inputText, setInputText] = useState(0)
    console.log('MemoLeft is rendering');

    const primeNumber = useMemo(() => getNthPrimeNumber(inputText), [inputText]);
    const [isDarkTheme, setIsDarkTheme] = useState(false)


    return (
        <div className={`${isDarkTheme ? 'bg-blue-950 text-white' : 'text-black'} h-screen py-[30px] px-[30px]`}>
            <input onChange={e => {
                setInputText(e.target.value)
            }} value={inputText} type="number" placeholder="Type here" className={`input focus:outline-none text-black`} />
            <p className='py-[10px]'>
                {inputText}th prime number is {primeNumber}
            </p>
            <button className='bg-red-800 px-4 py-2 rounded-md text-white cursor-pointer' onClick={() => setIsDarkTheme(!isDarkTheme)}>Change Theme</button>
        </div>
    )
}

export default MemoLeft
