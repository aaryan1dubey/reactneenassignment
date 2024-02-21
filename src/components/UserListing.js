import React, { useState } from "react";
import { usersData } from "../JsonData/UserData";
import classes from "../components/Card/Card.module.css";
import UserCard from "./Card/UserCard";

const UserListing = () => {
  const [peopleData, setPeopleData] = useState(usersData);
  const dropPerson = (id) => {
    setPeopleData(peopleData.filter((item) => item.id !== +id));
  };

  return (
    <>
      <div className={classes.row}>
        {peopleData.length === 0 ? (
          <>
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </>
        ) : (
          peopleData.map((usersData) => (
            <div key={usersData.id} className={classes.column}>
              <UserCard usersData={usersData} dropPerson={dropPerson} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UserListing;
