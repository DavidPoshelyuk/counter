import {useState} from "react";







 export const  OnOff = () => {

     let [oN, Triger] = useState(1)

     const styleOnnOff = {

         on :{
             height:' 100px',
             width: "100px",
             display: "inline-block",
             backgroundColor:( oN % 2 !== 0) ? 'red': 'green'
         },

     }

     return (
 <div>

     <textarea   onChange={() => Triger(oN = oN+1)} > text </textarea>
     <div style={styleOnnOff.on}> Hrllo {oN } </div>


 </div>

 )
}