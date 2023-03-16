import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const SignOut = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        fetch('/admin/sign-out',{
            method:'GET',
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials:"include"
        } ).then((res) =>{
            navigate('/',{replace:true});
            if(res.status !== 200){
                const error = new Error(res.error); 
                throw error;
            }
        }).catch((err) =>{
            console.log(err);   
        })
    })
    return (
        <>
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className='text-4xl'>Logging Out.....</h1>
        </div>
        
        </>
    );
}

export default SignOut;
