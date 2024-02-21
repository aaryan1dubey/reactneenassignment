import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import classes from "./FormModal.module.css";

const DeleteUser = (props) => {
  const onDeleteHandler = (e) => {
    e.preventDefault();
    props.onConfirmDeleteClicked(props.id);
  };

  const onCancelHandler = () => {
    props.onDeleteClicked(false);
  };

  return (
    <>
      <div className={classes["modal-backdrop"]}>
        <div className={classes["modal-form"]}>
          <div className={classes.container}>
            <div className={classes["modal-header"]}>
              <span className={classes["modal-title"]}>Delete User</span>
              <span className={classes.close} onClick={onCancelHandler}>
                <CloseOutlined />
              </span>
            </div>
            <hr />
            <div className={classes["modal-content"]}>
              <h3>Are you sure you want to delete this user? </h3>
            </div>
            <hr />
            <div className={classes.row}>
              <button
                type="button"
                onClick={onDeleteHandler}
                className={`${classes.btn} ${classes["btn-danger"]} ${classes["btn-right"]}`}
              >
                <span>Delete</span>
              </button>
              <button
                type="button"
                onClick={onCancelHandler}
                className={`${classes.btn} ${classes["btn-right"]}`}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
