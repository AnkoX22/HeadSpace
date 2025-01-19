'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from "react";
import "./mapping.modules.css";
import { MindMapGraph } from './components/graphSpace';
import {dia} from "jointjs";
import ToolBar from "./components/ToolBar";



let scalingFactor = 1;

const MindMapPage: React.FC = () => {
    const graphContainerRef = useRef<HTMLDivElement>(null);
    const mindGraphMapRef = useRef<MindMapGraph | null>(null);
    const paperRef = useRef<dia.Paper | null>(null);

    const[tabs, setTabs] = useState([{id:1, title: 'This Diagram'}]);
    const[activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        if (!graphContainerRef.current) {
            console.error("Graph container is not available!");
            return;
        }

        const mindMapGraph = new MindMapGraph();
        mindGraphMapRef.current = mindMapGraph;

        // Initialize the paper with container dimensions
        const container = graphContainerRef.current;
        const paper = mindMapGraph.initializePaper(container, 2*container.offsetWidth, 2*container.offsetHeight);
        paperRef.current = paper;

        const handleResize = () => {
            if (container && paper) {
                paper.setDimensions(container.offsetWidth, container.offsetHeight);
            }
        };



        window.addEventListener("resize", handleResize);



        // Add initial shapes and links
        mindMapGraph.addRectangle(50, 50, 100, 50, "Node 1", paper);
        mindMapGraph.addRectangle(300, 50, 100, 50, "Node 2", paper);
        mindMapGraph.addCircle(150, 150, 100, 50, "Circle 1", paper);
        mindMapGraph.addTriangle(200, 250, 100, 50, "Triangle 1", paper);



        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const addTabs = () => {
        const newTabId = tabs.length+1;
        let name = prompt('Enter page name: ');

        if(!name){
            name = `Anonymous Page ${newTabId}`;
        }

        const newTab = {
            id: newTabId,
            title: name
        }

        setTabs([...tabs, newTab]);
        setActiveTab(newTabId);
    }

    const scalePaper = (motion: string) => {
        if (paperRef.current) {
            const paper = paperRef.current;

            if(motion == "in" && scalingFactor <= 2){
                scalingFactor += 0.1;
            }
            else if(motion == "out" && scalingFactor >= 0){
                scalingFactor -= 0.1;
            }
            paper.scale(scalingFactor, scalingFactor);
        }
        else{
            console.error("There is no Paper!");
        }
    };


    return (
        <main className="container-fluid mind-map-container w-full lg:w-10/12">
            <header className="row mb-6 method-label">
                <textarea
                    placeholder={"Session Name"}
                    className="text-2xl font-bold mb-2 text-center text-gray-600"
                    id={"session-name"}
                />
                <h2 className="technique-name">Technique: Mind Mapping</h2>
            </header>
            <div className="row main-space">
                <div className="graph-space card">
                    <div className="card-header">
                        <ul className={"nav nav-tabs card-header-tabs"}>
                            <li className={"nav-items"}>
                                <a className={"nav-link active"} aria-current={"true"}>This Diagram</a>
                            </li>
                            {tabs.map((tab) => (
                                <li key={tab.id} className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.title}
                                    </button>

                                </li>
                            ))}
                            {/* "+" Button */}
                            <li className={"nav-item"}>
                                <a className={"nav-link"} onClick={addTabs}>+</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"card-body  col-sm-3 col-md-3 col-lg-3 mb-3"}>
                        <div ref={graphContainerRef} id="modelCanvas"/>
                        <aside className="overflow-y-scroll tool-box ">
                            <ToolBar
                                mindGraphMapRef={mindGraphMapRef}
                                paperRef={paperRef}
                            />
                        </aside>
                        <div className={"zoom btn-group"} role={"group"} aria-label={"zoom-in & zoom out buttons"}>
                            <button onClick={() => scalePaper("in")} type={"button"} className={"btn btn-secondary"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-zoom-in" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                    <path
                                        d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                    <path fillRule="evenodd"
                                          d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </button>
                            <button onClick={() => scalePaper("out")} type={"button"} className={"btn btn-secondary"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-zoom-out" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
                                    <path
                                        d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
                                    <path fillRule="evenodd"
                                          d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MindMapPage;