import styled from "styled-components";

export const StyleBody = styled.div`
display: flex;
justify-content: center;

  .adicionar {
    background-color: #1d1f21;
    padding: 3%;
    border-radius: 8px;
    border: 1px solid #FF8040;
    width: 90%;
    color: white;
  }

  h3 {
    margin-bottom: 3%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 3%;
  }

  input[type="text"],
  input[type="datetime-local"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #555;
    background-color: #333;
    color: white;
  }

  input[type="color"] {
    padding: 0;
    width: 100%;
    height: 34px;
    border: none;
    background-color: #333;
  }

  .collapse-toggle {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #773417;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .collapse-content {
    margin-top: 10px;
  }

  .actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .save-button {
    padding: 8px 16px;
    background-color: #773417;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .save-button:hover, .collapse-toggle:hover {
    background-color: #724431;
  }
`;
