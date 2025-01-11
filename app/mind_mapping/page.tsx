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
        const rect1 = mindMapGraph.addRectangle(50, 50, 100, 50, "Node 1", paper);
        const rect2 = mindMapGraph.addRectangle(300, 50, 100, 50, "Node 2", paper);
        const circ1 = mindMapGraph.addCircle(150, 150, 100, 50, "Circle 1", paper);
        const trig1 = mindMapGraph.addTriangle(200, 250, 100, 50, "Triangle 1", paper);

        mindMapGraph.addDoubleLink(rect1, rect2, paper);
        mindMapGraph.addLink(circ1, trig1, paper);

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
                    <button
                        className="circle-option"
                        onClick={() => handleShapeAdd('circle')}
                        aria-label="Add Circle"
                    />
                    <button
                        className="rectangle-option"
                        onClick={() => handleShapeAdd('rectangle')}
                        aria-label="Add Rectangle"
                    />
                    <button
                        className="triangle-option"
                        onClick={() => handleShapeAdd('triangle')}
                        aria-label="Add Triangle"
                    />
                    <button
                        className="image-option"
                        onClick={() => console.log('Image feature coming soon')}
                        aria-label="Add Image"
                    >
                        <h3>img</h3>
                    </button>
                    <button
                        className="text-option"
                        onClick={() => console.log('Text feature coming soon')}
                        aria-label="Add Text"
                    >
                        <h3>Text</h3>
                    </button>
                </aside>

                <div className="graph-space">
                    <div ref={graphContainerRef} id="modelCanvas" />
                </div>
            </main>
        </div>
    );
};

export default MindMapPage;