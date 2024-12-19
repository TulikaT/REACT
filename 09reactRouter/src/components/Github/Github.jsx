import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
  
    // const [data,setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/TulikaT')
    // .then( response => response.json())
    // .then(data =>{
    //     console.log(data);
    //     setData(data)
    // })
    // }, [])

  return (
    <div className='text-center m-5 bg-gray-600 p-4 text-3xl text-white'>Github followers: {data.followers}
    <img src={data.avatar_url} alt='Git picture' className='text-center m-auto my-9' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/TulikaT')
  return response.json()
}