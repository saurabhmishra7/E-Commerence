import React, { Component } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import useAxios from "../customHook/hooks";

function Home(props) {

  const { navItems } = props;
  const { GETPRODUCT } = useAxios();
   const getProducts = async (path) => {
    const response = await GETPRODUCT(path);
    return Object.values(response.data);
  };
 
    return (
      <div>
        <Announcement />
        <Navbar navItems={navItems} />
        <Slider />
        <Categories />
        <Products getProducts={getProducts}/>
        <Newsletter />
        <Footer />
      </div>
    );
  
}

export default Home;
