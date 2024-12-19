import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div>
        <div className='bg-gray-500 p-9 text-white text-center m-auto'> User: {id}</div>
    </div>
  )
}

export default User