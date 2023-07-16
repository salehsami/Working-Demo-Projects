import { FC } from 'react'

const Quarters: FC<{header:string, number:string, para:string}> = ({header, number, para}) => {
    return (
        
        <div className="rounded border relative w-4/12 sm:px-5 sm:py-7 md:px-8 md:py-8 lg:py-12">
            <h4 className="text:md md:text-lg font-bold md:font-extrabold ">{ header }</h4>
            <p className="text:sm md:text-md text-slate-600 z-0">{ para }</p>
            <span className="absolute top-10 text-8xl lg:text-9xl sm:ml-20 md:ml-24 lg:ml-28 xl:ml-44 text-gray-300 -z-10">{ number }</span>
        </div>

    )
}

export default Quarters;