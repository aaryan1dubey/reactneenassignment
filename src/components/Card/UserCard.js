import React, { useState } from "react";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import CardIconText from "./CardIconText";
import CardActions from "./CardActions";
import FormModal from "../Form/EditUser";
import DeleteModal from "../Form/DeleteUser";
import classes from "./Card.module.css";

const UserCard = (props) => {
  const [name, setName] = useState(props.usersData.name);
  const [email, setEmail] = useState(props.usersData.email);
  const [mobile, setPhone] = useState(props.usersData.mobile);
  const [website, setWebsite] = useState(props.usersData.website);

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const onEditClicked = (value) => {
    setIsEditClicked(value);
  };

  const onDeleteClicked = (value) => {
    setIsDeleteClicked(value);
  };

  const onConfirmDeleteClicked = (id) => {
    setIsDeleteClicked(false);
    props.dropPerson(id);
  };

  const onOkClicked = (newData) => {
    const [newname, newemail, newphone, newwebsite] = [...newData];

    if (name !== newname) {
      setName(newname);
    }
    if (email !== newemail) {
      setEmail(newemail);
    }
    if (mobile !== newphone) {
      setPhone(newphone);
    }
    if (website !== newwebsite) {
      setWebsite(newwebsite);
    }
    setIsEditClicked(false);
  };

  return (
    <>
      {isDeleteClicked && (
        <DeleteModal
          id={props.usersData.id}
          onConfirmDeleteClicked={onConfirmDeleteClicked}
          onDeleteClicked={onDeleteClicked}
        />
      )}
      {isEditClicked && (
        <FormModal
          name={name}
          email={email}
          mobile={mobile}
          website={website}
          onEditClicked={onEditClicked}
          onOkClicked={onOkClicked}
        />
      )}
      <div className={classes.card}>
        <div className={classes["card-header"]}>
          <img
            src={props.usersData.image}
            alt="Avatar"
            width="200px"
            height="200px"
          ></img>
        </div>
        <div className={classes["card-body"]}>
          <h3>{name}</h3>
          <CardIconText icon={<MailOutlined />} text={email} />
          <CardIconText icon={<PhoneOutlined />} text={mobile} />
          <CardIconText icon={<GlobalOutlined />} text={website} />
        </div>
        <div className={classes["card-actions"]}>
          <CardActions
            onEditClicked={onEditClicked}
            onDeleteClicked={onDeleteClicked}
          />
        </div>
      </div>
    </>
  );
};

export default UserCard;
