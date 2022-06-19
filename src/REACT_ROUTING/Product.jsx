import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

const Product = () => {
const[data,setData]=React.useState([])
const navigate=useNavigate();

    React.useEffect(()=>{
          fetch(`http://localhost:3001/data`)
          .then((res)=>{
            res.json().then((res)=>{
                console.log(res)
                setData(res)
            })
          })
          .catch((error)=>{
            console.log(error)
          })
    },[])

    const handleClick =(id)=>{
        navigate(`ProductDetails/${id}`)
    }
  return (
   <>
   {
    data.map(({name,price,id})=>{
        return (
            <div className='contentBox'>
            <p>{ name }</p>
            <p>{ price }</p>
            <button onClick={()=>handleClick(id)}>More Details </button>
        </div>
)    })
   }
   </>
  )
}

export default Product

// "name" : "SmartPhone",
// "price": 30,
// "id" : 0