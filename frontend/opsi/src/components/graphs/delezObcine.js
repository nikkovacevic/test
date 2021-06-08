import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { LineChart, Line } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, AreaChart, Area } from 'recharts';

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(0)}%`;

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default function Graf4(props) {
    //const classes = useStyles();

    
    
    const data5 = require("../data/migracije_obcine.json");
    
    //console.log(data5[0].num);
    const results = new Array();
    //var results = [];
    for ( var key in data5){
        if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča" && data5[key].OBČINE === props.obcina){
        //if(data5.hasOwnProperty(key) && data5[key].KAZALNIK === kaz && data5[key]["STATISTIČNA REGIJA"] === reg){
            results[key] = data5[key];
            /*for(var key2 in data5){
                if(data5.hasOwnProperty(key2) && data5[key2]["STATISTIČNA REGIJA"] === results[key]["STATISTIČNA REGIJA"] && data5[key2].KAZALNIK === "Delovno aktivno prebivalstvo [brez kmetov], ki delajo v regiji prebivališča"){
                    
                    results[key].znotraj = data5[key2].num;
                    break;
                    //console.log("znotraj" +data5[key2].num + " " + results[key].znotraj)
                }
            }*/
            results[key].znotraj = 100 - results[key].num;
            
            
        }
    }
    var filtered = results.filter(function (el){
      return el != null;
    })

    for(var i = 0; i < results.length; i++){
        var obj = results[i];
        for(var prop in obj){
            if(obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])){
                obj[prop] = +obj[prop];   
            }
        }
    }
      
    //console.log("spol")
    console.log(results);
    //console.log(filtered[1].num);
    //console.log(filtered[1].num*2);
    var ime = props.kaz;



    return (
      <React.Fragment>     
        
        
        <div>
       
        
        <AreaChart
          width={500}
          height={400}
          data={filtered}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="LETO" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="num" name="Delavci ki delajo zunaj občine prebivališča" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="znotraj" name="Delavci ki delajo znotraj občine prebivališča" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          
        </AreaChart>
      
            
        </div>
      </React.Fragment>
    );
  }

  