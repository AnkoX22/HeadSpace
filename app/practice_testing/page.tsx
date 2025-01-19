import React from "react";

export default function Practice_Testing() {
    return (
        <main>
            <div className={"method-label"}>
                <textarea
                    placeholder={"Session Name"}
                    className="text-2xl font-bold mb-2 text-center text-gray-600  placeholder-glow"
                    id={"session-name"}
                />
                <br/>
                <h2 className={"technique-name"}>Technique: Practice Testing</h2>
            </div>
        </main>
    );
}