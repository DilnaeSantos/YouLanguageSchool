import React from "react";
import { StyleHeader } from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../../../assets/imgs/logo2.jpg';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleAluno = () => {
    navigate('/CadastroA');
  };

  const handleProfessor = () => {
    navigate('/CadastroP');
  };

  return (
    <StyleHeader>
      <img className="logo" src={imgLogo} alt="" />
      <nav className="navegacao">
        <button onClick={handleAluno} className="btnAluno">Seja Um Aluno</button>
        <button onClick={handleProfessor} className="btnProf">Seja Um Professor</button>
        <Link to='/login' className="login">Login</Link>
      </nav>
    </StyleHeader>
  );
};

export default Header;
