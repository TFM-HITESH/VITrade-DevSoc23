import React, { useContext,useState } from "react";
import { useNavigate } from "react-router";
import { AllPostContext } from "../../contextStore/AllPostContext";
import { PostContext } from "../../contextStore/PostContext";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import SearchIcon from "../../assets/SearchIcon"
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextStore/AuthContext";
import { Firebase } from "../../firebase/config";
import Search from "../Search/Search";

function Header() {
  const{allPost}=useContext(AllPostContext)
  const{setPostContent}=useContext(PostContext)
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleSelectedSearch=(value)=>{
       setPostContent(value)
       navigate("/view")

  }
  const handleEmptyClick=()=>{
     alert("No items found.., please search by product name");
  }
  const { user } = useContext(AuthContext);
  
  const logoutHandler = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        
        {/*}
        <div className="brandName">
          {<OlxLogo></OlxLogo>}
        </div>
        */}

        {/*
        <div className="placeSearch">
          <input type="text" 
          placeholder="Find Bicycles, Books, Electronic Gadgets and more..."
          value={wordEntered}
          onChange={handleFilter}
        />{filteredData.length === 0 ? (
          <div onClick={handleEmptyClick}> <SearchIcon /> </div>
         ) : (
           <div id="clearBtn"  onClick={clearInput} > <Arrow></Arrow></div>
         )}
          {filteredData.length !== 0 && (
        <div className="dataResult-header">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem-header" onClick={()=>handleSelectedSearch(value)}>
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
        </div>

        */}

        <div className="productSearch">
          {<Search />}
        </div>
        {/*
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        */}

        <div className="slogan">
          <h3>We trade at VITrade !</h3>
        </div>
        

        <div className='userInfo'>
          <div className="loginPage">
            <div className="loginMsg">
              <p>Logged in as :</p>
            </div> 
            {user ? ( 
              user.displayName
            ) : (
              <Link to="/login">
                <span>Login</span>
              </Link>
            )}
            <hr />
          </div>
          <div className="Log">
          {user && (
            <span onClick={logoutHandler} className="logout-span">
              Logout
            </span>
          )}
          </div>
        </div>
        
        <Link to="/create">
          {" "}
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
