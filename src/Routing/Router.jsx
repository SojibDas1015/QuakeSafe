import { createBrowserRouter } from "react-router";
import Navbar from "../Page/Navbar";
import Home from "../Page/Home";
import OurService from "../Component/OurService";
import ServiceHome from "../Component/ServiceHome";
import ServiceD from "../Component/ServiceD";
import Area from "../Component/Area";
import EarthQueke from "../Page/EarthQueke";
import ProjectNav from "../Component/ProjectNav";
import ContactUs from "../Component/ContactUs";
import Login from "../Component/Login";
import ProductsCn from "../Component/ProductsCn";
import AddcardProduct from "../Component/AddcardProduct";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <ServiceHome></ServiceHome>
            },
            {
                path: "/services/:servicedetails",
                loader: ({params})=> {
                    return fetch("/service.json").then((res)=> res.json()).then((data)=> data.find( d => d.id===parseInt(params.servicedetails)))
                },
                element: <ServiceD></ServiceD>
            },
            {
                path: "/area",
                element: <Area></Area>
            },
            {
                path: "/earthqueke",
                element: <EarthQueke></EarthQueke>
            },
            {
                path: "/project",
                element: <ProjectNav></ProjectNav>
            },
            {
                path: "/products",
                element: <ProductsCn></ProductsCn>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/products/:productid",
                loader: ({params}) =>{
                    return fetch("/product.json").then((res)=> res.json()).then((data)=> data.find(p => p.id === parseInt(params.productid)))
                },
                element: <AddcardProduct></AddcardProduct>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])