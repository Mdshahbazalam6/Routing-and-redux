import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    // console.log(id)
    const [state,setState]=useState()

    React.useEffect(()=>{
        fetch(`http://localhost:3001/data/${id}`)
        .then((res)=>{
          res.json().then((res)=>{
              console.log(res)
              setState(res)
          })
        })
        .catch((error)=>{
          console.log(error)
        })
    },[])
  return (
   <p>{JSON.stringify(state)}</p>
  )
}

export default ProductDetails