import React from "react";
import { StyleBody } from "./styleCalendario";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const Calendario: React.FC = () => {
    const DragAndDropCalendar = withDragAndDrop(Calendar);
    const localizer = momentLocalizer(moment);

    const eventos = [
        {
            id: 0,
            title: "Aula de Matemática",
            start: new Date(2024, 7, 16, 10, 0), 
            end: new Date(2024, 7, 16, 11, 0),  
        },
        {
            id: 1,
            title: "Aula de Matemática2",
            start: new Date(2024, 7, 14, 10, 0), 
            end: new Date(2024, 7, 14, 11, 0),  
        },
    ];

    return (
        <StyleBody>
            <DragAndDropCalendar 
                defaultDate={new Date()}
                defaultView="day"
                events={eventos}
                localizer={localizer}
                resizable
                className="calendar"
            />
        </StyleBody>
    );
};

export default Calendario;
