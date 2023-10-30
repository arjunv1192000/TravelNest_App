'use client'
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../Avatar"
import { useCallback,useState } from "react"
import MenuItem from "./MenuItem"


const Usermenu = () => {
    const[isopen,SetIsopen]=useState(false)

    const toggleopen= useCallback(()=>{
        SetIsopen((value)=>!value)
    },[])


  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div 
            onClick={()=>{}}
            className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
            >
                Airbnb your home

            </div>
            <div
            onClick={toggleopen}
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
                <AiOutlineMenu/>
                <div className="hidden md:block">
                    <Avatar/>

                </div>

            </div>

        </div>
        {isopen && (
            <div className="absolute rounded-xl shadow-md w-[40vm] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <>
                    <MenuItem
                    onclick={()=>{}}
                    label="Login"
                    />
                     <MenuItem
                    onclick={()=>{}}
                    label="Sign up"
                    />

                    </>


                </div>

            </div>
            

        )}

    </div>
  )
}

export default Usermenu