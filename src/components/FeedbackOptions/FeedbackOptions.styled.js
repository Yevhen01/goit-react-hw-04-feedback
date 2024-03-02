import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  outline: none;
  color: #265073;
  background: #9ad0c2;
  letter-spacing: 0.05em;
  transition: all 250ms ease;
  cursor: pointer;

  &:hover {
    color: #9ad0c2;
    background: #265073;
    box-shadow: 1px 2px 3px #9ad0c2;
  }
`;
