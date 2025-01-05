import React from "react";
import "./interrogation.modules.css";

export default function Elaborate_Interrogation() {
    return (
        <>
            <div className={"method-label"}>
                <h1 className={"session-name"}>Session Name</h1>
                <br/>
                <h2 className={"technique-name"}>Technique: Elaborate Interrogation</h2>
            </div>

            <div className={"main-section"}>
                <div className={"left-section"}>
                    <div className={"file-buttons"}>
                        <button className={"button current-button"}>Current Topic</button>
                        <button className={"button add-file-button"}>+ Add File</button>
                    </div>
                    <div className={"questions-section"}>
                        <label className={"question-label"}>Why?</label>
                        <textarea className={"textarea-space"} placeholder={"Enter answer here"}></textarea>
                        <label className={"question-label"}>How?</label>
                        <textarea className={"textarea-space"} placeholder={"Enter answer here"}></textarea>
                        <button className={"button custom-button"}>Create Custom Question</button>
                    </div>
                </div>
                <div className={"history-section"}>
                    <textarea className={"history"} placeholder={"history-log"}></textarea>
                </div>
            </div>
        </>
    );
}