/*  eslint-disable no-unused-vars */
import  { useEffect, useState,useCallback } from 'react'

const useWindowWidth = (size) =>{
    const [onSmall,setSmall] = useState(false);
    


    // const checkScreenSize =    useCallback(() =>{
    //     setSmall(window.innerWidth < size);;
    //      },[size]) 
    
    // useEffect(()=>{
    //     checkScreenSize();
    //     window.addEventListener("resize",checkScreenSize);

    //     return () => window.removeEventListener('resize', checkScreenSize);
    // },[checkScreenSize])


    useEffect(()=>{
        const checkScreenSize = () => {
            setSmall(window.innerWidth <size);
        }
        checkScreenSize();
        window.addEventListener("resize",checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    },[size])



    return onSmall
}

export default  useWindowWidth