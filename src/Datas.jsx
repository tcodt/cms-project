// Chart data
const xAxisData = [
  { name: "Jan", Sale: 12000 },
  { name: "Feb", Sale: 11500 },
  { name: "Mar", Sale: 6000 },
  { name: "Apr", Sale: 9000 },
  { name: "May", Sale: 2000 },
  { name: "Jun", Sale: 4000 },
  { name: "Jul", Sale: 8000 },
  { name: "Agu", Sale: 5000 },
  { name: "Sep", Sale: 1000 },
  { name: "Oct", Sale: 11800 },
  { name: "Nov", Sale: 7600 },
  { name: "Dec", Sale: 3000 },
];

// New members data
const newMembers = [
  {
    id: 1,
    username: "Amir Khanjani",
    role: "Front-End Dev",
    img: "images/person-120x120.jpg",
  },
  {
    id: 2,
    username: "Jennilyn R.M",
    role: "Designer & Weblog",
    img: "images/person3-120x120.jpg",
  },
  {
    id: 3,
    username: "Reza Khani",
    role: "Back-End Dev",
    img: "images/57.jpg",
  },
  {
    id: 4,
    username: "Zahra P",
    role: "Security",
    img: "images/person4-120x120.jpg",
  },
];

// Transaction data
const transaction = [
  {
    id: 1,
    img: "images/person3-120x120.jpg",
    name: "Jennilyn R.M",
    amount: 123,
    status: "Approved",
    date: "2023/9/4",
  },
  {
    id: 2,
    img: "images/person-120x120.jpg",
    name: "Amir Khanjani",
    amount: 234,
    status: "Declined",
    date: "2023/2/6",
  },
  {
    id: 3,
    img: "images/person4-120x120.jpg",
    name: "Zahra P",
    amount: 99,
    status: "Pending",
    date: "2023/9/9",
  },
  {
    id: 4,
    img: "images/57.jpg",
    name: "Reza Khani",
    amount: 140,
    status: "Declined",
    date: "2023/2/1",
  },
];

// UserList data
let userRows = [
  {
    id: 1,
    username: "Amir Khanjani",
    status: "none-active",
    transaction: "$231",
    avatar: "images/person-120x120.jpg",
    email: "amir@gmail.com",
  },
  {
    id: 2,
    username: "Jennilyn R.M",
    transaction: "$120",
    status: "active",
    avatar: "images/person3-120x120.jpg",
    email: "jennilyn@gmail.com",
  },
  {
    id: 3,
    username: "Reza Khani",
    status: "none-active",
    transaction: "$98",
    avatar: "images/57.jpg",
    email: "reza@gmail.com",
  },
  {
    id: 4,
    username: "Zahra P",
    status: "active",
    transaction: "$179",
    avatar: "images/person4-120x120.jpg",
    email: "zahra@gmail.com",
  },
];

// Products data
let products = [
  {
    id: 1,
    title: "iPhone 13 Pro",
    price: "$1000",
    img: "/images/26.png",
    satisfied: "390",
    inStock: "20",
  },
  {
    id: 2,
    title: "Redmi 9 Pro",
    price: "$340",
    img: "/images/01.png",
    satisfied: "540",
    inStock: "78",
  },
  {
    id: 3,
    title: "Samsung A13",
    price: "$449",
    img: "/images/30.png",
    satisfied: "234",
    inStock: "12",
  },
  {
    id: 4,
    title: "Apple Watch",
    price: "$800",
    img: "/images/45.png",
    satisfied: "121",
    inStock: "69",
  },
];

// Products data for chart
let productsData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
];

export { xAxisData, newMembers, transaction, userRows, products, productsData };
