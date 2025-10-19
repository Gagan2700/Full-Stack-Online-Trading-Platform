import React from 'react'

const Heroparas = ({title="",para}) => {
  return (
    <div>
        <h1 className='text-[1.4rem] text-gray-800 font-all mb-2'>{title}</h1>
        <p className='text-gray-500 font-all text-[1.05rem]'>{para}</p>
    </div>
  )
}

export default Heroparas