/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { StyleBody } from "./styleCalendario";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import EventModal from "./eventModal";
import eventosPadrao from "./eventos";
import Adicionar from "./Adicionar";
import CustomTollbar from "./CustomTollbar";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const Calendario: React.FC = () => {
    const [eventos, setEventos] = useState(eventosPadrao);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const eventStyle = (event: any) => ({
        style: {
            backgroundColor: event.color,
        },
    });

    const onEventToChange = (data: any) => {
        const { start, end } = data;
        const updatedEvents = eventos.map((event) => {
            if (event.id === data.event.id) {
                return { ...event, start: new Date(start), end: new Date(end) };
            }
            return event;
        });
        setEventos(updatedEvents);
    };

    const handleEventClick = (eventos: any) => {
        setEventoSelecionado(eventos);
    };

    const handleEventClose = () => {
        setEventoSelecionado(null);
    };

    const handleAdicionar = (novoEvento: any) => {
        setEventos([...eventos,{ ...novoEvento, id: eventos.length + 1 }])
    }

    return (
        <StyleBody>
            <div className="toolbar">
                <Adicionar onAdicionar={handleAdicionar} />
            </div>
            <div className="calendario">
                <DragAndDropCalendar
                    defaultDate={new Date()}
                    defaultView="month"
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

export default Calendario;
