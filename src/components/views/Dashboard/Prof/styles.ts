import styled from "styled-components";

export const StyleBody = styled.div`

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #773417;
}

.logo {
  width: 11%;
  height: 10vh;
  margin: 1% 0% 1% 1%;
  border-radius: 10px;
}

.logo2 {
  width: 30%;
  margin: 0% 0% 0% 10%;
}

.infoProf {
  display: flex;
  align-items: center;
  margin-left: 70%;
}

.navegacao {
  border-bottom: 2px solid #773417;
}

.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 2px solid transparent;
  outline: none;
  position: relative;
  transition: color 0.3s ease-in-out;
  color: #773417; /* Cor inicial do texto */
  font-size: 18px;
  z-index: 1;
  overflow: hidden;
}

.btn::before, .btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
}

.btn::before {
  border: 2px solid #ffff;
  transform: scale(0);
  opacity: 0;
  z-index: 1;
}

.btn::after {
  background: #773417;
  opacity: 0;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.7s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 0;
}

.btn:hover::before, .btn.active::before {
  transform: scale(1);
  opacity: 1;
}

.btn:hover::after, .btn.active::after {
  clip-path: circle(150% at 50% 50%);
  opacity: 1;
}

.btn:hover, .btn.active {
  color: #ffffff; /* Cor do texto no hover */
}

.btn span {
  position: relative;
  z-index: 2;
}

.conteudo.agenda-page {
    background-color: #ffff;
}

`