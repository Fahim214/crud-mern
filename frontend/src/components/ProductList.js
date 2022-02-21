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
  return (
    <div>
        <Link to="/add" className="button is-primary mt-3">Add New</Link>
      <table>
        <thead className="table is-striped is-fullwidth">
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
                  <button className="button is-small is-info">Edit</button>
                  <button className="button is-small is-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
