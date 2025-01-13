'use client'

import React, { useEffect, useRef } from "react";
import "./mapping.modules.css";
import { MindMapGraph } from './components/graphSpace';
import {dia} from "jointjs";

let scalingFactor = 1;

const MindMapPage: React.FC = () => {
    const graphContainerRef = useRef<HTMLDivElement>(null);
    const mindGraphMapRef = useRef<MindMapGraph | null>(null);
    const paperRef = useRef<dia.Paper | null>(null);

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

    const handleShapeAdd = (shapeType: string) => {
        if (!mindGraphMapRef.current || !paperRef.current) {
            console.error("MindMapGraph or Paper is not initialized!");
            return;
        }

        const mindMapGraph = mindGraphMapRef.current;
        const paper = paperRef.current;
        const centerX = window.innerWidth * 0.5;
        const centerY = window.innerHeight * 0.5;

        switch (shapeType) {
            case 'rectangle':
                mindMapGraph.addRectangle(centerX, centerY, 100, 50, "New Rectangle", paper);
                break;
            case 'circle':
                mindMapGraph.addCircle(centerX, centerY, 100, 50, "New Circle", paper);
                break;
            case 'triangle':
                mindMapGraph.addTriangle(centerX, centerY, 100, 50, "New Triangle", paper);
                break;
            case 'ellipse':
                mindMapGraph.addEllipse(centerX, centerY, 100, 50, "New Ellipse", paper);
                break;
            case 'cylinder':
                mindMapGraph.addCylinder(centerX, centerY, 100, 50, "New Cylinder", paper);
                break;
            case 'text':
                mindMapGraph.addText(centerX, centerY, 50, 50);
                break;
            case 'image':
                mindMapGraph.addImage(centerX, centerY, 100, 50);
                break;
            case 'link':
                mindMapGraph.addLink(centerX, centerY, 100, 50, "Link", paper);
                break;
            case 'double link':
                mindMapGraph.addDoubleLink(centerX, centerY, 100, 50, "Double Link", paper);
                break;
            case 'and':
                mindMapGraph.addAndGate(centerX, centerY, 100, 50, "And Gate", paper);
                break;
            case 'or':
                mindMapGraph.addOrGate(centerX, centerY, 100, 50, "Or Gate", paper);
                break;
            case 'not':
                mindMapGraph.addNotGate(centerX, centerY, 100, 50, "Not Gate", paper);
                break;
            case 'nor':
                mindMapGraph.addNorGate(centerX, centerY, 100, 50, "Nor Gate", paper);
                break;
            case 'nand':
                mindMapGraph.addNandGate(centerX, centerY, 100, 50, "Nand Gate", paper);
                break;
            case 'xor':
                mindMapGraph.addXorGate(centerX, centerY, 100, 50, "Xor Gate", paper);
                break;
            case 'xnor':
                mindMapGraph.addXnorGate(centerX, centerY, 100, 50, "Xnor Gate", paper);
                break;
            case 'gate11':
                mindMapGraph.addGate11(centerX, centerY, 100, 50, "Gate 11", paper);
                break;
            case 'gate21':
                mindMapGraph.addGate21(centerX, centerY, 100, 50, "Gate 21", paper);
                break;
            case 'input':
                mindMapGraph.addInput(centerX, centerY, 100, 50, "Input Gate", paper);
                break;
            case 'output':
                mindMapGraph.addOutput(centerX, centerY, 100, 50, "Output Gate", paper);
                break;
            case 'io':
                mindMapGraph.addIO(centerX, centerY, 100, 50, "IO Gate", paper);
                break;
            case 'repeater':
                mindMapGraph.addRepeater(centerX, centerY, 100, 50, "Repeater", paper);
                break;
            case 'wire':
                mindMapGraph.addWire(centerX, centerY, 100, 50, "Wire", paper);
                break;
            case 'entity':
                mindMapGraph.addEntity(centerX, centerY, 100, 50, "Entity", paper);
                break;
            case 'weak entity':
                mindMapGraph.addWeakEntity(centerX, centerY, 100, 50, "Weak Entity", paper);
                break;
            case 'abstract':
                mindMapGraph.addAbstract(centerX, centerY, 100, 50, "Abstract", paper);
                break;
            case 'attribute':
                mindMapGraph.addAttribute(centerX, centerY, 100, 50, "Attribute", paper);
                break;
            case 'isa':
                mindMapGraph.addIsA(centerX, centerY, 100, 50, "ISA", paper);
                break;
            case 'identifying':
                mindMapGraph.addIdentifyingRelationship(centerX, centerY, 100, 50, "Identifying Relationship", paper);
                break;
            case 'class':
                mindMapGraph.addClass(centerX, centerY, 100, 50, "Class", paper);
                break;
            case 'key':
                mindMapGraph.addKey(centerX, centerY, 100, 50, "Key", paper);
                break;
            case 'derived':
                mindMapGraph.addDerived(centerX, centerY, 100, 50, "Derived", paper);
                break;
            case 'multivalued':
                mindMapGraph.addMultivalued(centerX, centerY, 100, 50, "Multivalued", paper);
                break;
            case 'relationship':
                mindMapGraph.addRelationship(centerX, centerY, 100, 50, "Relationship", paper);
                break;
            case 'state':
                mindMapGraph.addState(centerX, centerY, 100, 50, "State", paper);
                break;
            case 'normal':
                mindMapGraph.addNormal(centerX, centerY, 100, 50, "Normal", paper);
                break;
            case 'star state':
                mindMapGraph.addStarState(centerX, centerY, 100, 50, "Star State", paper);
                break;
            case 'end state':
                mindMapGraph.addEndState(centerX, centerY, 100, 50, "End State", paper);
                break;
            case 'transition':
                mindMapGraph.addTransition(centerX, centerY, 100, 50, "State", paper);
                break;
            case 'interface':
                mindMapGraph.addInterface(centerX, centerY, 100, 50, "Interface", paper);
                break;
            case 'aggregation':
                mindMapGraph.addAggregation(centerX, centerY, 100, 50, "Aggregation", paper);
                break;
            case 'composition':
                mindMapGraph.addComposition(centerX, centerY, 100, 50, "Composition", paper);
                break;
            case 'association':
                mindMapGraph.addAssociation(centerX, centerY, 100, 50, "Association", paper);
                break;
            case 'generalization':
                mindMapGraph.addGeneralization(centerX, centerY, 100, 50, "Generalization", paper);
                break;
            // Add more shape types as needed
        }
    };

    return (
        <div className="container-fluid mind-map-container">
            <header className="row mb-3 method-label">
                <h1 className="col method-label session-name">Session Name</h1>
                <h2 className="technique-name">Technique: Mind Mapping</h2>
            </header>
            <main className="row main-space">
                <div className="graph-space card">
                    <div className="card-header">
                        <ul className={"nav nav-tabs card-header-tabs"}>
                            <li className={"nav-items"}>
                                <a className={"nav-link active"} aria-current={"true"} href={"#"}>This Diagram</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href={"#"}>+</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"card-body"}>
                        <div ref={graphContainerRef} id="modelCanvas"/>
                        <aside className="overflow-y-scroll tool-box">
                            <h1 className={"title"}>Tool Box</h1>
                            <div className={"tools simple-tools mb-3"}>
                                <h1 className={"sub-tool"}>Simple Shapes</h1>
                                <div className={"d-flex flex-wrap gap-2"}>
                                    <button
                                        className="draggable circle-option"
                                        onClick={() => handleShapeAdd('circle')}
                                        aria-label="Add Circle"

                                    />
                                    <button
                                        className="draggable rectangle-option"
                                        onClick={() => handleShapeAdd('rectangle')}
                                        aria-label="Add Rectangle"
                                    />
                                    <button
                                        className="draggable triangle-option"
                                        onClick={() => handleShapeAdd('triangle')}
                                        aria-label="Add Triangle"
                                    />
                                    <button
                                        className="draggable ellipse-option"
                                        onClick={() => handleShapeAdd('ellipse')}
                                        aria-label="Add Ellipse"
                                    />
                                    <button
                                        className="draggable cylinder-option"
                                        onClick={() => handleShapeAdd('cylinder')}
                                        aria-label="Add Cylinder"
                                    />
                                    <button
                                        className="draggable image-option"
                                        onClick={() => handleShapeAdd('image')}
                                        aria-label="Add Image"
                                    >
                                        img
                                    </button>
                                    <button
                                        className="draggable text-option"
                                        onClick={() => handleShapeAdd('text')}
                                        aria-label="Add Text"
                                    >
                                        Text
                                    </button>
                                    <button
                                        className="draggable link-option"
                                        onClick={() => handleShapeAdd('link')}
                                        aria-label="Add Link"
                                    />
                                    <button
                                        className="draggable double-link-option"
                                        onClick={() => handleShapeAdd('double link')}
                                        aria-label="Add Double Link"
                                    />
                                </div>
                            </div>

                            <div className={"tools erd-tools mb-3"}>

                                <h1 className={"sub-tool"}>ERD Shapes</h1>
                                <div className={"d-flex flex-wrap gap-2"}>
                                    <button
                                        className="draggable erd entity"
                                        onClick={() => handleShapeAdd('entity')}
                                        aria-label="Add Entity"
                                    />
                                    <button
                                        className="draggable erd weak-entity"
                                        onClick={() => handleShapeAdd('weak entity')}
                                        aria-label="Add Weak-Entity"
                                    />
                                    <button
                                        className="draggable erd key"
                                        onClick={() => handleShapeAdd('key')}
                                        aria-label="Add Key"
                                    />
                                    <button
                                        className="draggable erd attribute"
                                        onClick={() => handleShapeAdd('attribute')}
                                        aria-label="Add Attribute"
                                    />
                                    <button
                                        className="draggable erd is-a"
                                        onClick={() => handleShapeAdd('isa')}
                                        aria-label="Add IS-A Relationship"
                                    />
                                    <button
                                        className="draggable erd derived"
                                        onClick={() => handleShapeAdd('derived')}
                                        aria-label="Add Derived"
                                    />
                                    <button
                                        className="draggable erd identifying-relationship"
                                        onClick={() => handleShapeAdd('identifying')}
                                        aria-label="Add Identifying Relationship"
                                    />
                                    <button
                                        className="draggable erd multivalued"
                                        onClick={() => handleShapeAdd('multivalued')}
                                        aria-label="Add Multivalued Attribute"
                                    />
                                    <button
                                        className="draggable erd relationship"
                                        onClick={() => handleShapeAdd('relationship')}
                                        aria-label="Add Relationship"
                                    />
                                </div>

                            </div>
                            <div className={"tools uml-tools mb-3"}>
                                <h1 className={"sub-tool"}>UML Shapes</h1>
                                <div className={"d-flex flex-wrap gap-2"}>
                                    <button
                                        className="draggable uml class"
                                        onClick={() => handleShapeAdd('class')}
                                        aria-label="Add Class"
                                    />
                                    <button
                                        className="draggable uml abstract"
                                        onClick={() => handleShapeAdd('abstract')}
                                        aria-label="Add Abstract"
                                    />
                                    <button
                                        className="draggable uml interface"
                                        onClick={() => handleShapeAdd('interface')}
                                        aria-label="Add Interface"
                                    />
                                    <button
                                        className="draggable uml generalization"
                                        onClick={() => handleShapeAdd('generalization')}
                                        aria-label="Add Generalization"
                                    />
                                    <button
                                        className="draggable uml aggregation"
                                        onClick={() => handleShapeAdd('aggregation')}
                                        aria-label="Add Aggregation"
                                    />
                                    <button
                                        className="draggable uml association"
                                        onClick={() => handleShapeAdd('association')}
                                        aria-label="Add Association"
                                    />
                                    <button
                                        className="draggable uml state"
                                        onClick={() => handleShapeAdd('state')}
                                        aria-label="Add State"
                                    />
                                    <button
                                        className="draggable uml star-state"
                                        onClick={() => handleShapeAdd('star state')}
                                        aria-label="Add Star State"
                                    />
                                    <button
                                        className="draggable uml end-state"
                                        onClick={() => handleShapeAdd('end state')}
                                        aria-label="Add End State"
                                    />
                                    <button
                                        className="draggable uml transition"
                                        onClick={() => handleShapeAdd('transition')}
                                        aria-label="Add Transition"
                                    />
                                </div>
                            </div>

                            <div className={"tools logic-tools mb-3"}>
                                <h1 className={"sub-tool"}>Logic Shapes</h1>
                                <div className={"d-flex flex-wrap mb-3"}>
                                    <button
                                        className="draggable gate and-gate"
                                        onClick={() => handleShapeAdd('and')}
                                        aria-label="Add And Logic Gate"
                                    />
                                    <button
                                        className="draggable gate or-gate"
                                        onClick={() => handleShapeAdd('or')}
                                        aria-label="Add Or Logic Gate"
                                    />

                                    <button
                                        className="draggable gate not-gate"
                                        onClick={() => handleShapeAdd('not')}
                                        aria-label="Add Not Logic Gate"
                                    />

                                    <button
                                        className="draggable gate nor-gate"
                                        onClick={() => handleShapeAdd('nor')}
                                        aria-label="Add Nor Logic Gate"
                                    />

                                    <button
                                        className="draggable gate xor-gate"
                                        onClick={() => handleShapeAdd('xor')}
                                        aria-label="Add Xor Logic Gate"
                                    />
                                    <button
                                        className="draggable gate gate-11"
                                        onClick={() => handleShapeAdd('gate11')}
                                        aria-label="Add Gate 11"
                                    />
                                    <button
                                        className="draggable gate gate-21"
                                        onClick={() => handleShapeAdd('gate21')}
                                        aria-label="Add Gate 21"
                                    />
                                    <button
                                        className="draggable gate xnor-gate"
                                        onClick={() => handleShapeAdd('xnor')}
                                        aria-label="Add XNor Logic Gate"
                                    />

                                    <button
                                        className="draggable gate repeater"
                                        onClick={() => handleShapeAdd('repeater')}
                                        aria-label="Add Repeater"
                                    />

                                    <button
                                        className="draggable gate input-gate"
                                        onClick={() => handleShapeAdd('input')}
                                        aria-label="Add Input Gate"
                                    />
                                    <button
                                        className="draggable gate output-gate"
                                        onClick={() => handleShapeAdd('output')}
                                        aria-label="Add Output Gate"
                                    />
                                    <button
                                        className="draggable gate io-gate"
                                        onClick={() => handleShapeAdd('io')}
                                        aria-label="Add IO Gate"
                                    />
                                    <button
                                        className="draggable gate wire"
                                        onClick={() => handleShapeAdd('wire')}
                                        aria-label="Add Wire"
                                    />
                                </div>
                            </div>

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
            </main>
        </div>
    );
};

export default MindMapPage;