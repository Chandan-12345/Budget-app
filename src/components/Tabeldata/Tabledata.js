import React from "react";
import { useState, useEffect } from "react";
import { myTableNumber } from "../../redux/actions/main";
import { IncomePlannedData } from "../../redux/actions/main";
import { useDispatch, useSelector } from "react-redux";
import styles from "./tabledata.module.css";

const Tabledata = () => {
  const store = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const expData = store.expenseValue;
  console.log(store.newCategory, "newCategory-----------------", expData);
  const sum = expData?.reduce((accumulator, object) => {
    return accumulator + parseInt(object.myAmount);
  }, 0);

  const IncData = store.incomeData;
  console.log(IncData, "ppppppppppp");

  const totalIncomeValue = IncData?.reduce((accumulator, obj) => {
    return accumulator + parseInt(obj.myAmount);
  }, 0);

  // const IncomeVal = [];

  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [value10, setValue10] = useState(0);
  const [value11, setValue11] = useState(0);
  const [value12, setValue12] = useState(0);
  const [value13, setValue13] = useState(0);

  const [IncomeValue, setIncomeValue] = useState(0);
  const [IncomeValue1, setIncomeValue1] = useState(0);
  const [IncomeValue2, setIncomeValue2] = useState(0);
  const [IncomeValue3, setIncomeValue3] = useState(0);
  const [IncomeValue4, setIncomeValue4] = useState(0);
  const [IncomeValue5, setIncomeValue5] = useState(0);

  const IncomeChange = (e) => {
    if (e.target.value === "") {
      setIncomeValue(0);
      localStorage.setItem("IncomeValue", 0);
    } else {
      setIncomeValue(e.target.value);
      localStorage.setItem("IncomeValue", e.target.value);
    }
  };

  const IncomeChange1 = (e) => {
    if (e.target.value === "") {
      setIncomeValue1(0);
      localStorage.setItem("IncomeValue1", 0);
    } else {
      setIncomeValue1(e.target.value);
      localStorage.setItem("IncomeValue1", e.target.value);
    }
  };

  const IncomeChange2 = (e) => {
    if (e.target.value === "") {
      setIncomeValue2(0);
      localStorage.setItem("IncomeValue2", 0);
    } else {
      setIncomeValue2(e.target.value);
      localStorage.setItem("IncomeValue2", e.target.value);
    }
  };

  const IncomeChange3 = (e) => {
    if (e.target.value === "") {
      setIncomeValue3(0);
      localStorage.setItem("IncomeValue3", 0);
    } else {
      setIncomeValue3(e.target.value);
      localStorage.setItem("IncomeValue3", e.target.value);
    }
  };

  const IncomeChange4 = (e) => {
    if (e.target.value === "") {
      setIncomeValue4(0);
      localStorage.setItem("IncomeValue4", 0);
    } else {
      setIncomeValue4(e.target.value);
      localStorage.setItem("IncomeValue4", e.target.value);
    }
  };

  const IncomeChange5 = (e) => {
    if (e.target.value === "") {
      setIncomeValue5(0);
      localStorage.setItem("IncomeValue5", 0);
    } else {
      setIncomeValue5(e.target.value);
      localStorage.setItem("IncomeValue5", e.target.value);
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      localStorage.setItem("inputValue", 0);
    } else {
      setValue(e.target.value);
      localStorage.setItem("inputValue", e.target.value);
    }
  };

  const handleChange1 = (e) => {
    if (e.target.value === "") {
      setValue1(0);
      localStorage.setItem("inputValue1", 0);
    } else {
      setValue1(e.target.value);
      localStorage.setItem("inputValue1", e.target.value);
    }
  };

  const handleChange2 = (e) => {
    if (e.target.value === "") {
      setValue2(0);
      localStorage.setItem("inputValue2", 0);
    } else {
      setValue2(e.target.value);
      localStorage.setItem("inputValue2", e.target.value);
    }
  };

  const handleChange3 = (e) => {
    if (e.target.value === "") {
      setValue3(0);
      localStorage.setItem("inputValue3", 0);
    } else {
      setValue3(e.target.value);
      localStorage.setItem("inputValue3", e.target.value);
    }
  };

  const handleChange4 = (e) => {
    if (e.target.value === "") {
      setValue4(0);
      localStorage.setItem("inputValue4", 0);
    } else {
      setValue4(e.target.value);
      localStorage.setItem("inputValue4", e.target.value);
    }
  };

  const handleChange5 = (e) => {
    if (e.target.value === "") {
      setValue5(0);
      localStorage.setItem("inputValue5", 0);
    } else {
      setValue5(e.target.value);
      localStorage.setItem("inputValue5", e.target.value);
    }
  };

  const handleChange6 = (e) => {
    if (e.target.value === "") {
      setValue6(0);
      localStorage.setItem("inputValue6", 0);
    } else {
      setValue6(e.target.value);
      localStorage.setItem("inputValue6", e.target.value);
    }
  };

  const handleChange7 = (e) => {
    if (e.target.value === "") {
      setValue7(0);
      localStorage.setItem("inputValue7", 0);
    } else {
      setValue7(e.target.value);
      localStorage.setItem("inputValue7", e.target.value);
    }
  };

  const handleChange8 = (e) => {
    if (e.target.value === "") {
      setValue8(0);
      localStorage.setItem("inputValue8", 0);
    } else {
      setValue8(e.target.value);
      localStorage.setItem("inputValue8", e.target.value);
    }
  };

  const handleChange9 = (e) => {
    if (e.target.value === "") {
      setValue9(0);
      localStorage.setItem("inputValue9", 0);
    } else {
      setValue9(e.target.value);
      localStorage.setItem("inputValue9", e.target.value);
    }
  };

  const handleChange10 = (e) => {
    if (e.target.value === "") {
      setValue10(0);
      localStorage.setItem("inputValue10", 0);
    } else {
      setValue10(e.target.value);
      localStorage.setItem("inputValue10", e.target.value);
    }
  };

  const handleChange11 = (e) => {
    if (e.target.value === "") {
      setValue11(0);
      localStorage.setItem("inputValue11", 0);
    } else {
      setValue11(e.target.value);
      localStorage.setItem("inputValue11", e.target.value);
    }
  };

  const handleChange12 = (e) => {
    if (e.target.value === "") {
      setValue12(0);
      localStorage.setItem("inputValue12", 0);
    } else {
      setValue12(e.target.value);
      localStorage.setItem("inputValue12", e.target.value);
    }
  };

  const handleChange13 = (e) => {
    if (e.target.value === "") {
      setValue13(0);
      localStorage.setItem("inputValue13", 0);
    } else {
      setValue13(e.target.value);
      localStorage.setItem("inputValue13", e.target.value);
    }
  };

  useEffect(() => {
    setValue(localStorage.getItem("inputValue") || 0);
    setValue1(localStorage.getItem("inputValue1") || 0);
    setValue2(localStorage.getItem("inputValue2") || 0);
    setValue3(localStorage.getItem("inputValue3") || 0);
    setValue4(localStorage.getItem("inputValue4") || 0);
    setValue5(localStorage.getItem("inputValue5") || 0);
    setValue6(localStorage.getItem("inputValue6") || 0);
    setValue7(localStorage.getItem("inputValue7") || 0);
    setValue8(localStorage.getItem("inputValue8") || 0);
    setValue9(localStorage.getItem("inputValue9") || 0);
    setValue10(localStorage.getItem("inputValue10") || 0);
    setValue11(localStorage.getItem("inputValue11") || 0);
    setValue12(localStorage.getItem("inputValue12") || 0);
    setValue13(localStorage.getItem("inputValue13") || 0);
  }, []);

  useEffect(() => {
    setIncomeValue(localStorage.getItem("IncomeValue") || 0);
    setIncomeValue1(localStorage.getItem("IncomeValue1") || 0);
    setIncomeValue2(localStorage.getItem("IncomeValue2") || 0);
    setIncomeValue3(localStorage.getItem("IncomeValue3") || 0);
    setIncomeValue4(localStorage.getItem("IncomeValue4") || 0);
    setIncomeValue5(localStorage.getItem("IncomeValue5") || 0);
  }, []);

  const [myValues, setMyValues] = useState(0);

  let myvalues =
    parseInt(value) +
    parseInt(value1) +
    parseInt(value2) +
    parseInt(value3) +
    parseInt(value4) +
    parseInt(value5) +
    parseInt(value6) +
    parseInt(value7) +
    parseInt(value8) +
    parseInt(value9) +
    parseInt(value10) +
    parseInt(value11) +
    parseInt(value12) +
    parseInt(value13);

  useEffect(() => {
    console.log(value1);
    let newMyValues =
      parseInt(value) +
      parseInt(value1) +
      parseInt(value2) +
      parseInt(value3) +
      parseInt(value4) +
      parseInt(value5) +
      parseInt(value6) +
      parseInt(value7) +
      parseInt(value8) +
      parseInt(value9) +
      parseInt(value10) +
      parseInt(value11) +
      parseInt(value12) +
      parseInt(value13);
    console.log("hellllllllo", newMyValues);
    setMyValues(newMyValues);
  }, [
    value,
    value1,
    value2,
    value3,
    value4,
    value5,
    value6,
    value7,
    value8,
    value9,
    value10,
    value11,
    value12,
    value13,
  ]);

  let myValue2 =
    parseInt(IncomeValue) +
    parseInt(IncomeValue1) +
    parseInt(IncomeValue2) +
    parseInt(IncomeValue3) +
    parseInt(IncomeValue4) +
    parseInt(IncomeValue5);

  useEffect(() => {
    dispatch(myTableNumber(myvalues));
  }, [myvalues]);

  useEffect(() => {
    dispatch(IncomePlannedData(myValue2));
  }, [myValue2]);

  const simpleArraySum = (category) => {
    let sum1 = 0;
    expData?.map((items) => {
      if (items.myCategory == category) {
        console.log(items.myCategory == "Food", "items.myCategory == 'Food'");
        sum1 += parseInt(items.myAmount);
      }
      return 0;
    });
    return sum1;
  };

  const simpleArrayDifference = (expenseDataValue, mycategory) => {
    let difference = 0;
    expData?.forEach((item) => {
      if (item.myCategory === mycategory) {
        difference += parseInt(item.myAmount);
      }
    });

    return parseInt(expenseDataValue) - parseInt(difference);
  };

  const IncomeArraySum = (category) => {
    let IncomeSum = 0;
    IncData?.map((dataItems) => {
      if (dataItems.myCategory == category) {
        IncomeSum += parseInt(dataItems.myAmount);
      }
      return 0;
    });
    return IncomeSum;
  };

  const IncomeArrDifference = (IncomeValue, IncomeCategory) => {
    let IncomeDifference = 0;
    IncData?.map((incomeItem) => {
      if (incomeItem.myCategory == IncomeCategory) {
        IncomeDifference += parseInt(incomeItem.myAmount);
      }
      return 0;
    });

    return IncomeValue - IncomeDifference;
  };

  const Expenses = [
    {
      Totals: "Food",
      Planned: (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={styles.arrField}
        />
      ),

      Actual: simpleArraySum("Food"),

      Diff: simpleArrayDifference(value, "Food"),
    },

    {
      Totals: "Gifts",
      Planned: (
        <input
          type="text"
          value={value1}
          onChange={handleChange1}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Gifts"),

      Diff: simpleArrayDifference(value1, "Gifts"),
    },

    {
      Totals: "Health/Medical",
      Planned: (
        <input
          type="text"
          value={value2}
          onChange={handleChange2}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Health/Medical"),

      Diff: simpleArrayDifference(value2, "Health/Medical"),
    },
    {
      Totals: "Home",
      Planned: (
        <input
          type="text"
          value={value3}
          onChange={handleChange3}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Home"),
      Diff: simpleArrayDifference(value3, "Home"),
    },
    {
      Totals: "Transportation",
      Planned: (
        <input
          type="text"
          value={value4}
          onChange={handleChange4}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Transportation"),
      Diff: simpleArrayDifference(value4, "Transportation"),
    },
    {
      Totals: "Personal",
      Planned: (
        <input
          type="text"
          value={value5}
          onChange={handleChange5}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Personal"),
      Diff: simpleArrayDifference(value5, "Personal"),
    },
    {
      Totals: "Pets",
      Planned: (
        <input
          type="text"
          value={value6}
          onChange={handleChange6}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Pets"),
      Diff: simpleArrayDifference(value6, "Pets"),
    },
    {
      Totals: "Utilities",
      Planned: (
        <input
          type="text"
          value={value7}
          onChange={handleChange7}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Utilities"),
      Diff: simpleArrayDifference(value6, "Utilities"),
    },
    {
      Totals: "Travel",
      Planned: (
        <input
          type="text"
          value={value8}
          onChange={handleChange8}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Travel"),
      Diff: simpleArrayDifference(value8, "Travel"),
    },
    {
      Totals: "Debt",
      Planned: (
        <input
          type="text"
          value={value9}
          onChange={handleChange9}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Debt"),
      Diff: simpleArrayDifference(value9, "Debt"),
    },
    {
      Totals: "Other",
      Planned: (
        <input
          type="text"
          value={value10}
          onChange={handleChange10}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Other"),
      Diff: simpleArrayDifference(value10, "Other"),
    },
    {
      Totals: "Custom Category 1",
      Planned: (
        <input
          type="text"
          value={value11}
          onChange={handleChange11}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Custom Category 1"),
      Diff: simpleArrayDifference(value11, "Custom Category 1"),
    },
    {
      Totals: "Custom Category 2",
      Planned: (
        <input
          type="text"
          value={value12}
          onChange={handleChange12}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Custom Category 2"),
      Diff: simpleArrayDifference(value12, "Custom Category 2"),
    },
    {
      Totals: "Custom Category 3",
      Planned: (
        <input
          type="text"
          value={value13}
          onChange={handleChange13}
          className={styles.arrField}
        />
      ),
      Actual: simpleArraySum("Custom Category 3"),
      Diff: simpleArrayDifference(value13, "Custom Category 3"),
    },
  ];

  // Income Arrrrrraaaaaayyyyyyy
  const Income = [
    {
      Totals: "Savings",
      Planned: (
        <input
          type="text"
          value={IncomeValue}
          onChange={IncomeChange}
          className={styles.arrField}
        />
      ),
      Actual: IncomeArraySum("Savings"),
      Diff: IncomeArrDifference(IncomeValue, "Savings"),
    },
    {
      Totals: "Paycheck",
      Planned: (
        <input
          type="text"
          value={IncomeValue1}
          onChange={IncomeChange1}
          className={styles.arrField}
        />
      ),
      Actual: IncomeArraySum("Paycheck"),
      Diff: IncomeArrDifference(IncomeValue1, "Paycheck"),
    },
    {
      Totals: "Bonus",
      Planned: (
        <input
          type="text"
          value={IncomeValue2}
          onChange={IncomeChange2}
          className={styles.arrField}
        />
      ),
      Actual: IncomeArraySum("Bonus"),
      Diff: IncomeArrDifference(IncomeValue2, "Bonus"),
    },
    {
      Totals: "Interest",
      Planned: (
        <input
          type="text"
          value={IncomeValue3}
          onChange={IncomeChange3}
          className={styles.arrField}
        />
      ),
      Actual: IncomeArraySum("Interest"),
      Diff: IncomeArrDifference(IncomeValue3, "Interest"),
    },
    {
      Totals: "Other",
      Planned: (
        <input
          type="text"
          value={IncomeValue4}
          onChange={IncomeChange4}
          className={styles.arrField}
        />
      ),
      Actual: IncomeArraySum("Other"),
      Diff: IncomeArrDifference(IncomeValue4, "Other"),
    },
    {
      Totals: "Custom Category",
      Planned: (
        <input
          type="text"
          value={IncomeValue5}
          onChange={IncomeChange5}
          className={styles.arrField}
        />
      ),
      Actual: IncomeArraySum("Custom Category"),
      Diff: IncomeArrDifference(IncomeValue5, "Custom Category"),
    },
  ];

  if (isNaN(myvalues)) myvalues = 0;
  let ExpenseDifference = myvalues - sum;

  if (isNaN(myValue2)) myValue2 = 0;
  let IncomeDiff = myValue2 - totalIncomeValue;

  return (
    <>
      <div className={`container ${styles.main_content}`}>
        <div className="row">
          <div className="col-md-6">
            <h3 className={styles.tableHead}>Expenses</h3>
            <hr />
            <table border="" className={styles.mainTable}>
              <thead>
                <tr>
                  <td></td>
                  <td className={styles.tablehead}>Planned</td>
                  <td className={styles.tablehead}>Actual</td>
                  <td className={styles.tablehead}>Diff</td>
                </tr>
              </thead>
              <tr className={styles.totalValue}>
                <td>Total</td>
                <td>$ {myValues}</td>

                <td>{sum}</td>
                <td>{ExpenseDifference} </td>
              </tr>
              {Expenses.map((rrr, index) => (
                <tr key={rrr.id}>
                  <td
                    className={styles.bgcolor}
                    style={{ borderBottom: "1px solid #fff" }}
                  >
                    {rrr.Totals}
                  </td>
                  <td>{rrr.Planned}</td>
                  <td>{rrr.Actual}</td>
                  <td>{rrr.Diff}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="col-md-6">
            <h3 className={styles.tableHead}>Income</h3>
            <hr />
            <table className={styles.mainTable}>
              <thead>
                <tr>
                  <td></td>
                  <td className={styles.tablehead}> Planned</td>
                  <td className={styles.tablehead}>Actual</td>
                  <td className={styles.tablehead}>Diff</td>
                </tr>
              </thead>
              <tr className={styles.totalValue}>
                <td>Total</td>
                <td>
                  ${" "}
                  {parseInt(IncomeValue) +
                    parseInt(IncomeValue1) +
                    parseInt(IncomeValue2) +
                    parseInt(IncomeValue3)}
                </td>
                <td>{totalIncomeValue}</td>
                <td>{IncomeDiff}</td>
              </tr>

              {Income.map((Expenses, index) => (
                <tr key={Expenses.id}>
                  <td
                    className={styles.bgcolor}
                    style={{ borderBottom: "1px solid #fff" }}
                  >
                    {Expenses.Totals}
                  </td>
                  <td>{Expenses.Planned}</td>
                  <td>{Expenses.Actual}</td>
                  <td>{Expenses.Diff}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabledata;
