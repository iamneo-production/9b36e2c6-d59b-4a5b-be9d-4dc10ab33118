import React, { useState } from 'react';

const StockTable = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '' });
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container py-5"style = {{backgroundColor : 'black', borderRadius:'20px',  fontColor:'black' , padding: '30px',marginBottom: '100px', marginTop: '100px'}}>
      <h1 className="text-center mb-4" style = {{color : 'white'}}>Stock Table</h1>

      <table className="table table-striped"><center style = {{backgroundColor : '#e400fd', color:'white', borderRadius:'20px', marginRight: '150px', marginLeft: '150px', marginBottom: '50px', marginTop: '50px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-danger mr-2" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
                <button className="btn btn-primary" onClick={() => handleUpdateProduct(product.id, { name: `Updated ${product.name}`, price: product.price + 10 })}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody></center>
      </table>

      <h2 className="mt-4" style = {{color : 'white'}}>Add Product</h2>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="nameInput" style = {{color : 'white'}}>Name:</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </div>
        </div><br>


        </br>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="priceInput" style = {{color : 'white'}}>Price:</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style = {{color : 'black'}}>$</span>
              </div>
              <input
                type="text"
                className="form-control"
                id="priceInput"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default StockTable;
