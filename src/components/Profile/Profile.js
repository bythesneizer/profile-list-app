import React from "react";
import "./Profile.css";

const Profile = props => {
  let firstName = props.profile.name.first;

  return (
    <div className="card">
      <img
        src={props.profile.picture.large}
        alt={props.profile.name.first}
        style={{ width: "100%" }}
      ></img>
      <h1>{firstName}</h1>
      <p>{firstName}</p>
    </div>
  );
};

export default Profile;
