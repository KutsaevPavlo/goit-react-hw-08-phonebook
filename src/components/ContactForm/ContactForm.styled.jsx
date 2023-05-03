import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
`;

export const StyledFormLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledFormInput = styled.input`
  width: 150px;
  margin-left: 20px;
  border-radius: 4px;
  border: solid 2px #4caf50;

  &:hover,
  focus {
    box-shadow: 0 0 5px green;
  }
`;

export const StyledFormBtm = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  border-radius: 8px;
  height: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px green;
  }
`;

export const StyledFormItems = styled.div`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  height: 35px;
  width: 90px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
