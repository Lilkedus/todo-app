import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";

// Styles
const Wrapper = styled.div`
   width: 100%;
   padding: .6rem 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: white;
   border-radius:  0 0 4px 4px;
   overflow: hidden;
   border-top: 1px solid #80808059;
   box-shadow: 0 10px 25px #acacac8f;
   color: #9394a5;

   h3 {
      font-size: .9rem;
      font-weight: 400;
   }

   h2 {
      font-size: 1rem;
      font-weight: 400;
      user-select: none;
      cursor: pointer;
   }

  .active {
      color: #3272f3;
   }

   .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
   }
`;

const ActionCenter = () => {
   const { todos, setTodos } = useContext(TodoContext);
   z
   return (
      <Wrapper>
         <h3>{todos.length} items left</h3>
         <span className="actions">
            <h2 className="active" onClick={handleClick()} role="button">All</h2>
            <h2 role="button" onClick={handleClick()}>Active</h2>
            <h2 role="button" onClick={handleClick()}>Completed</h2>
         </span>
         <h2 className="clear-btn" onClick={() => setTodos([])} role="button">Clear all lists</h2>
      </Wrapper>
   )

}

export default ActionCenter;