import React from "react";
import {useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./formexpenses.module.css";
import { expenseVal } from "../../redux/actions/main";
import { Modal } from "react-bootstrap";

const FormExpenses = (props) => {
  const dispatch = useDispatch();
  const [myVal, setmyVal] = useState({
    dateName: "",
    amountName: "",
    descName: "",
    categoriesName: "",
  });

  const isValid = Boolean(
    myVal.dateName && myVal.amountName && myVal.descName && myVal.categoriesName
  );
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setmyVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addExpeense = () => {
    let myArrData = [
      {
        myDate: myVal.dateName,
        myAmount: myVal.amountName,
        myDesc: myVal.descName,
        myCategory: myVal.categoriesName,
      },
    ];
    console.log("chekc");
    dispatch(expenseVal(myArrData));
    props.onHide();
  };
  const categories = [
    { id: 0, value: "Choose Category---" },
    { id: 0, value: "Food" },
    { id: 1, value: "Gifts" },
    { id: 2, value: "Health/Medical" },
    { id: 3, value: "Home" },
    { id: 4, value: "Transportation" },
    { id: 5, value: "Personal" },
    { id: 6, value: "Pets" },
    { id: 7, value: "Utilities" },
    { id: 8, value: "Travel" },
    { id: 9, value: "Debt" },
    { id: 10, value: "Transportation" },
    { id: 11, value: "Other" },
    { id: 12, value: "Custom Category 1" },
    { id: 13, value: "Custom Category 2" },
    { id: 14, value: "Custom Category 3" },
  ];

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>ADD EXPENSES</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <div className={styles.dateinput}>
              <label for="dateId">Date:</label>
              <input
                type="date"
                id="dateId"
                name="dateName"
                onChange={inputHandler}
                className={styles.arrField}
              />
            </div>
            <br />
            <div className={styles.dateinput}>
              <label for="amountId">Amount :</label>
              <input
                type="number"
                id="amountId"
                name="amountName"
                onChange={inputHandler}
                className={styles.arrField}
              />
            </div>
            <br />
           <div className={styles.dateinput}>
              <label for="descId">Description :</label>
              <input
                id="descId"
                name="descName"
                type="text"
                onChange={inputHandler}
                className={styles.arrField}
              />
            </div>
            <br />
            <div className={styles.dateinput}>
              <label for="country">Category:</label>
             <select
                id="idddd"
                name="categoriesName"
                onChange={inputHandler}
              
                className={styles.arrField}
              >
                {categories.map((option, index) => (
                  <option key={index}>{option.value}</option>
                ))}
              </select>
            </div>
            <br />
            <div className={styles.popupbtns}>
              <div>
                <button
                  className={styles.addButton}
                  onClick={() => {
                    addExpeense();
                  }}
                  disabled={!isValid}
                  title={
                    isValid
                      ? "Create your post"
                      : "All fields must be filled out."
                  }
                >
                  ADD
                </button>
              </div>

              <div>
                 </div>
              <div></div>
              <button className={styles.closeButton} onClick={props.onHide}>
                CLOSE
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormExpenses;
