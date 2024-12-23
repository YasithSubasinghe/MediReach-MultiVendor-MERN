// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import { getAllOrdersOfShop } from "../../redux/actions/order";
// import { AiOutlineArrowRight } from "react-icons/ai";

// const AllOrders = () => {
//   const { orders, isLoading } = useSelector((state) => state.order);
//   const { seller } = useSelector((state) => state.seller);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllOrdersOfShop(seller._id));
//   }, [dispatch]);

//   const columns = [
//    // { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
//    /////////////////
//    { field: "productName", headerName: "Product Name", minWidth: 200, flex: 1 }, 
//    /////////////////

// ////////////////////////////////////////////////
//    // Order Placed Date column
//    {
//     field: "orderDate",
//     headerName: "Order Placed Date",
//     minWidth: 180,
//     flex: 1,
//     valueFormatter: (params) => new Date(params.value).toLocaleDateString(), // Format the date for display
//   },
// //////////////////////////////////////////////////


//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },

//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   // orders &&
//   //   orders.forEach((item) => {
//   //     row.push({
//   //       id: item._id,
//   //       itemsQty: item.cart.length,
//   //       total: "LKR " + item.totalPrice,
//   //       status: item.status,
//   //     });
//   //   });
// //////////////////////////////////////
// orders &&
// orders.forEach((item) => {
//   const productName = item.cart.map((product) => product.name).join(", "); // Extract product names from the cart
//   row.push({
//     id: item._id, // Keep this for linking
//     productName, // Add product name to the row
//     orderDate: item.createdAt, // Add order placed date////////////////////////////
//     itemsQty: item.cart.length,
//     total: "LKR " + item.totalPrice,
//     status: item.status,
//   });
// });
// /////////////////////////////////////
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default AllOrders;

///////////////////////////////////////////////////////////////////////////////


//////////////////////working report code/////////////////////////////////////////////
// import { Button, TextField } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect, useState, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import { getAllOrdersOfShop } from "../../redux/actions/order";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// const AllOrders = () => {
//   const { orders, isLoading } = useSelector((state) => state.order || {});
//   const { seller } = useSelector((state) => state.seller || {});

//   const dispatch = useDispatch();

//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [filteredRows, setFilteredRows] = useState([]);

//   useEffect(() => {
//     if (seller?._id) {
//       dispatch(getAllOrdersOfShop(seller._id));
//     }
//   }, [dispatch, seller?._id]);

//   const rows = useMemo(() => {
//     if (!orders || orders.length === 0) return [];
//     return orders.map((item) => {
//       const productName = item.cart?.map((product) => product.name).join(", ") || "Unknown";
//       return {
//         id: item._id || "N/A",
//         productName,
//         orderDate: item.createdAt || new Date(),
//         itemsQty: item.cart?.length || 0,
//         total: item.totalPrice ? `LKR ${item.totalPrice}` : "N/A",
//         status: item.status || "Unknown",
//       };
//     });
//   }, [orders]);

//   useEffect(() => {
//     let filtered = rows;

//     if (startDate && endDate) {
//       filtered = rows.filter((row) => {
//         const orderDate = new Date(row.orderDate);
//         return orderDate >= startDate && orderDate <= endDate;
//       });
//     } else if (endDate) {
//       filtered = rows.filter((row) => {
//         const orderDate = new Date(row.orderDate);
//         return orderDate <= endDate;
//       });
//     }

//     setFilteredRows(filtered);
//   }, [startDate, endDate, rows]);

//   const handlePrint = () => {
//     const printContent = `Orders Report\n\n` +
//       `Start Date: ${startDate ? startDate.toLocaleDateString() : "Not Set"}\n` +
//       `End Date: ${endDate ? endDate.toLocaleDateString() : "Not Set"}\n\n` +
//       filteredRows
//         .map((row) => {
//           return `Product: ${row.productName}\nDate: ${new Date(
//             row.orderDate
//           ).toLocaleDateString()}\nItems Qty: ${row.itemsQty}\nTotal: ${row.total}\nStatus: ${row.status}\n---\n`;
//         })
//         .join("\n");

//     const newWindow = window.open("", "_blank");
//     newWindow.document.write(
//       `<html><head><style>
//         pre { font-family: Arial, sans-serif; }
//         h1 { background-color: #f0f0f0; padding: 10px; }
//       </style></head><body>
//       <h1>Orders Report</h1>
//       <pre>${printContent}</pre>
//       </body></html>`
//     );
//     newWindow.print();
//   };

//   const columns = [
//     { field: "productName", headerName: "Product Name", minWidth: 200, flex: 1 },
//     {
//       field: "orderDate",
//       headerName: "Order Placed Date",
//       minWidth: 180,
//       flex: 1,
//       valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.row.status === "Delivered" ? "greenColor" : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },
//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },
//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <div className="flex justify-between items-center mb-4">
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <DatePicker
//                 label="Start Date"
//                 value={startDate}
//                 onChange={(newDate) => newDate && setStartDate(newDate)}
//                 renderInput={(params) => <TextField {...params} />}
//               />
//               <DatePicker
//                 label="End Date"
//                 value={endDate}
//                 onChange={(newDate) => newDate && setEndDate(newDate)}
//                 renderInput={(params) => <TextField {...params} />}
//               />
//             </LocalizationProvider>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handlePrint}
//             >
//               Print Report
//             </Button>
//           </div>

