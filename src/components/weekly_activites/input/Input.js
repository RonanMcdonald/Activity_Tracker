import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <Input_Wrapper>
      <input type='text' placeholder='Click and type here to enter an activity...' />
    </Input_Wrapper>
  );
};

const Input_Wrapper = styled.div`
  padding: 0 20px;

  input[type='text'] {
    width: 100%;

    overflow: hidden;

    border: 1px solid #00000020;
    border-radius: 8px;

    padding: 10px 20px;

    font-size: 18px;
    font-weight: 600;
    color: #2b2b44;
    opacity: 90%;
  }

  input[type='text']:focus {
    outline: 2px solid #00000080;
  }
`;

export default Input;
