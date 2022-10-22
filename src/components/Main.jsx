import axios from "axios";
import React, { useEffect, useState } from "react";
import Phone from "../assets/phone.svg";
import Dob from "../assets/dob.svg";
import Location from "../assets/location.svg";
import Mail from "../assets/mail.svg";
import Map from "../assets/map.svg";
import "./main.css";
const Main = () => {
  const [user, setUser] = useState("");
  const getUser = async () => {
    const { data } = await axios("https://randomuser.me/api/");
    setUser(data.results[0]);
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleButton = () => {
    getUser();
  };
  const { location, name, email, phone, picture, dob, registered } = user;
  return (
    <>
      <div className="container  ">
        <div className="img">
          <img src={picture?.large} alt="" />
          <p>
            {name?.title} {name?.first} {name?.last}
          </p>
        </div>
        <hr />
        <div className="d-flex ">
          <img style={{ width: "30px" }} src={Phone} alt="" />
          <p>{phone}</p>
        </div>
        <div className="d-flex ">
          <img style={{ width: "30px" }} src={Mail} alt="" />
          <p className="email">{email}</p>
        </div>
        <div className="d-flex ">
          <img style={{ width: "30px" }} src={Location} alt="" />
          <p>{location?.city}</p>
        </div>
        <div className="d-flex ">
          <img style={{ width: "30px" }} src={Dob} alt="" />
          <p>{new Date(dob?.date).toLocaleString()}</p>
        </div>
        <div className="d-flex ">
          <img style={{ width: "30px" }} src={Map} alt="" />
          <p>{new Date(registered?.date).toLocaleString()}</p>
        </div>
        <button className="btn btn-danger" onClick={handleButton}>
          Random User
        </button>
      </div>
    </>
  );
};

export default Main;
