import { useState } from "react";
import DeleteBtn from "./DeleteBtn";

const Todo = ({ todo }) => {
   const { inputValue, id } = todo;
   const [isChecked, setIsChecked] = useState(false);

   return (
      <div className={isChecked ? "todo checked" : "todo"} id={id}>
         <label className="container">
            <input type="checkbox" onChange={e => e.target.checked ? setIsChecked(true) : setIsChecked(false)} />
            <span className="checkmark"></span>
         </label>
         <h2>{inputValue}</h2>
         <DeleteBtn id={id} />
      </div>
   );
}


export default Todo;