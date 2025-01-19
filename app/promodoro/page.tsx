import "./promodoro.modules.css";
import Clock from "@/app/components/clock/page";
import React from "react";

export default function Promodoro() {
    return (
        <main>
            <div className={"method-label"}>
                <textarea
                    placeholder={"Session Name"}
                    className="text-2xl font-bold mb-2 text-center text-gray-600  placeholder-glow"
                    id={"session-name"}
                />
                <br/>
                <h2 className={"technique-name"}>Technique Promodoro</h2>
            </div>

            <main className={"text-center"} id={"clock"}>
                <Clock style={{
                    height: 'calc(100% - 40px)',
                    width: 'calc(100%- 40px)'
                }}/>
            </main>

        </main>
    );
}