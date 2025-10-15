
const NavSubs = ({title,list}) => {
  return (
    <div>
        <h1 className="text-[1.25rem] font-all text-gray-700">{title}</h1>
        <ul className="flex flex-col gap-3 mt-4">
            {
                list.map(
                    (el,idx)=>(
                        <li key={idx} className="text-[1rem] lg:text-[.95rem] text-gray-600 rep hover:text-blue-500 font-all">{el}</li>
                    )
                )
            }
        </ul>
    </div>
  )
}

export default NavSubs