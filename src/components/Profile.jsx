import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.usuario.user);
  console.log(user);
  return (
    <div className='container'>
      <div className="card text-center mt-5">
        <div className="card-header">
          <img src={user.photoURL} alt="photo Profile" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
