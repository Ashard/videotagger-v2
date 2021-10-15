import React from "react";
import { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import ProgressBar from 'react-bootstrap/ProgressBar'

const client = new W3CWebSocket("ws://localhost:9090");

const ProgressLogger = () => {
    const [progressPercentage, setProgressPercentage] = useState("0");

    useEffect(() => {
        client.onmessage = (message) => {
            setProgressPercentage(message.data);
            if (progressPercentage == "100") {
                setProgressPercentage("0");
            }
        }
     }, [])

    return (
        <div class="mt-2 logger">
            <ProgressBar now={progressPercentage} label={`${progressPercentage}%`}/>
        </div>
    );
}

export default ProgressLogger;