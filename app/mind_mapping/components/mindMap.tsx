"use client";

import React, { useEffect, useRef } from "react";
import {MindMapGraph} from "@/app/mind_mapping/components/graphSpace";

const MindMapClient: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const graphRef = useRef<MindMapGraph | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            graphRef.current = new MindMapGraph(containerRef.current);

            // Add some demo nodes
            graphRef.current.addNode("Start", { x: 100, y: 100 });
            graphRef.current.addNode("End", { x: 300, y: 300 });

            // Link the nodes
            graphRef.current.addLink("1", "2");
        }

        return () => {
            graphRef.current?.clearGraph(); // Cleanup when unmounted
        };
    }, []);

    return <div ref={containerRef} style={{ width: "800px", height: "600px", border: "1px solid black" }} />;
};

export default MindMapClient;
