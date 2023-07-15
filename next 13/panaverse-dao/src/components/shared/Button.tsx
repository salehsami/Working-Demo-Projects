import { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
      <button className='text-white bg-teal-600 rounded-2xl px-4 py-3 font-semibold hover:scale-105 duration-700 text-sm sm:text-lg'>{ text }</button>
  )
}

export default Button