import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime !== 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    start/stop challenge
                </button>
            </p>
            <p className="active">
                time is running / timer inactive
            </p>
        </section>
    );
}