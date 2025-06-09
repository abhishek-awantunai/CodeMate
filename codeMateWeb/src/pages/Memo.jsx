import React from 'react'
import MemoLeft from '../components/memo/MemoLeft'

const Memo = () => {
    return (
        <div className='flex justify-between'>
            <div className='border-[#163161] border-2 border-solid h-screen w-1/2 px-[25px] py-[30px]'>
                <MemoLeft />
            </div>
            <div className='border-[#163161] border-2 border-solid h-screen w-1/2'>
                <h1>Helllo</h1>
            </div>
        </div>
    )
}

export default Memo
