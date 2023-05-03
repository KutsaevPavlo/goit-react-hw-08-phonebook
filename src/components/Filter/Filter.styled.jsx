import styled from 'styled-components';

export const StyledFilter = styled.label`
  width: 500px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  align-items: center;
`;

export const StyledFilterInput = styled.input`
  width: 150px;
  height: 20px;
  margin-left: 20px;
  border-radius: 4px;
  border: solid 2px #4caf50;

  &:hover,
  focus {
    box-shadow: 0 0 5px green;
  }
`;
export const StyledFilterItems = styled.div`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  height: 35px;
  width: 200px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 112px;
`;
