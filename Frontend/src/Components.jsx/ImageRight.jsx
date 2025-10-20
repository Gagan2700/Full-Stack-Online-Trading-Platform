import Anchor from './Anchor'
import play from "/googlePlayBadge.svg"
import apple from "/appstoreBadge.svg"

const ImageRight = ({title,anh="",para,img}) => {
  return (
    <div className='flex justify-between items-center md:px-[2.25rem] my-[10rem] md:flex-row flex-col gap-10 md:gap-0 px-[1rem]'>
        <div className='md:w-[55%]'>
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
            <div className='flex gap-[1.25rem] md:flex-col lg:flex-row flex-row'>
                <img src={play} alt="" />
                <img src={apple} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ImageRight