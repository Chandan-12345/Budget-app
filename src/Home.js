
import './App.css';

import Header from './components/Header/Header';
import Bargroup from './components/Barchart/Bargroup';
import SimpleBarChart from './components/Expense-bar/SimpleBarChart';
import Tabledata from './components/Tabeldata/Tabledata';
import { useSelector } from 'react-redux';
import Transactions from './components/Transaction/Transactions';
const Home = () => {

  const myname = useSelector((state) => state.main)
 const myvalue = myname&& myname.myTableNumber;

const myname1 = useSelector((state) => state.main)
const myExpvalue = myname1&& myname1.expenseValue;

console.log(myExpvalue, "iiiiiiiiiii");
let expexnseValue = myExpvalue && myExpvalue.length > 0 &&  myExpvalue.reduce((accumulator, object) => {
  return accumulator + parseInt(object.myAmount);
}, 0);

  const data = [
    { name: "Planned", pv: Math.max(myvalue , 0) , val : "planned"},
    { name: "Actual", pv: Math.max(expexnseValue , 0) , val : "Actual"},  
  ];

  return (
 <>
  <Header />
  <Bargroup />
  <SimpleBarChart data={data} xKey="name" yKey="pv" zKey="val" />
  <Tabledata />
  <Transactions />
 </>
  );
}

export default Home
