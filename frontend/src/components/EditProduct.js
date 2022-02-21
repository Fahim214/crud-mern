import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const {id} = useParams()

    const updateProduct = async (e) =>{
        e.preventDefault()
        await axios.patch(`http://localhost:3009/products/${id}`, {
            title: title,
            price: price
        })

        setTitle('')
        setPrice('')
        
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:3009/products/${id}`)
        setTitle(response.data.title)
        setPrice(response.data.price)
    }
  return (
    <div className='mt-5'>
        <Link to="/">Kembali</Link>
        <form onSubmit={updateProduct}>
            <div className="field">
                <label className="label">Title</label>
                <input 
                className='input' 
                type="text" 
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="field">
                <label className="label">Price</label>
                <input 
                className='input' 
                type="text" 
                placeholder='Price' 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="field">
                <button className="button is-primary">Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct