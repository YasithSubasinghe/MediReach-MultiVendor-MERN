// import React, { useEffect, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../redux/actions/product";
// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";

// const CreateProduct = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const { success, error } = useSelector((state) => state.products);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [images, setImages] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [originalPrice, setOriginalPrice] = useState();
//   const [discountPrice, setDiscountPrice] = useState();
//   const [stock, setStock] = useState();


//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (success) {
//       toast.success("Product created successfully!");
//       navigate("/dashboard");
//       window.location.reload();
//     }
//   }, [dispatch, error, success]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImages((old) => [...old, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newForm = new FormData();

//     images.forEach((image) => {
//       newForm.set("images", image);
//     });
//     newForm.append("name", name);
//     newForm.append("description", description);
//     newForm.append("category", category);
//     newForm.append("tags", tags);
//     newForm.append("originalPrice", originalPrice);
//     newForm.append("discountPrice", discountPrice);
//     newForm.append("stock", stock);
//     newForm.append("shopId", seller._id);
//     dispatch(
//       createProduct({
//         name,
//         description,
//         category,
//         tags,
//         originalPrice,
//         discountPrice,
//         stock,
//         shopId: seller._id,
//         images,
//       })
//     );
//   };

//   return (
//     <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
//       <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
//       {/* create product form */}
//       <form onSubmit={handleSubmit}>
//         <br />
//         <div>
//           <label className="pb-2">
//             Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your product name..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             cols="30"
//             required
//             rows="8"
//             type="text"
//             name="description"
//             value={description}
//             className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter your product description..."
//           ></textarea>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Choose a category">Choose a category</option>
//             {categoriesData &&
//               categoriesData.map((i) => (
//                 <option value={i.title} key={i.title}>
//                   {i.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <br />
//         {/* <div>
//           <label className="pb-2">Tags</label>
//           <input
//             type="text"
//             name="tags"
//             value={tags}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="Enter your product tags..."
//           />
//         </div> */}
//         <div>
//   <label className="pb-2">Units</label>
//   <select
//     className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//     value={tags}
//     onChange={(e) => setTags(e.target.value)}
//   >
//     <option value="">Select unit</option>
//     <option value="1Kg">1Kg</option>
//     <option value="100g">100g</option>
//     <option value="1g">1g</option>
//     <option value="1L">1L</option>
//     <option value="100ml">100ml</option>
//     <option value="10ml">10ml</option>
//     <option value="unit 1">unit 1</option>
//   </select>
// </div>


