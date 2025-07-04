import { StyleBody } from "./styleCalendario";

const EventModal = ({ evento, onClose }) => {
    return (
        <StyleBody>
            <div className="modal">
                <div className="modal-content">
                    <h2>{evento.title}</h2>
                    <p>{evento.desc}</p>
                    <p>início: {evento.start.toLocaleString()}</p>
                    <p>fim: {evento.end.toLocaleString()}</p>
                    <button className="btnFechar" onClick={onClose}>Fechar</button>
                </div>
            </div>
        </StyleBody>
    )
}

export default EventModal;