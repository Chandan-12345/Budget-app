import React from "react";
import { NavLink } from "react-router-dom";
import styles from  "./header.module.css"

const Header = () => {
  return (
    <>
      <div className={styles.main_header}>
      <div className="container">
        <div className="row headMain">
          <div className={`col-md-7 sm-12 ${styles.head_getstart}`}>
            <h3 className="">GET STARTED</h3>
            <div className={styles.gtstart_para}>
              Set your starting balance in cell L8, then customize your
              categories and <br />planned spending amounts in the 'Income' and
              'Expenses' tables below.<br />
            
           
            As you enter data in the 'Transactions'
              tab, this sheet will automatically<br /> update to show a summary of
              your spending for the month.
            </div>
          </div>
          <div className={`col-md-5  ${styles.head_getstart}`}>
            <h3>NOTE</h3>
            <p>
           <input type="text" value=" Only edit highlighted cells." className={styles.noteField} />
            </p>
            <p className={styles.italicwords}>Try not to alter cells that contain a formula. </p>
            <button className={styles.TransactionBtn}><NavLink style={{color : 'black' , textDecoration : "none"}}  to="/Transactions">Transactions</NavLink></button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
