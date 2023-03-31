import * as t from "../type";

const main = (
  state = {
    myModal: false,
    myNumber: [],
    myTableNumber: [],
    myIncomeValue: [],
    MyPopup: [],
    newCategory: "",

    expenseValue:
      localStorage.getItem("transaction") == null ||
      localStorage.getItem("transaction") == "undefined"
        ? []
        : JSON.parse(localStorage.getItem("transaction")),

    incomeData:
      localStorage.getItem("Incometransaction") == null ||
      localStorage.getItem("Incometransaction") == "undefined"
        ? []
        : JSON.parse(localStorage.getItem("Incometransaction")),

    inco_Modal: false,
  },

  action
) => {
  switch (action.type) {
    case t.MY_POPUP:
      return {
        ...state,
        MyPopup: action.payload,
      };

    case t.MY_NUMBER:

      return {
        ...state,
        myNumber: action.payload,
      };

    case t.MY_MODAL:
      return {
        ...state,
        myModal: action.payload,
      };

    case t.TABLE_VALUE:
      return {
        ...state,
        myTableNumber: action.payload,
      };
    case t.INCOME_TOTAL:
      return {
        ...state,
        myIncomeValue: action.payload,
      };

    case t.EXPENSES_VALUE:
      console.log(state.expenseValue, "localStorage.getItem('expenseValue')");
      console.log(state.expenseValue, "ouiopjophj");
      for (var k in action.payload) {
        state.expenseValue.push(action.payload[k]);
      }
      let mydata = state.expenseValue;
      localStorage.setItem("transaction", JSON.stringify(mydata));
      return {
        ...state,
        expenseValue: mydata,
        newCategory: action.category,
      };

    case t.DELETE_OBJ:
      localStorage.setItem(
        "transaction",
        JSON.stringify(
          ...state.expenseValue.slice(0, action.payload),
          ...state.expenseValue.slice(action.payload + 1)
        )
      );
      return {
        ...state,

        expenseValue: [
          ...state.expenseValue.slice(0, action.payload),
          ...state.expenseValue.slice(action.payload + 1),
        ],
      };

    case t.INCOME_VALUE:
      console.log(action.payload, "uyyyyyyyyyyyyyyy");
      for (var i in action.payload) {
        state.incomeData.push(action.payload[i]);
      }
      let mydata1 = state.incomeData;
      localStorage.setItem("Incometransaction", JSON.stringify(mydata1));

      return {
        ...state,
        incomeData: mydata1,
      };

    case t.DELETE_INCOME:
      localStorage.setItem(
        "Incometransaction",
        JSON.stringify(
          ...state.incomeData.slice(0, action.payload),
          ...state.incomeData.slice(action.payload + 1)
        )
      );
      return {
        ...state,
        incomeData: [
          ...state.incomeData.slice(0, action.payload),
          ...state.incomeData.slice(action.payload + 1),
        ],
      };

    case t.INCOME_MODAL:
      return {
        ...state,

        inco_Modal: action.payload,
      };

    default:
      return state;
  }
};

export default main;
