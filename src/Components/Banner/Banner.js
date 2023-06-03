import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          {/*
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Notes and Textbooks">Notes and Textbooks</option>
              <option value="Bicycles">Bicycles</option>
              <option value="Electronic Gadgets">Electronic Gadgets</option>
              <option value="Mattresses">Mattresses</option>
              <option value="Clothing">Clothing</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>
            */}
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Notes and Textbooks")} >Notes and Textbooks</span>
            <span onClick={()=>setCategory("Bicycles")} >Bicycles</span>
            <span onClick={()=>setCategory("Electronic Gadgets")} >Electronic Gadgets</span>
            <span onClick={()=>setCategory("Mattresses")} >Mattresses</span>
            <span onClick={()=>setCategory("Clothing")} >Clothing</span>
            <span onClick={()=>setCategory("Miscellaneous")} >Miscellaneous</span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
