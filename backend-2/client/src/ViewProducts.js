import React, { useEffect, useState } from 'react'

export default function ViewProducts() {

    const [products, setProducts] = useState([] );

    useEffect(() => {
        fetch('http://localhost:5000/productjson')
        .then(res=> res.json())
        .then(data => setProducts(data));
    }, [] )
    
    let productList = products.map((product, index)=> {
        return (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>@mdo</td>
    </tr>   
        )
    })

  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
     {productList}
  </tbody>
</table>
  )
}