//         <br />
//         <div>
//           <label className="pb-2">
//             Price (Accourding to Unit) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={discountPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDiscountPrice(e.target.value)}
//             placeholder="Enter your product price Accourding to Unit..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product Stock(Accourding to Unit)  <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setStock(e.target.value)}
//             placeholder="Enter your product stock Accourding to Unit..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Upload Images <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name=""
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {images &&
//               images.map((i) => (
//                 <img
//                   src={i}
//                   key={i}
//                   alt=""
//                   className="h-[120px] w-[120px] object-cover m-2"
//                 />
//               ))}
//           </div>
//           <br />
//           <div>
//             <input
//               type="submit"
//               value="Create"
//               className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;
////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../redux/actions/product";
// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";

// const CreateProduct = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const { success, error } = useSelector((state) => state.products);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [images, setImages] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [originalPrice, setOriginalPrice] = useState();
//   const [discountPrice, setDiscountPrice] = useState();
//   const [stock, setStock] = useState();
//   const [product, setProduct] = useState("");

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (success) {
//       toast.success("Product created successfully!");
//       navigate("/dashboard");
//       window.location.reload();
//     }
//   }, [dispatch, error, success]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImages((old) => [...old, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name) {
//       toast.error("Please enter your product name!");
//       return;
//     }
//     if (!description) {
//       toast.error("Please enter your product description!");
//       return;
//     }
//     if (!category) {
//       toast.error("Please enter your product category!");
//       return;
//     }
 
//     const newForm = new FormData();

//     images.forEach((image) => {
//       newForm.set("images", image);
//     });
//     newForm.append("name", name);
//     newForm.append("description", description);
//     newForm.append("category", category);
//     newForm.append("tags", tags);
//     newForm.append("originalPrice", originalPrice);
//     newForm.append("discountPrice", discountPrice);
//     newForm.append("stock", stock);
//     newForm.append("shopId", seller._id);
//     newForm.append("product", product);
//     dispatch(
//       createProduct({
//         name,
//         description,
//         category,
//         originalPrice,
//         discountPrice,
//         stock,
//         shopId: seller._id,
//         images,
//         product,
//         tags,
//       })
//     );
//   };

//   return (
//     <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
//       <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
//       {/* create product form */}
//       <form onSubmit={handleSubmit}>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={product}
//             onChange={(e) => {
//               setProduct(e.target.value);
//               setName(e.target.value);
//             }}
//           >
//             <option value="">Select product</option>
//             <option value="Pepper">Pepper</option>
//             <option value="Sandalwood">Sandalwood</option>
//             <option value="Venival">Venival</option>
//             <option value="Honey">Honey</option>
//             <option value="Aralu">Aralu</option>
//             <option value="White Ginger">White Ginger</option>
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Choose a category">Choose a category</option>
//             {categoriesData &&
//               categoriesData.map((i) => (
//                 <option value={i.title} key={i.title}>
//                   {i.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             cols="30"
//             required
//             rows="8"
//             type="text"
//             name="description"
//             value={description}
//             className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter your product description..."
//           ></textarea>
//         </div>
//         <br />


// {/* <div>
//   <label className="pb-2">
//     Units ({product === "Pepper" && "g"}
//     {product === "Sandalwood" && "g"}
//     {product === "Venival" && "Kg"}
//     {product === "Honey" && "ml"}):
//   </label>
//   <input
//     type="text"
//     name="tags"
//     value={tags}
//     className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//     onChange={(e) => setTags(e.target.value)}
//     placeholder="Enter unit value..."
//   />
//   <p className="mt-2 text-gray-700">
//     Combined Value: {tags}{" "}
//     {product === "Pepper" && "g"}
//     {product === "Sandalwood" && "g"}
//     {product === "Venival" && "Kg"}
//     {product === "Honey" && "ml"}
//   </p>
// </div> */}
// {/* <div>
//   <label className="pb-2">
//     Units ({product === "Pepper" && "g"}
//     {product === "Sandalwood" && "g"}
//     {product === "Venival" && "Kg"}
//     {product === "Honey" && "ml"}
//     {product === "Aralu" && "kalan"}
//     {product === "White Ginger" && "mg"}):
//   </label>
//   <input
//     type="text"
//     name="tags"
//     value={tags}
//     className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//     onChange={(e) => {
//       const unit =
//         product === "Pepper" || product === "Sandalwood"
//           ? "g"
//           : product === "Venival"
//           ? "Kg"
//           : "ml";
//       const combinedValue = `${e.target.value} ${unit}`;
//       setTags(combinedValue); // Update tags with the combined value
//     }}
//     placeholder="Enter unit value..."
//   />
//   <p className="mt-2 text-gray-700">
//     Combined Value: {tags}
//   </p>
// </div> */}



// <div>
//   {/* Label for Units */}
//   <label className="pb-2">
//     Units (
//     {product === "Pepper" && "g"}
//     {product === "Sandalwood" && "g"}
//     {product === "Venival" && "Kg"}
//     {product === "Honey" && "ml"}
//     {product === "Aralu" && "kalan"}
//     {product === "White Ginger" && "mg"}
//     ):
//   </label>

//   {/* Input for unit value */}
//   {/* <input
//     type="text"
//     name="tags"
//     value={tags}
//     className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//     onChange={(e) => {
//       // Determine unit based on product type
//       const unit =
//         product === "Pepper" || product === "Sandalwood"
//           ? "g"
//           : product === "Venival"
//           ? "Kg"
//           : product === "Honey"
//           ? "ml"
//           : product === "Aralu"
//           ? "kalan"
//           : product === "White Ginger"
//           ? "mg"
//           : ""; // Default empty unit if product doesn't match

//       // Combine the input value with the unit
//       const combinedValue = e.target.value ? `${e.target.value} ${unit}` : "";
//       setTags(combinedValue); // Update tags state with combined value
//     }}
//     placeholder="Enter unit value..."
//   /> */}

// <input
//   type="text"
//   name="tags"
//   value={tags}
//   className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//   onChange={(e) => {
//     // Update the value based on user input
//     const inputValue = e.target.value.replace(/\D/g, ''); // Allow only numbers
//     const unit =
//       product === "Pepper" || product === "Sandalwood"
//         ? "g"
//         : product === "Venival"
//         ? "Kg"
//         : product === "Honey"
//         ? "ml"
//         : product === "Aralu"
//         ? "kalan"
//         : product === "White Ginger"
//         ? "mg"
//         : ""; // Default empty unit if product doesn't match

//     setTags(inputValue ? `${inputValue} ${unit}` : ""); // Combine number with unit
//   }}
//   placeholder={`Enter unit value in ${
//     product === "Pepper" || product === "Sandalwood"
//       ? "grams"
//       : product === "Venival"
//       ? "kilograms"
//       : product === "Honey"
//       ? "milliliters"
//       : product === "Aralu"
//       ? "kalan"
//       : product === "White Ginger"
//       ? "milligrams"
//       : "units"
//   }`}
// />


//   {/* Display the combined value */}
//   <p className="mt-2 text-gray-700">
//     Unit: {tags}
//   </p>
// </div>




//         <br />
//         <div>
//           <label className="pb-2">
//             Price (According to Unit) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={discountPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDiscountPrice(e.target.value)}
//             placeholder="Enter your product price According to Unit..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product Stock (According to Unit) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setStock(e.target.value)}
//             placeholder="Enter your product stock According to Unit..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Upload Images <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name=""
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {images &&
//               images.map((i) => (
//                 <img
//                   src={i}
//                   key={i}
//                   alt=""
//                   className="h-[120px] w-[120px] object-cover m-2"
//                 />
//               ))}
//           </div>
//           <br />
//           <div>
//             <input
//               type="submit"
//               value="Create"
//               className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from "react";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createProduct } from "../../redux/actions/product";
// import { categoriesData } from "../../static/data";
// import { toast } from "react-toastify";

// const CreateProduct = () => {
//   const { seller } = useSelector((state) => state.seller);
//   const { success, error } = useSelector((state) => state.products);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [images, setImages] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [tags, setTags] = useState("");
//   const [ProID, setProID] = useState();
//   const [discountPrice, setDiscountPrice] = useState();
//   const [stock, setStock] = useState();
//   const [product, setProduct] = useState("");

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (success) {
//       toast.success("Product created successfully!");
//       navigate("/dashboard");
//       window.location.reload();
//     }
//   }, [dispatch, error, success]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImages((old) => [...old, reader.result]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name) {
//       toast.error("Please enter your product name!");
//       return;
//     }
//     if (!description) {
//       toast.error("Please enter your product description!");
//       return;
//     }
//     if (!category) {
//       toast.error("Please enter your product category!");
//       return;
//     }

//     // Generate a random 4-digit number
//   const randomProID = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000-9999
//   setProID(randomProID); // Set the random value to originalPrice

 
//     const newForm = new FormData();

//     images.forEach((image) => {
//       newForm.set("images", image);
//     });
//     newForm.append("name", name);
//     newForm.append("description", description);
//     newForm.append("category", category);
//     newForm.append("tags", tags);
//     //newForm.append("originalPrice", originalPrice);
//     newForm.append("ProID", randomProID); // Append the random value
//     newForm.append("discountPrice", discountPrice);
//     newForm.append("stock", stock);
//     newForm.append("shopId", seller._id);
//     newForm.append("product", product);
//     dispatch(
//       createProduct({
//         name,
//         description,
//         category,
//         ProID: randomProID, // Pass the random value here
//         discountPrice,
//         stock,
//         shopId: seller._id,
//         images,
//         product,
//         tags,
//       })
//     );
//   };

//   return (
//     <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
//       <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
//       {/* create product form */}
//       <form onSubmit={handleSubmit}>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={product}
//             onChange={(e) => {
//               setProduct(e.target.value);
//               setName(e.target.value);
//             }}
//           >
//             <option value="">Select product</option>
//             <option value="Pepper">Pepper</option>
//             <option value="Sandalwood">Sandalwood</option>
//             <option value="Venival">Venival</option>
//             <option value="Honey">Honey</option>
//             <option value="Aralu">Aralu</option>
//             <option value="White Ginger">White Ginger</option>
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             className="w-full mt-2 border h-[35px] rounded-[5px]"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="Choose a category">Choose a category</option>
//             {categoriesData &&
//               categoriesData.map((i) => (
//                 <option value={i.title} key={i.title}>
//                   {i.title}
//                 </option>
//               ))}
//           </select>
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             cols="30"
//             required
//             rows="8"
//             type="text"
//             name="description"
//             value={description}
//             className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter your product description..."
//           ></textarea>
//         </div>
//         <br />


// <div>
//   {/* Label for Units */}
//   <label className="pb-2">
//     Units (
//     {product === "Pepper" && "g"}
//     {product === "Sandalwood" && "g"}
//     {product === "Venival" && "Kg"}
//     {product === "Honey" && "ml"}
//     {product === "Aralu" && "kalan"}
//     {product === "White Ginger" && "mg"}
//     ):
//   </label>

// <input
//   type="text"
//   name="tags"
//   value={tags}
//   className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//   onChange={(e) => {
//     // Update the value based on user input
//     const inputValue = e.target.value.replace(/\D/g, ''); // Allow only numbers
//     const unit =
//       product === "Pepper" || product === "Sandalwood"
//         ? "g"
//         : product === "Venival"
//         ? "Kg"
//         : product === "Honey"
//         ? "ml"
//         : product === "Aralu"
//         ? "kalan"
//         : product === "White Ginger"
//         ? "mg"
//         : ""; // Default empty unit if product doesn't match

//     setTags(inputValue ? `${inputValue} ${unit}` : ""); // Combine number with unit
//   }}
//   placeholder={`Enter unit value in ${
//     product === "Pepper" || product === "Sandalwood"
//       ? "grams"
//       : product === "Venival"
//       ? "kilograms"
//       : product === "Honey"
//       ? "milliliters"
//       : product === "Aralu"
//       ? "kalan"
//       : product === "White Ginger"
//       ? "milligrams"
//       : "units"
//   }`}
// />


//   {/* Display the combined value */}
//   <p className="mt-2 text-gray-700">
//     Unit: {tags}
//   </p>
// </div>




//         <br />
//         <div>
//           <label className="pb-2">
//             Price (According to Unit) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={discountPrice}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setDiscountPrice(e.target.value)}
//             placeholder="Enter your product price According to Unit..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Product Stock (According to Unit) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={stock}
//             className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             onChange={(e) => setStock(e.target.value)}
//             placeholder="Enter your product stock According to Unit..."
//           />
//         </div>
//         <br />
//         <div>
//           <label className="pb-2">
//             Upload Images <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name=""
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {images &&
//               images.map((i) => (
//                 <img
//                   src={i}
//                   key={i}
//                   alt=""
//                   className="h-[120px] w-[120px] object-cover m-2"
//                 />
//               ))}
//           </div>
//           <br />
//           <div>
//             <input
//               type="submit"
//               value="Create"
//               className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;

/////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/actions/product";
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";



const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [adminProducts, setAdminProducts] = useState([]); // Stores fetched products
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setUnit] = useState("");
  const [ProID, setProID] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [product, setProduct] = useState("");
  const [selectProductUnit, setSelectProductUnit] = useState("");
  
  

    // Fetch admin products on component mount
    useEffect(() => {
      const fetchAdminProducts = async () => {
        try {
          const { data } = await axios.get(`${server}/product/get-all-AdminProducts`); // Updated URL
          setAdminProducts(data.products); // Set fetched products
        } catch (error) {
          console.error("Error fetching admin products:", error);
          toast.error("Failed to fetch products from adminproducts.");
        }
      };
      fetchAdminProducts();
    }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Product created successfully!");
      navigate("/dashboard");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter your product name!");
      return;
    }
    if (!description) {
      toast.error("Please enter your product description!");
      return;
    }
    if (!category) {
      toast.error("Please enter your product category!");
      return;
    }

    // Generate a random 4-digit number
  const randomProID = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000-9999
  setProID(randomProID); // Set the random value to originalPrice

 
    const newForm = new FormData();

    images.forEach((image) => {
      newForm.set("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    //newForm.append("originalPrice", originalPrice);
    newForm.append("ProID", randomProID); // Append the random value
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", seller._id);
    newForm.append("product", product);
    dispatch(
      createProduct({
        name,
        description,
        category,
        ProID: randomProID, // Pass the random value here
        discountPrice,
        stock,
        shopId: seller._id,
        images,
        product,
        tags,
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Product <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={product}
            onChange={(e) => {
              // const selectedProduct = adminProducts.find(
              //   (p) => p.name === e.target.value
              // );
              const selectedProduct = adminProducts.find(item => item.productName.trim().toLowerCase() === e.target.value.trim().toLowerCase());

              setProduct(e.target.value);
              setName(e.target.value);
              setUnit(selectedProduct ? selectedProduct.unit : "");
             // setSelectProductUnit(selectedProduct.unit);
              
            }}
          >
            <option value="">Select product</option>
            {adminProducts.map((prod) => (
              <option key={prod._id} value={prod.productName}>
                {prod.productName}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Unit:</label>
          <input
            type="text"
            value={tags}
            disabled
            className="w-full mt-2 border h-[35px] rounded-[5px] bg-gray-100"
          />
          {selectProductUnit}
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />




        <br />
        <div>
          <label className="pb-2">
            Price (According to Unit) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter your product price According to Unit..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock (According to Unit) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter your product stock According to Unit..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;