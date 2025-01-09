import React from "react";
import "./mapping.modules.css";
// import { GraphManager } from './GraphManager'

// import MindMapClient from "@/app/mind_mapping/components/mindMap";

const MindMapPage: React.FC = () => {
    return (
        <>
            <div className={"method-label"}>
                <h1 className={"session-name"}>Session Name</h1>
                <br/>
                <h2 className={"technique-name"}>Technique: Mind Mapping</h2>
            </div>

            <div className={"main-space"}>
                <div className={"tool-box"}>
                    <h1>Tool Box</h1>
                    <div className={"circle-option"}></div>
                    <div className={"eclipse-option"}></div>
                    <div className={"rectangle-option"}></div>
                    <div className={"triangle-option"}></div>
                    <div className={"diamond-option"}></div>
                    <div className={"image-option"}><h3>img</h3></div>
                    <div className={"text-option"}><h3>Text</h3></div>
                    <div className={"simple-link"}></div>
                    <div className={"double-link"}></div>
                </div>

                <div className={"graph-space"}></div>
            </div>
        </>

    );
};

export default MindMapPage;
