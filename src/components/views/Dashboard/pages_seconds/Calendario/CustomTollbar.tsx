/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import iconRight from '../../../assets/imgs/arrow-right-circle-fill.svg';
import iconLeft from '../../../assets/imgs/arrow-left-circle-fill.svg';
import icondown from '../../../assets/imgs/arrow-down-short.svg'
import {
    DropdownContainer,
    DropdownButton,
    DropdownContent,
    DropdownItem,
} from "./styleDropdown";

const CustomTollbar: React.FC = ({ onNavigate, label, onView, views }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemText, setItemText] = useState("day");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectView = (view: any) => {
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
                            {views.map((view: any, index: any) => (
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

export default CustomTollbar;