import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
  `
  background-color: #555;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;

  label{
    margin-left: 10px;
    color: #eee;
    font-size: 20px;
    text-decoration: ${done ? 'line-through':'initial'};
  }
  input{    
    width: 25px;
    height: 25px;    
  }
`
))
