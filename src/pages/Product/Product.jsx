import "./Product.css";
import { useState } from "react";
import Charts from "../../components/Charts/Charts";
import { Link, useParams } from "react-router-dom";
import { productsData } from "../../Datas";
import { products } from "../../Datas";
// import { PublishOutlined } from "@mui/icons-material";

export default function Product() {
  const params = useParams();
  const [saveChanges, setSaveChanges] = useState(false);
  const [productName, setProductName] = useState(products[0].title);
  const [productPrice, setProductPrice] = useState(products[0].price);
  const [productSatisfied, setProductSatisfied] = useState(
    products[0].satisfied
  );
  const [productInStock, setProductInStock] = useState(products[0].inStock);
  const [productImage, setProductImage] = useState(null);

  // Edit product Image
  let fileHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProductImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Save changes handle
  let saveChangesHandler = () => {
    setSaveChanges(true);
  };

  // Selected product id for edit
  let mainProductData = products.find(
    (product) => product.id == params.productID
  );

  return (
    <>
      <div className="user-list-flex">
        <div className="flex justify-between m-8">
          <h3 className="text-gray-700 text-2xl font-sans font-bold">
            Product
          </h3>
          <Link to="/newProduct">
            <button
              type="button"
              className="py-1 px-2 font-sans font-semibold text-base rounded bg-sky-600 text-white hover:bg-sky-700 transition hover:shadow-sm"
            >
              Create +
            </button>
          </Link>
        </div>
        <hr />
        <div className="flex items-center">
          <div className="flex-1">
            <Charts title="Sale in month" data={productsData} dataKey="sales" />
          </div>
          <div className="bg-white p-2 ps-8 flex-1 rounded shadow-lg hover:shadow-sm transition m-8 flex justify-center items-start flex-col relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={saveChanges ? productImage : mainProductData.img}
                alt="Product Image"
                className="h-16 w-16 rounded-lg"
              />
              <span className="text-lg font-bold font-sans text-gray-700">
                {saveChanges ? productName : mainProductData.title}
              </span>
            </div>
            <ul className="w-3/6">
              <li className="flex justify-between py-2 w-full">
                <span className="text-base font-sans font-medium text-gray-600">
                  ID:
                </span>
                <span className="text-base font-sans font-normal text-gray-500">
                  {mainProductData.id}
                </span>
              </li>
              <li className="flex justify-between py-2 w-full">
                <span className="text-base font-sans font-medium text-gray-600">
                  Name:
                </span>
                <span className="text-base font-sans font-normal text-gray-500">
                  {saveChanges ? productName : mainProductData.title}
                </span>
              </li>
              <li className="flex justify-between py-2 w-full">
                <span className="text-base font-sans font-medium text-gray-600">
                  Price:
                </span>
                <span className="text-base font-sans font-normal text-gray-500">
                  {saveChanges ? productPrice : mainProductData.price}
                </span>
              </li>
              <li className="flex justify-between py-2 w-full">
                <span className="text-base font-sans font-medium text-gray-600">
                  Satisfied:
                </span>
                <span className="text-base font-sans font-normal text-gray-500">
                  {saveChanges ? productSatisfied : mainProductData.satisfied}{" "}
                  👍
                </span>
              </li>
              <li className="flex justify-between py-2 w-full">
                <span className="text-base font-sans font-medium text-gray-600">
                  In stock:
                </span>
                <span className="text-base font-sans font-normal text-gray-500">
                  {saveChanges ? productInStock : mainProductData.inStock} 🗳
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-lg hover:shadow-sm transition m-8 relative after:content-[''] after:absolute after:top-2 after:right-2 after:h-4 after:w-4 after:rounded-full after:bg-slate-300 after:hover:bg-green-300">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-20">
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="flex-1 text-gray-700 text-base font-sans font-medium"
                >
                  Product name:
                </label>
                <input
                  type="text"
                  className="w-full py-1 px-2 rounded border-2 border-s-sky-600 outline-none focus:border-e-sky-600 focus:outline-none text-gray-700 text-base font-sans font-medium flex-1"
                  onChange={(e) => setProductName(e.target.value)}
                  // value={productName}
                  placeholder="Product title"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="flex-1 text-gray-700 text-base font-sans font-medium"
                >
                  Product price:
                </label>
                <input
                  type="text"
                  className="w-full py-1 px-2 rounded border-2 border-s-sky-600 outline-none focus:border-e-sky-600 focus:outline-none text-gray-700 text-base font-sans font-medium flex-1"
                  onChange={(e) => setProductPrice(e.target.value)}
                  // value={productPrice}
                  placeholder="Product price $"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="flex-1 text-gray-700 text-base font-sans font-medium"
                >
                  In stock:
                </label>
                <input
                  type="text"
                  className="w-full py-1 px-2 rounded border-2 border-s-sky-600 outline-none focus:border-e-sky-600 focus:outline-none text-gray-700 text-base font-sans font-medium flex-1"
                  onChange={(e) => setProductInStock(e.target.value)}
                  // value={productInStock}
                  placeholder="Number"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="flex-1 text-gray-700 text-base font-sans font-medium"
                >
                  Satisfied:
                </label>
                <input
                  type="text"
                  className="w-full py-1 px-2 rounded border-2 border-s-sky-600 outline-none focus:border-e-sky-600 focus:outline-none text-gray-700 text-base font-sans font-medium flex-1"
                  onChange={(e) => setProductSatisfied(e.target.value)}
                  // value={productSatisfied}
                  placeholder="Number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-14 items-center">
              <div className="flex flex-col gap-14 items-center">
                <img
                  src={productImage}
                  alt="Upload Image"
                  className="h-40 w-40 rounded-lg object-cover"
                />
                {/* <label htmlFor="">
                  <PublishOutlined />
                </label> */}
                <input
                  type="file"
                  className="border-2 outline-none p-2 text-gray-700 rounded text-base font-sans font-medium cursor-pointer"
                  onChange={fileHandler}
                />
              </div>
              <button
                className="border-none outline-none py-1 px-2 bg-sky-600 hover:bg-sky-700 text-white rounded text-base font-sans font-medium"
                onClick={saveChangesHandler}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
