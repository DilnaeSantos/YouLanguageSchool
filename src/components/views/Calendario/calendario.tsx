import React, { useState } from "react";
import { StyleBody } from "./styleCalendario";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import EventModal from "./eventModal";
import eventosPadrao from "./eventos";
import iconRight from '../../../assets/imgs/arrow-right-circle-fill.svg';
import iconLeft from '../../../assets/imgs/arrow-left-circle-fill.svg';
import icondown from '../../../assets/imgs/arrow-down-short.svg'
import {
    DropdownContainer,
    DropdownButton,
    DropdownContent,
    DropdownItem,
} from "./styleDropdown"; // Importa os estilos do dropdown

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const Calendario: React.FC = () => {
    const [eventos, setEventos] = useState(eventosPadrao);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const eventStyle = (event) => ({
        style: {
            backgroundColor: event.color,
        },
    });

    const onEventToChange = (data) => {
        const { start, end } = data;
        const updatedEvents = eventos.map((event) => {
            if (event.id === data.event.id) {
                return { ...event, start: new Date(start), end: new Date(end) };
            }
            return event;
        });
        setEventos(updatedEvents);
    };

    const handleEventClick = (eventos) => {
        setEventoSelecionado(eventos);
    };

    const handleEventClose = () => {
        setEventoSelecionado(null);
    };

    return (
        <StyleBody>
            <div className="toolbar">
                <p>ferramentas</p>
            </div>
            <div className="calendario">
                <DragAndDropCalendar
                    defaultDate={new Date()}
                    defaultView="day"
                    events={eventos}
                    localizer={localizer}
                    resizable
                    onEventDrop={onEventToChange}
                    onEventResize={onEventToChange}
                    onSelectEvent={handleEventClick}
                    eventPropGetter={eventStyle}
                    components={{
                        toolbar: CustomTollbar,
                    }}
                    className="calendar"
                />
            </div>

            {eventoSelecionado && (
                <EventModal evento={eventoSelecionado} onClose={handleEventClose} />
            )}
        </StyleBody>
    );
};

const CustomTollbar = ({ onNavigate, label, onView, views }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemText, setItemText] = useState("day");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectView = (view) => {
        onView(view);
        setItemText(view);
        setIsOpen(false);
    };

    return (
        <div className="toolbar-container">
            <h1 className="mesAno">{label}</h1>
            <div className="dirtopo">
                <div>
                    <DropdownContainer>
                        <DropdownButton onClick={handleToggle}>{itemText}<img className="setaDown" src={icondown} alt="" /></DropdownButton>
                        <DropdownContent isOpen={isOpen}>
                            {views.map((view, index) => (
                                <DropdownItem key={index} onClick={() => handleSelectView(view)}>
                                    {view}
                                </DropdownItem>
                            ))}
                        </DropdownContent>
                    </DropdownContainer>
                </div>
                <div className="toolbar-navigation">
                    <button className="btnHoje" onClick={() => onNavigate("TODAY")}>Today</button>
                    <button className="btnAnterior" onClick={() => onNavigate("PREV")}><img className="setaLeft" src={iconLeft} alt="" /></button>
                    <button className="btnProximo" onClick={() => onNavigate("NEXT")}><img className="setaRight" src={iconRight} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Calendario;
