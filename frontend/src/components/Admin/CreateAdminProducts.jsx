import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAdminProduct } from "../../redux/actions/adminProduct"

const CreateAdminProducts = () => {
  const [productName, setProductName] = useState("");
  const [unit, setUnit] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !unit) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(createAdminProduct({ productName, unit }));
    setProductName("");
    setUnit("");
  };

  return (
    <div className="w-full p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Unit</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Enter unit (e.g., kg, g)"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateAdminProducts;
