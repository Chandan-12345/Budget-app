import React from "react";
import { FaTrash } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
import styles from "./transactions.module.css";
import { useState } from "react";
import FormExpenses from "../Formexpenses/FormExpenses";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import IncomeModal from "../IncomeModal/IncomeModal";
import { delete_obj, deleteIncome } from "../../redux/actions/main";

const Transactions = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const [IncomemodalShow, setIncomemodalShow] = useState(false);
  const myexpdata = useSelector((state) => state.main.expenseValue);
  const incomeValue = useSelector((state) => state.main.incomeData);
  console.log(incomeValue, "ooooooooooo");
  const incomePop = useSelector((state) => state.main.inco_Modal);

  const handleDelete = (idx) => {
    dispatch(delete_obj(idx));
  };
 const IncomehandleDelete = (index) => {
    dispatch(deleteIncome(index));
  };

  return (
    <>
      <FormExpenses show={modalShow} onHide={() => setModalShow(false)} />
      <div className={`container ${styles.darkBG}`}>
        <div className="row ">
          <div className="btnhome">
            <button className={styles.homebtn}>
              <NavLink to="/">HOME</NavLink>
            </button>
          </div>
          <div className="col-md-6">
            <div className={styles.all_butns}>
              <div>
                <h3 className={styles.tableHead}>Expenses</h3>
              </div>

              <button
                className={styles.btnpopup}
                onClick={() => setModalShow(true)}
              >
                Add Expenses
              </button>
            </div>
            <hr />
            <table
              style={{ borderBottom: "1px solid grey" }}
              className={styles.mainTable}
            >
              <thead className={styles.tab_popup}>
                <tr className="popup_row">
                  <td className={styles.transactionHeading}>Date</td>
                  <td className={styles.transactionHeading}>Amount</td>
                  <td className={styles.transactionHeading}>Description</td>
                  <td className={styles.transactionHeading}>Category</td>
                  <td className={styles.transactionHeading}>Delete</td>
                </tr>
              </thead>

              {
                myexpdata?.map((Expenses, index) => (
                  <tr
                    style={{ borderTop: "1px solid grey" }}
                    className={styles.transactionValue}
                    key={Expenses.id}
                  >
                    <td className={` sdfs ${styles.exp_td}`}> {Expenses.myDate}</td>
                    <td className={styles.exp_td}>{Expenses.myAmount}</td>
                    <td className={styles.exp_td}>{Expenses.myDesc}</td>
                    <td className={styles.exp_td}>{Expenses.myCategory}</td>
                    <td className={styles.exp_td}>
                      <button
                        className={styles.deleteExpense}
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </table>

          </div>

          <div className="col-md-6">
            <div>
              <IncomeModal
                show={IncomemodalShow}
                onHide={() => setIncomemodalShow(false)}
              />
             <div className={styles.all_butns}>
                <h3 className={styles.tableHead}>Income</h3>
                <button
                  className={styles.btnpopup}
                  onClick={() => setIncomemodalShow(true)}
                >
                  Add Income
                </button>
              </div>
              <hr />
              <table
                style={{ borderBottom: "1px solid grey" }}
                className={styles.mainTable}
              >
                <thead className={styles.tab_popup}>
                  <tr className="popup_row">
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Delete</td>
                  </tr>
                </thead>

                {incomeValue?.map((Expenses, index) => (
                  <tr style={{ borderTop: "1px solid grey" }} key={Expenses.id}>
                    <td className={styles.exp_td}> {Expenses.myDate}</td>
                    <td className={styles.exp_td}>{Expenses.myAmount}</td>
                    <td className={styles.exp_td}>{Expenses.myDesc}</td>
                    <td className={styles.exp_td}>{Expenses.myCategory}</td>
                    <td className={styles.exp_td}>
                      <button
                        className={styles.deleteExpense}
                        onClick={() => {
                          IncomehandleDelete(index);
                        }}
                      >
                      <FaTrash />
                        
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              {incomePop && <Modal />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myModal: state.main.myModal,
    myNumber: state.main.myNumber,
  };
};

export default connect(mapStateToProps)(Transactions);
