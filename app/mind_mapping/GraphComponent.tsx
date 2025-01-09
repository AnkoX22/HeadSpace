import React, { useEffect, useRef } from 'react';
import { GraphManager } from './GraphManager';

const GraphComponent: React.FC = () => {
    const graphContainerRef = useRef<HTMLDivElement>(null);
    const graphManagerRef = useRef<GraphManager | null>(null);

    useEffect(() => {
        if (graphContainerRef.current) {
            const graphManager = new GraphManager();
            graphManagerRef.current = graphManager;

            // Initialize the paper
            graphManager.initializePaper(graphContainerRef.current, 800, 600);

            // Add shapes and links
            graphManager.addRectangle(50, 50, 100, 50, 'Node 1');
            graphManager.addRectangle(300, 50, 100, 50, 'Node 2');
            graphManager.addLink('1', '2'); // Replace '1' and '2' with actual IDs if required
        }
    }, []);

    return <div ref={graphContainerRef} style={{ border: '1px solid black', width: '800px', height: '600px' }} />;
};

export default GraphComponent;
