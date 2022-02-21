import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:3009/products');
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
      const response = await axios.delete(`http://localhost:3009/products/${id}`)
      getProducts()
    }
  return (
    <div>
        <Link to="/add" className="button is-primary mt-3">Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {products.map((pro, index) => (
                <tr key={pro.id}>
                <td>{index + 1}</td>
                <td>{pro.title}</td>
                <td>{pro.price}</td>
                <td>
                  <Link to={`/edit/${pro.id}`} className="button is-small is-info">Edit</Link>
                  <button className="button is-small is-danger ml-3" onClick={() => deleteProduct(pro.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
