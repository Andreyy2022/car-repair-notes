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

    let blocks = <div className="choice">
                <div className="box" onClick={() => setEngine(true)}>Двигатель</div>
                <div className="box" onClick={() => setChassis(true)}>Ходовая система</div>
                <div className="box" onClick={() => setTransmission(true)}>Трансмиссия</div>
                <div className="box" onClick={() => setCarcase(true)}>Кузов/салон</div>
                </div>;

    let ArrModuls = [
        {status: engine, tag: <Engine handleHideCompEng={handleHideCompEng} />},
        {status: chassis, tag: <Chassis handleHideCompChass={handleHideCompChass} />},
        {status: transmission, tag: <Transmission handleHideCompTrans={handleHideCompTrans} />},
        {status: carcase, tag: <Carcase handleHideCompCarc={handleHideCompCarc} />},
    ];

    function show() {
        for (let elem of ArrModuls) {
            if (elem.status) {
                return elem.tag;
            }
        }

        return blocks;
    }

    function handleHideCompEng() {
        setEngine(false);
    }

    function handleHideCompChass() {
        setChassis(false);
    }

    function handleHideCompTrans() {
        setTransmission(false);
    }

    function handleHideCompCarc() {
        setCarcase(false);
    }

    return (
        <div>
            {show()}
        </div>
    );
}

export default Notes;