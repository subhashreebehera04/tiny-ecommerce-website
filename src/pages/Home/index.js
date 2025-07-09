import { useState } from "react";
import HomeBanner from "../../components/HomeBanner";
import ProductDisplay from "../../components/productDisplay/productDisplay";
const Home =() =>{
    const category = "All";
    return(
        
        <>
        <HomeBanner/>
        <ProductDisplay category={category}/>
        </>
    )
}

export default Home;