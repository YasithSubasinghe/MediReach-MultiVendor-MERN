import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);

  useEffect(()=>{
    console.log("prodct list changes "+products.length);
  },[products]);

  const handleDelete = (id) => {
    console.log("prodct list view "+products.length);
    //dispatch(deleteProduct(id));
    dispatch(deleteProduct(id)).then(() => {
      console.log("delete success calling data fetch...");
      dispatch(getAllProductsShop(seller._id)); // Refetch updated products
    });
    console.log("prodct list view aftre"+products.length);
    //window.location.reload();
  };

  const columns = [
    // { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "ProID",
      headerName: "Product ID",
      type: "number",
      minWidth: 130,
      flex: 0.4,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 90,
      flex: 0.7,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 110,
      flex: 0.5,
    },
    ///////////////////////////////////////////
     // Added Created Date column
     {
      field: "createdDate",
      headerName: "Created Date",
      minWidth: 140,
      flex: 0.5,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString(), // Format the date
    },
    ///////////////////////////////////////////////
    {
      field: "Preview",
      flex: 0.4,
      minWidth: 60,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.4,
      minWidth: 80,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        ProID: item.ProID,
        name: item.name,
        price: "LKR " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
        createdDate: item.createdAt, // Added Created Date to row data////////////////////////////////////////////////
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
