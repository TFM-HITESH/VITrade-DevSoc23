import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { Firebase } from "../../firebase/config";
import { AuthContext } from "../../contextStore/AuthContext";
import { useNavigate } from "react-router";
import GoLoading from "../Loading/GoLoading";
const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();
  let [loading,setLoading]=useState(false);
  const handleSubmit = () => {
    setLoading(true);
    let date = new Date().toDateString();
    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection("products")
            .add({
              name,
              category,
              price,
              description,
              url,
              userId: user.uid,
              createdAt: date,
            })
            .then(() => {
              navigate("/");
            });
        });
      });
  };
  return (
    <Fragment>
      <Header />
    { loading && <GoLoading/> }
      <div className="centerDiv">
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Category:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        > <option >Select Category</option>
          <option value="Bicycles">Bicycles</option>
          <option value="Notes and Textbooks">Notes and Textbooks</option>
          <option value="Electronic Gadgets">Electronic Gadgets</option>
          <option value="Mattresses">Mattresses</option>
          <option value="Clothing">Clothing</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        <br />
        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img>

        <br />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}>
          upload and Submit
        </button>
      </div> 
    </Fragment>
  );
};

export default Create;
