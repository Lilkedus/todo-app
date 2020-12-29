import styled from "styled-components";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoLists = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   background: white;
   border-radius: 4px 4px 2px 2px;
   overflow: hidden;
   box-shadow: 0 10px 25px #acacac8f;

   .todo {
      position: relative;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.3rem ;
      border-top: 1px solid #80808059;
   }

   .todo h2 {
      color: #484b6a;
      font-weight: 400;
      font-size: 18px;
      margin-left: 1rem;
   }

   .todo:hover .delete-btn {
      opacity: 1;
      pointer-events: all;
   }

`;

const TodoList = () => {
   const { todos, setTodos } = useContext(TodoContext);

   return (
      <TodoLists>
         {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </TodoLists>
   );
}

export default TodoList;