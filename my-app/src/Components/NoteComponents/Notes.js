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

    return (
        <div className="choice">
            {
                engine ? <Engine /> : blocks || chassis ? <Chassis /> : blocks || transmission ? <Transmission /> : blocks || carcase ? <Carcase /> : blocks
            }
            <span>{console.log('(.)(.)')}</span>
        </div>
    );
}

export default Notes;