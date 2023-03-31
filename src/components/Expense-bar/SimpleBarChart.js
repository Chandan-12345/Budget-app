import React, { useMemo } from "react";
import styles from "./expense.module.css";
import Barchart from "../Bar/Barchart";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Text,
} from "recharts";

const blues = [
  ["#457AA6"],
  ["#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#E3EBF2"],
  ["#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
  ["#1A334A", "#264F73", "#457AA6", "#A2BBD2", "#E3EBF2"],
];

const getColor = (length, index) => {
  if (length <= blues.length) {
    return blues[length - 1][index];
  }

  return blues[blues.length - 1][index % blues.length];
};
const YAxisLeftTick = ({ y, payload: { value } }) => {
  return (
    <Text x={0} y={y} textAnchor="start" verticalAnchor="middle" scaleToFit>
      {value}
    </Text>
  );
};

let ctx;
export const measureText14HelveticaNeue = (text) => {
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "14px 'Helvetica Neue";
  }

  return ctx.measureText(text).width;
};

const BAR_AXIS_SPACE = 50;

const SimpleBarChart = ({ data, yKey, xKey, z }) => {
  const myvalue = useSelector((state) => state.main.myTableNumber)
const total_income = useSelector((state) => state.main.myIncomeValue)
const incomeTotal = useSelector((state) => state.main.incomeData)
const total_Inc = incomeTotal?.reduce((accumulator, object) => {
  return accumulator + parseInt(object.myAmount);
}, 0);

const IncomeBardata = [
  { name: "Planned", pv: Math.max(total_income , 0) , val : "planned"},
  { name: "Actual", pv: Math.max(total_Inc , 0) , val : "Actual"},  
];
const mystate = useSelector((state) => state.main);
 const maxTextWidth = useMemo(
    () =>
      data.reduce((acc, cur) => {
        const value = cur[yKey];
        const width = measureText14HelveticaNeue(value.toLocaleString());
        if (width > acc) {
          return width;
        }
        return acc;
      }, 0),
    [data, yKey]
  );

  return (
    <>
      <div className={`container ${styles.mainbar}`}>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <h2>Expense</h2>
                <ResponsiveContainer
                  width={"90%"}
                  height={50 * data.length}
                  debounce={50}
                >
                  <BarChart
                    data={data}
                    width={730}
                    layout="vertical"
                    margin={{
                      left: 10,
                      right: maxTextWidth + (BAR_AXIS_SPACE - 8),
                    }}

                    tick={{
                        transform: `translate(${
                          maxTextWidth + BAR_AXIS_SPACE
                        }, 0)`,
                      }}
                  >
                    <XAxis hide axisLine={false} type="number" />
                    <YAxis
                      yAxisId={0}
                      dataKey={xKey}
                      type="category"
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      orientation="right"
                      yAxisId={1}
                      dataKey={yKey}
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => value.toLocaleString()}
                      mirror
                      tick={{
                        transform: `translate(${
                          maxTextWidth + BAR_AXIS_SPACE
                        }, 0)`,
                      }}
                    />
                    <Bar dataKey={yKey} minPointSize={2} barSize={32}>
                      {data.map((d, idx) => {
                        return (
                          <Cell
                            key={d[xKey]}
                            fill={getColor(data.length, idx)}
                          />
                        );
                      })}
                    </Bar>
             </BarChart>
                
                </ResponsiveContainer>
             </div>
          </div>

          <div className="col-md-6">
            <Barchart  data={IncomeBardata}  xKey="name" yKey="pv" zKey="val"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBarChart;
