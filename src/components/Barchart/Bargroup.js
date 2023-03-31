import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis } from "recharts";
import styles from "./barchart.module.css";
import { useSelector } from "react-redux";

const Bargroup = () => {
  const [startBal, setstartBal] = useState("");

  const myExpvalue = useSelector((state) => state.main.expenseValue);
  const expexnseValue = myExpvalue?.reduce((accumulator, object) => {
    return accumulator + parseInt(object.myAmount);
  }, 0);

  const BarincomeTotal = useSelector((state) => state.main.incomeData);
  const Bartotal_Inc = BarincomeTotal?.reduce((accumulator, object) => {
    return accumulator + parseInt(object.myAmount);
  }, 0);

  const handleChange = (e) => {
    setstartBal(e.target.value);
    localStorage.setItem("myValue", e.target.value);
  };

  useEffect(() => {
    setstartBal(localStorage.getItem("myValue"));
  }, []);

  const num = parseInt(startBal);
  let endBalance = num + Bartotal_Inc - expexnseValue;
  if (isNaN(endBalance)) endBalance = 0;
  let savedRupee = startBal - endBalance;

  let mypercentValue = parseInt((savedRupee / startBal) * 100);
  if (isNaN(mypercentValue)) mypercentValue = 0;

  const data = [
    { name: "STARTING BALANCE", value: Math.max(startBal, 0), fill: "#334960" },
    { name: "END BALANCE", value: Math.max(endBalance, 0), fill: "#f46524" },
  ];

  return (
    <>
      <div className={`container ${styles.bargroup}`}>
        <div className="row">
          <div className={styles.barPart}>
            <div className="col-md-6">
              <div className={styles.bar_head}><span>Monthly</span> <span>Budget</span></div>
            </div>

            <div className={`col-md-6 ${styles.start_bal}`}>
              <div className={styles.starthead}>
                starting balance:{" "}
                <input
                  type="startBal"
                  content="$"
                  value={startBal}
                  onChange={handleChange}
                  className={styles.startfield}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.barRow}`}>
          <div className="col-md-6">
            <BarChart className={styles.barwidth} width={400} height={400} data={data}>
              <Bar dataKey="value" />
              {/* <Bar dataKey="value" fill={ barColors[0]} /> */}

              <XAxis dataKey="name" id={styles.sdds} />

              {/* <YAxis /> */}
            </BarChart>
            <div className={styles.barvalues}>
              <div className="firstval">{startBal}$</div>
              <div className="secondval">{endBalance}$</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className={styles.saving_part}>
              <div className="incValue">
                <span className={styles.savingPercent}>{mypercentValue}%</span>{" "}
                <br />
                <span className={styles.percent_text}>
                  increase in total savings
                </span>
              </div>
              <hr style={{ border: "1px dashed #rgb(0 0 0 / 74%)" }} />
              <div className="incValue">
                <span className={styles.savingPercent}>${savedRupee}</span>{" "}
                <br />
                <span className={styles.percent_text}>Saved this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bargroup;
