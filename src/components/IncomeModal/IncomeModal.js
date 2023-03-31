import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { income_data } from "../../redux/actions/main";
import { Modal } from "react-bootstrap";
const IncomeModal = (props) => {
  const dispatch = useDispatch();
  const [myVal, setmyVal] = useState({
    Inc_dateName: "",
    Inc_amountName: "",
    Inc_descName: "",
    Inc_categoriesName: "",
  });

  const isIncomeValid = Boolean(
    myVal.Inc_dateName &&
      myVal.Inc_amountName &&
      myVal.Inc_descName &&
      myVal.Inc_categoriesName
  );

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setmyVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addExpeense = () => {
    let myIncData = [
      {
        myDate: myVal.Inc_dateName,
        myAmount: myVal.Inc_amountName,
        myDesc: myVal.Inc_descName,
        myCategory: myVal.Inc_categoriesName,
      },
    ];
    console.log(myIncData, "5555555");
    dispatch(income_data(myIncData));
    props.onHide();
  };

  const Incomecategories = [
    { id: 0, value: "Choose Category---" },
    { id: 0, value: "Savings" },
    { id: 1, value: "Paycheck" },
    { id: 2, value: "Bonus" },
    { id: 3, value: "Interest" },
    { id: 4, value: "Other" },
    { id: 5, value: "Custom Category" },
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
            <h1>ADD Income</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <div className={styles.dateinput}>
              <label for="dateId">Date:</label>
              <input
                type="date"
                id="dateId"
                name="Inc_dateName"
                onChange={inputHandler}
                className={styles.arrField}
              />
            </div>
            <br />
            <div className={styles.dateinput}>
              <label for="amountId">Amount :</label>
              <input
                type="text"
                id="amountId"
                name="Inc_amountName"
                onChange={inputHandler}
                className={styles.arrField}
              />
            </div>
            <br />

            <div className={styles.dateinput}>
              <label for="descId">Description :</label>
              <input
                id="descId"
                name="Inc_descName"
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
                name="Inc_categoriesName"
                onChange={inputHandler}
                className={styles.arrField}
              >
                {Incomecategories.map((option, index) => (
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
                  disabled={!isIncomeValid}
                  title={
                    isIncomeValid
                      ? "Create your post"
                      : "All fields must be filled out."
                  }
                >
                  ADD
                </button>
              </div>
             <div>
                <button className={styles.closeButton} onClick={props.onHide}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default IncomeModal;