//           <DataGrid
//             rows={filteredRows}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//             sx={{
//               "& .MuiDataGrid-columnHeaders": {
//                 backgroundColor: "#f0f0f0",
//               },
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default AllOrders;
//////////////////////working report code/////////////////////////////////////////////
import { Button, TextField } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AllOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order || {});
  const { seller } = useSelector((state) => state.seller || {});

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredRows, setFilteredRows] = useState([]);
  const [productWiseSales, setProductWiseSales] = useState([]);

  useEffect(() => {
    if (seller?._id) {
      dispatch(getAllOrdersOfShop(seller._id));
    }
  }, [dispatch, seller?._id]);

  const rows = useMemo(() => {
    if (!orders || orders.length === 0) return [];
    return orders.map((item) => {
      const productName = item.cart?.map((product) => product.name).join(", ") || "Unknown";
      return {
        id: item._id || "N/A",
        productName,
        orderDate: item.createdAt || new Date(),
        itemsQty: item.cart?.length || 0,
        total: item.totalPrice ? `LKR ${item.totalPrice}` : "N/A",
        status: item.status || "Unknown",
      };
    });
  }, [orders]);

  useEffect(() => {
    let filtered = rows;

    if (startDate && endDate) {
      filtered = rows.filter((row) => {
        const orderDate = new Date(row.orderDate);
        return orderDate >= startDate && orderDate <= endDate;
      });
    } else if (endDate) {
      filtered = rows.filter((row) => {
        const orderDate = new Date(row.orderDate);
        return orderDate <= endDate;
      });
    }

    setFilteredRows(filtered);

    const productSales = {};
    (orders || []).forEach((order) => {
      (order.cart || []).forEach((product) => {
        if (!productSales[product.name]) {
          productSales[product.name] = { count: 0, total: 0 };
        }
        productSales[product.name].count += 1;
        productSales[product.name].total += product.price || 0;
      });
    });

    const salesArray = Object.entries(productSales).map(([name, data]) => ({
      name,
      count: data.count,
      total: `LKR ${data.total}`,
    }));

    setProductWiseSales(salesArray);
  }, [startDate, endDate, rows, orders]);

  const handlePrint = () => {
    const printContent = `Orders Report\n\n` +
      `Start Date: ${startDate ? startDate.toLocaleDateString() : "Not Set"}\n` +
      `End Date: ${endDate ? endDate.toLocaleDateString() : "Not Set"}\n\n` +
      `Product-Wise Sales Summary:\n` +
      productWiseSales
        .map((item) => {
          return `Product: ${item.name}\nSales: ${item.count}\nTotal Revenue: ${item.total}\n---\n`;
        })
        .join("\n") +
      `\nDetailed Orders:\n` +
      filteredRows
        .map((row) => {
          return `Product: ${row.productName}\nDate: ${new Date(
            row.orderDate
          ).toLocaleDateString()}\nItems Qty: ${row.itemsQty}\nTotal: ${row.total}\nStatus: ${row.status}\n---\n`;
        })
        .join("\n");

    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      `<html><head><style>
        pre { font-family: Arial, sans-serif; }
        h1 { background-color: #f0f0f0; padding: 10px; }
      </style></head><body>
      <h1>Orders Report</h1>
      <pre>${printContent}</pre>
      </body></html>`
    );
    newWindow.print();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <div className="flex justify-between items-center mb-4">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newDate) => newDate && setStartDate(newDate)}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newDate) => newDate && setEndDate(newDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrint}
            >
              Print Sales Report
            </Button>
          </div>
          <DataGrid
            rows={filteredRows}
            columns={[
              { field: "productName", headerName: "Product Name", minWidth: 200, flex: 1 },
              {
                field: "orderDate",
                headerName: "Order Placed Date",
                minWidth: 180,
                flex: 1,
                valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
              },
              {
                field: "status",
                headerName: "Status",
                minWidth: 130,
                flex: 0.7,
                cellClassName: (params) => {
                  return params.row.status === "Delivered" ? "greenColor" : "redColor";
                },
              },
              {
                field: "itemsQty",
                headerName: "Items Qty",
                type: "number",
                minWidth: 130,
                flex: 0.7,
              },
              {
                field: "total",
                headerName: "Total",
                type: "number",
                minWidth: 130,
                flex: 0.8,
              },
              {
                field: " ",
                flex: 1,
                minWidth: 150,
                headerName: "",
                type: "number",
                sortable: false,
                renderCell: (params) => {
                  return (
                    <>
                      <Link to={`/order/${params.id}`}>
                        <Button>
                          <AiOutlineArrowRight size={20} />
                        </Button>
                      </Link>
                    </>
                  );
                },
              },
            ]}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f0f0f0",
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default AllOrders;
