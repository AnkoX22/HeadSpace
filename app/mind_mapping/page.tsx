'use client'

import React, { useEffect, useRef } from "react";
import "./mapping.modules.css";
import { MindMapGraph } from './components/graphSpace';
import { dia } from "jointjs";


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
        const paper = mindMapGraph.initializePaper(container, 1500, 800);
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
            case 'IO':
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
        <div className="mind-map-container">
            <header className="method-label">
                <h1 className="session-name">Session Name</h1>
                <h2 className="technique-name">Technique: Mind Mapping</h2>
            </header>

            <main className="main-space">
                <aside className="tool-box">
                    <h1>Tool Box</h1>
                    <div className={"tools simple-tools"}>
                        <h1 className={"sub-tool"}>Simple Shapes</h1>
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
                            className="dragable triangle-option"
                            onClick={() => handleShapeAdd('triangle')}
                            aria-label="Add Triangle"
                        />
                        <button
                            className="dragabble ellipse-option"
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
                            <h3>img</h3>
                        </button>
                        <button
                            className="draggable text-option"
                            onClick={() => handleShapeAdd('text')}
                            aria-label="Add Text"
                        >
                            <h3>Text</h3>
                        </button>
                        <button
                            className="dragabble link-option"
                            onClick={() => handleShapeAdd('link')}
                            aria-label="Add Link"
                        />
                        <button
                            className="dragabble double-link-option"
                            onClick={() => handleShapeAdd('double link')}
                            aria-label="Add Double Link"
                        />
                    </div>

                    <div className={"tools erd-tools"}>

                        <h1 className={"sub-tool"}>ERD Shapes</h1>

                        <button
                            className="dragabble erd entity"
                            onClick={() => handleShapeAdd('entity')}
                            aria-label="Add Entity"
                        />
                        <button
                            className="dragabble erd weak-entity"
                            onClick={() => handleShapeAdd('weak entity')}
                            aria-label="Add Weak-Entity"
                        />
                        <button
                            className="dragabble erd key"
                            onClick={() => handleShapeAdd('key')}
                            aria-label="Add Key"
                        />
                        <button
                            className="dragabble erd attribute"
                            onClick={() => handleShapeAdd('attribute')}
                            aria-label="Add Attribute"
                        />
                        <button
                            className="dragabble erd is-a"
                            onClick={() => handleShapeAdd('isa')}
                            aria-label="Add IS-A Relationship"
                        />
                        <button
                            className="dragabble erd derived"
                            onClick={() => handleShapeAdd('derived')}
                            aria-label="Add Derived"
                        />
                        <button
                            className="dragabble erd identifying-relationship"
                            onClick={() => handleShapeAdd('identifying')}
                            aria-label="Add Identifying Relationship"
                        />
                        <button
                            className="dragabble erd multivalued"
                            onClick={() => handleShapeAdd('multivalued')}
                            aria-label="Add Multivalued Attribute"
                        />
                        <button
                            className="dragabble erd relationship"
                            aria-label="Add Relationship"
                        />

                    </div>
                    <div className={"tools uml-tools"}>
                        <h1 className={"sub-tool"}>UML Shapes</h1>
                        <button
                            className="dragabble uml class"
                            onClick={() => handleShapeAdd('class')}
                            aria-label="Add Class"
                        />
                        <button
                            className="dragabble uml abstract"
                            onClick={() => handleShapeAdd('abstract')}
                            aria-label="Add Abstract"
                        />
                        <button
                            className="dragabble uml interface"
                            onClick={() => handleShapeAdd('interface')}
                            aria-label="Add Interface"
                        />
                        <button
                            className="dragabble uml generalization"
                            onClick={() => handleShapeAdd('generalization')}
                            aria-label="Add Generalization"
                        />
                        <button
                            className="dragabble uml aggregation"
                            onClick={() => handleShapeAdd('aggregation')}
                            aria-label="Add Aggregation"
                        />
                        <button
                            className="dragabble uml association"
                            onClick={() => handleShapeAdd('association')}
                            aria-label="Add Association"
                        />
                        <button
                            className="dragabble uml state"
                            onClick={() => handleShapeAdd('state')}
                            aria-label="Add State"
                        />
                        <button
                            className="dragabble uml star-state"
                            onClick={() => handleShapeAdd('star state')}
                            aria-label="Add Star State"
                        />
                        <button
                            className="dragabble uml end-state"
                            onClick={() => handleShapeAdd('end state')}
                            aria-label="Add End State"
                        />
                        <button
                            className="dragabble uml transition"
                            onClick={() => handleShapeAdd('transition')}
                            aria-label="Add Transition"
                        />
                    </div>

                    <div className={"tools logic-tools"}>
                        <h1 className={"sub-tool"}>Logic Shapes</h1>
                        <button
                            className="dragabble gate and-gate"
                            onClick={() => handleShapeAdd('and')}
                            aria-label="Add And Logic Gate"
                        />
                        <button
                            className="dragabble gate or-gate"
                            onClick={() => handleShapeAdd('or')}
                            aria-label="Add Or Logic Gate"
                        />

                        <button
                            className="dragabble gate not-gate"
                            onClick={() => handleShapeAdd('not')}
                            aria-label="Add Not Logic Gate"
                        />

                        <button
                            className="dragabble gate nor-gate"
                            onClick={() => handleShapeAdd('nor')}
                            aria-label="Add Nor Logic Gate"
                        />

                        <button
                            className="dragabble gate xor-gate"
                            onClick={() => handleShapeAdd('xor')}
                            aria-label="Add Xor Logic Gate"
                        />
                        <button
                            className="dragabble gate gate-11"
                            onClick={() => handleShapeAdd('gate11')}
                            aria-label="Add Gate 11"
                        />
                        <button
                            className="dragabble gate gate-21"
                            onClick={() => handleShapeAdd('gate21')}
                            aria-label="Add Gate 21"
                        />
                        <button
                            className="dragabble gate xnor-gate"
                            onClick={() => handleShapeAdd('xnor')}
                            aria-label="Add XNor Logic Gate"
                        />

                        <button
                            className="dragabble gate reapeter"
                            onClick={() => handleShapeAdd('repeater')}
                            aria-label="Add Repeater"
                        />

                        <button
                            className="dragabble gate input-gate"
                            onClick={() => handleShapeAdd('input')}
                            aria-label="Add Input Gate"
                        />
                        <button
                            className="dragabble gate output-gate"
                            onClick={() => handleShapeAdd('output')}
                            aria-label="Add Output Gate"
                        />
                        <button
                            className="dragabble gate io-gate"
                            onClick={() => handleShapeAdd('io')}
                            aria-label="Add IO Gate"
                        />
                        <button
                            className="dragabble gate wire"
                            onClick={() => handleShapeAdd('wire')}
                            aria-label="Add Wire"
                        />
                    </div>

                </aside>

                <div className="graph-space">
                    <div ref={graphContainerRef} id="modelCanvas"/>
                </div>
            </main>
        </div>
    );
};

export default MindMapPage;