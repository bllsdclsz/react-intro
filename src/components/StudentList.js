import React, { useState } from 'react';

function printConsole(pCount){
   console.log("state work " + pCount)
}

function StudentList(props){
   const [count, setCount] = useState(new Date().getSeconds());

   return (
      <div>
         <ul>
         {props.data.map(student => {
           return <li>{student.firstname} {student.lastname}</li>
         })}
         </ul>
         <button onClick={() => {setCount(new Date().getSeconds())}}>Set Count</button>
         {printConsole(count)}
      </div>
   )
}

export default StudentList;

