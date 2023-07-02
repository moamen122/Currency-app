import styled from 'styled-components';

export const AppContainer = styled.form`
  display: flex;

`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-right: 10px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-left:10px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #F4BC0B;
  color: #fff;
  border: 1px;
  cursor: pointer;
  margin:0 5px 0 5px;
`;
export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;