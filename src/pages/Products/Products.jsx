import { useState } from "react";
import { products } from "../../Datas";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Swal from "sweetalert2";
import "./Products.css";

export default function Products() {
  const [productsData, setProductsData] = useState(products);

  const productDeleteHandler = (productID) => {
    Swal.fire({
      title: "Are you sure to delete this product?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setProductsData(
          productsData.filter((product) => product.id !== productID)
        );
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      }
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "title",
      headerNmae: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`}>
            <div className="flex items-center">
              <img
                src={params.row.img}
                className="w-10 h-10 rounded-full mx-2 border border-sky-500"
                alt="User Avatar"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="p-1 mx-2 font-sans font-medium rounded bg-green-500 text-white hover:bg-green-600 transition">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="text-xl mx-2 text-red-500 cursor-pointer hover:text-red-600 transition"
              onClick={() => productDeleteHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-2 m-8 rounded shadow-lg hover:shadow-sm transition user-list-flex">
      <DataGrid
        rows={productsData}
        columns={columns}
        pageSize={2}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
  );
}
