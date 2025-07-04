import React from "react";
import { StyleBody } from "./styles";
import logo from "../../../../assets/imgs/logo2.jpg";
import imgdoperfil from "../../../../assets/imgs/logoR1.png";

const DashboardProf: React.FC = () => {

    return (
        <StyleBody>
            <div className="container">
                <header className="header">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="infoProf">
                        <div className="saldo">saldo R$ 0,00</div>
                        <img className="logo2" src={imgdoperfil} alt="perfil" />
                    </div>
                </header>
            </div>
        </StyleBody>
    );
};

export default DashboardProf;
