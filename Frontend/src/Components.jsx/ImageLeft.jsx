import Anchor from './Anchor'

const ImageLeft = ({title,anh="",para,img}) => {
  return (
    <div className='flex justify-between items-center md:px-[2.25rem] my-[10rem] md:flex-row flex-col px-[1rem]'>
        <div className='md:w-[55%] md:hidden'>
            <img src={img} alt="" className='cursor-pointer'/>
        </div>
        <div className='md:w-[30%] flex flex-col gap-[1.5rem]'>
            <h1 className='text-[1.65rem] font-all text-gray-700'>{title}</h1>
            <p className='text-pretty text-gray-700 font-all text-[1.1rem]'>
                {para}
            </p>
            <div className='flex gap-[3rem]'>
                <Anchor text={anh}></Anchor>
            </div>
        </div>
        <div className='md:w-[55%] hidden md:block'>
            <img src={img} alt="" className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default ImageLeft