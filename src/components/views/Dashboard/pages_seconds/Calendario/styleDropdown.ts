import styled from "styled-components";

// Container do dropdown
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Botão do dropdown
export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: #FF8040;
  color: white;
  padding: 6px 14px;
  font-size: 116%;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Conteúdo do dropdown
export const DropdownContent = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background-color: #FF8040;
  min-width: 90px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  border-radius: 4px;
  z-index: 999;
  list-style: none;
`;

// Item do dropdown
export const DropdownItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px 6px;
  cursor: pointer;

  &:hover {
    border-radius: 4px;
    background-color: #f1f1f1;
  }
`;
