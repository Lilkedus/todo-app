import { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "../context/InputContext";
import { TodoContext } from "../context/TodoContext";

const InputBox = styled.input`
   width: 100%;
   padding: 1.2rem;
   border: none;
   border-radius: 4.5px;
   outline: none;
   margin: 2.3rem 0 1.5rem 0;
`;

const Input = () => {
   const { inputValue, setInputValue } = useContext(InputContext);
   const { todos, setTodos } = useContext(TodoContext);

   const handleSubmit = e => {
      e.preventDefault();

      if (!inputValue) return;

      const todo = { inputValue, id: new Date().getTime() };
      setTodos([...todos, todo]);
      setInputValue("");
   }

   return <form onSubmit={handleSubmit} ><InputBox type="text" placeholder="Create a new todo" value={inputValue} onChange={e => setInputValue(e.target.value)} /></form>
}

export default Input;