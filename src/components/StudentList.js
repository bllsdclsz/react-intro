import React, { useState } from 'react';
import { sum, sub, mul, div} from 'bilals-simple-calculator';

function printConsole(pCount){
   console.log("state work " + pCount)
}

function StudentList(props){
   const [count, setCount] = useState(0);

   return (
      <div>
         <ul>
         {props.data.map(student => {
           return <li>{student.firstname} {student.lastname}</li>
         })}
         </ul>
         <button onClick={() => {setCount(sum(count, 1))}}>Set Count</button>
         {printConsole(count)}
      </div>
   )
}

export default StudentList;

