import React from 'react'

function InputForm({
  error,
  text,
  icon: Icon,
  handleChange, 
  placeholder, 
  value, 
  type ="text",
  id,
}) {
  return (
     <div className='flex flex-col gap-1'>
            <input className={`px-4 py-2 rounded-xl bg-gray-700 ${error?"outline-1 outline-red-500":"outline-0"}`} 
              id={id}
              onChange={handleChange} 
               value={value}
              type={type}
              placeholder={placeholder}/>
           {error &&<p  className='text-xs text-red-700'>{text} is requidred</p>} 
          </div>
  )
}

export default InputForm