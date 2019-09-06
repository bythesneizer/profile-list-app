import React from "react";
import Profile from "../Profile/Profile.js";
import "./Profiles.css";

const Profiles = props => {
  return (
    <div className="profileList">
      {props.profiles.map(profile => {
        return <Profile profile={profile} key={profile.name.first} />;
      })}
    </div>
  );
};

export default Profiles;
