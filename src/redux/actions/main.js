// import { legacy_createStore } from "redux";
import * as t from "../type";

export const myModal = (homeValue) => (dispatch) => {
  dispatch({ type: t.MY_MODAL, payload: homeValue });
};

export const incomemodal = (incMOdal) => (dispatch) => {
  dispatch({ type: t.INCOME_MODAL, payload: incMOdal });
};

export const myNumber = (myNumber) => (dispatch) => {
  dispatch({ type: t.MY_NUMBER, payload: myNumber });
};

export const myTableNumber = (TableValue) => (dispatch) => {
  dispatch({ type: t.TABLE_VALUE, payload: TableValue });
};

export const IncomePlannedData = (incometotal) => (dispatch) => {
  dispatch({ type: t.INCOME_TOTAL, payload: incometotal });
};

export const expenseVal = (exp_data) => (dispatch) => {
  console.log(exp_data, "newCategorynewCategory");
  dispatch({
    type: t.EXPENSES_VALUE,
    payload: exp_data,
    category: exp_data[0].myCategory,
  });
};

export const income_data = (inc_data) => (dispatch) => {
  console.log(inc_data, "ewrfew");
  dispatch({ type: t.INCOME_VALUE, payload: inc_data });
};

export const delete_obj = (obj_id) => (dispatch) => {
  dispatch({ type: t.DELETE_OBJ, payload: obj_id });
};

export const deleteIncome = (income_id) => (dispatch) => {
  dispatch({ type: t.DELETE_INCOME, payload: income_id });
};
