import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const saveProduct = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:3009/products', {
            title: title,
            price: price
        })

        setTitle('')
        setPrice('')
        
    }
  return (
    <div className='mt-5'>
        <a href="/">Kembali</a>
        <form onSubmit={saveProduct}>
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
                <button className="button is-primary">Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct