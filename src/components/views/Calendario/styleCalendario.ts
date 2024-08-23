import styled from "styled-components";

export const StyleBody = styled.div`
display: flex;
background-color: #262626;;

.calendario {
    width: 80%;
    height: 99.5vh;
}

.toolbar {
    width: 20%;
    height: 100vh;
    color: #fff;
    background-color: #1a1a1a;
    border-right: 1px solid #FF8040;
}

.modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-content {
    background-color: #FF8040;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 1);
    text-align: center;
    z-index: 10000;
    color: #000;
}

.modal-content p {
    margin-top: 5%;
    margin-bottom: 5%;
}

.btnFechar {
    font-size: 100%;
    padding: 2%;
    margin-left: 2%;
    border-radius: 0% 30%;
    border: none;
    background-color: #771216;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
}

.btnFechar:hover {
    scale: 1.1;
    border-radius: 30% 0%;
}

// calendario header e botões
.rbc-toolbar {
    height: 8%;
    color: #fff;
    font-size: 120%;
}

.rbc-btn-group > button {
    border: 0;
}

.rbc-toolbar button {
    color: #fff;
    border: 1px solid #FF8040;
}

.rbc-toolbar button:active, .rbc-toolbar button.rbc-active {
    background-color: #56565686;
    border-color: #bbb;
    color: #FF8040;
}

.rbc-toolbar button:hover, .rbc-toolbar button.rbc-hover {
    color: #FF8040;
}

// coro e linhas do calendario
.rbc-month-view {
    border-color: #FF8040;
}

.rbc-month-row + .rbc-month-row {
    border-color: #FF8040;
}

.rbc-day-bg + .rbc-day-bg {
    border-color: #FF8040;
}

// mês
.rbc-header {
    color: #eeeeee;
    border-color: #FF8040;
}

.rbc-header + .rbc-header {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-color: #FF8040;
}

.rbc-off-range-bg {
    background-color: #313131;
}

.rbc-today {
    background-color: #1a1a1a;
}

.rbc-button-link {
    margin: 5px;
    font-size: 15px;
    color: #fff;
}

.rbc-off-range .rbc-button-link {
    color: #eeeeee37;
}

.rbc-now .rbc-button-link {
    background-color: #FF8040;
    color: #ffffffff;
    border-radius: 2px;
    padding-left: 2px;
    padding-right: 2px;
    margin: 2px;
    font-size: 15px;
}

// semana
.rbc-time-content, .rbc-time-content > .rbc-day-slot, .rbc-timeslot-group, .rbc-time-slot {
    color: #bbb;
    border-color: #FF8040;
}

.rbc-day-slot, .rbc-time-slot {
    border-top: 1px solid #c8c8c80a;
}

.rbc-time-header-content, .rbc-time-header-content, .rbc-time-view {
    border-color: #FF8040;
}

// agenda
.rbc-agenda-content, .rbc-agenda-view {
    color: #fff;
} 

.rbc-agenda-date-cell, .rbc-agenda-time-cell {
    background-color: #313131;
}

.rbc-agenda-event-cell {
    border-radius: 10px;
    font-weight: bold;
    color: #e0e0e0;
}

//toolbar
.toolbar-container {
    display: flex;
    height: 10vh;
    align-items: center;
}

.mesAno {
    width: 50%;
    font-size: 200%;
    margin-left: 2%;
    color: #FF8040;
}

.dirtopo {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-left: 2%;
}

.btnHoje {
    margin-right: 10px;
    background-color: #FF8040;
    color: white;
    padding: 6px 14px;
    font-size: 116%;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btnAnterior, .btnProximo {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.toolbar-navigation {
    display: flex;
    align-items: center;
}

.setaLeft, .setaRight {
    margin-right: 10px;
    background-color: transparent;
    cursor: pointer;
}

`