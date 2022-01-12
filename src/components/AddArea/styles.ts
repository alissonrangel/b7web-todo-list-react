import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  .image{
    margin-right: 10px;
  }
  input{    
    border-radius: 10px;
    width: 100%;
    font-size: 20px;
    background-color: transparent;
    border: 0;
    outline:0;
    color: #ddd;
  }

`
