import React from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import './styles.css';
import Engine from "./Engine";
import Chassis from "./Chassis";
import Transmission from "./Transmission";
import Carcase from "./Carcase";

function Notes() {
    let [engine, setEngine] = useState(false);
    let [chassis, setChassis] = useState(false);
    let [transmission, setTransmission] = useState(false);
    let [carcase, setCarcase] = useState(false);

    let blocks = <>
                <div className="box" onClick={() => setEngine(true)}>Двигатель</div>
                <div className="box" onClick={() => setChassis(true)}>Ходовая система</div>
                <div className="box" onClick={() => setTransmission(true)}>Трансмиссия</div>
                <div className="box" onClick={() => setCarcase(true)}>Кузов/салон</div>
                </>;

    let ArrModuls = [
        {status: engine, tag: <Engine />},
        {status: chassis, tag: <Chassis />},
        {status: transmission, tag: <Transmission />},
        {status: carcase, tag: <Carcase />},
    ];

    function show() {
        for (let elem of ArrModuls) {
            if (elem.status) {
                return elem.tag;
            }
        }

        return blocks;
    }

    return (
        <div className="choice">
            {show()}
        </div>
    );
}

export default Notes;