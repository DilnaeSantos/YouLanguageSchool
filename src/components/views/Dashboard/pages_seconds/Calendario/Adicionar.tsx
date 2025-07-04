import React, { useState } from "react";
import { StyleBody } from "./styleAdicionar"; // Importa o estilo separado
import iconDown from '../../../assets/imgs/chevron-double-down.svg';
import iconUp from '../../../assets/imgs/chevron-double-up.svg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Adicionar: React.FC<{ onAdicionar: (evento: any) => void }> = ({ onAdicionar }) => {
    const [novoEvento, setNovoEvento] = useState({
        title: "",
        desc: "",
        start: "",
        end: "",
        color: "#FF8040",
    });

    const [expanded, setExpanded] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNovoEvento({ ...novoEvento, [name]: value });
    };

    const handleToggleExpanded = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setExpanded(!expanded);
    };

    const currentDate = new Date();

    const todayDate = new Date(currentDate.toISOString().slice(0, 16)); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (novoEvento.title && novoEvento.start && novoEvento.end) {
            const startDate = new Date(novoEvento.start);
            const endDate = new Date(novoEvento.end);

            if (startDate >= endDate) {
                alert("O horário de término deve ser maior que o de início.");
                return;
            }
            if (startDate < todayDate) {
                alert("O evento deve ser no futuro.");
                return;
            }
            onAdicionar(novoEvento);
            setNovoEvento({
                title: "",
                desc: "",
                start: "",
                end: "",
                color: "#FF8040",
            });
        }
    };

    return (
        <StyleBody>
            <div className="adicionar">
                <h3>Adicionar Aula</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>*Título da Aula</label>
                        <input
                            type="text"
                            name="title"
                            value={novoEvento.title}
                            onChange={handleChange}
                            placeholder="Digite o Título"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">*Início</label>
                        <input
                            type="datetime-local"
                            name="start"
                            value={novoEvento.start}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="end">*Término</label>
                        <input
                            type="datetime-local"
                            name="end"
                            value={novoEvento.end}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {expanded && (
                        <div className="collapse-content">
                            <div className="form-group">
                                <label htmlFor="desc">Descrição</label>
                                <input
                                    type="text"
                                    name="desc"
                                    value={novoEvento.desc}
                                    onChange={handleChange}
                                    placeholder="Digite a Descrição"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Cor</label>
                                <input
                                    type="color"
                                    name="color"
                                    value={novoEvento.color}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    )}
                    <div className="form-group actions">
                        <button type="submit" className="save-button">Salvar</button>
                        <button type="button" className="collapse-toggle" onClick={handleToggleExpanded}>
                            {expanded ? <img src={iconUp} alt="Expandir" /> : <img src={iconDown} alt="Recolher" />}
                        </button>
                    </div>
                </form>
            </div>
        </StyleBody>
    );
};

export default Adicionar;
