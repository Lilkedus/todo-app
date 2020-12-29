import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import styled from "styled-components";
import xMark from "../assets/icon-cross.svg";

// Styles
const Button = styled.button`
   background: none;
   border: none;
   position: absolute;
   right: 1rem;
   opacity: 0;
   pointer-events: none;
   outline: none;
`;

const DeleteBtn = ({ id }) => {
   const { todos, setTodos } = useContext(TodoContext);

   const handleClick = () => setTodos(todos.filter(item => item.id !== id));

   return <Button className="delete-btn" type="button" onClick={handleClick}><img src={xMark} alt="" /></Button>
}

export default DeleteBtn;