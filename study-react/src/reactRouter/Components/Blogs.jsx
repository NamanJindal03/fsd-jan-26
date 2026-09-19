import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const approvedBlogPages = ['naman-jindal', "1","2","3","4","5","6","7"]
export default function Blogs() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
       console.log("here2")

       console.log(approvedBlogPages.includes(id))
        if(!approvedBlogPages.includes(id)){
            //redirect someplace else
            console.log('redirection to be happened')
            navigate("/home")
        }
        setIsLoading(false)
    },[])

    if(isLoading){
        return (
            <div>Loading........</div>
        )
    }
  return (
    <>
        {console.log('here 1')}
        <div>Blogs</div>
    </>
  )
}
