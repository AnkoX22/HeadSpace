import {dia, elementTools, shapes} from '@joint/core';

export class MindMapGraph {
    private graph: dia.Graph;
    private paper: dia.Paper;

    constructor(container: HTMLElement) {
        // Initialize graph and paper
        this.graph = new dia.Graph();
        this.paper = new dia.Paper({
            el: container,
            model: this.graph,
            width: 800,
            height: 600,
            gridSize: 10,
        });
    }

    // Add a circle
    addCircle(label: string, position: {x:number; y: number}){
        const circle = new shapes.standard.Circle();
        circle.position(position.x, position.y);
        circle.resize(100, 40);
        circle.attr({
            body: {fill: 'white'},
            label: {text: label, fill: 'black'},
        });
        circle.addTo(this.graph);
    }

    // Add a triangle
    addTriangle(label: string, position: {x:number, y: number}){
        const polygon = new shapes.standard.Polygon();
        polygon.resize(100, 40);
        polygon.position(position.x, position.y);
        polygon.attr({
            body: {fill: 'white'},
            label: {text: label, fill: 'black'},
        });
        polygon.addTo(this.graph);
    }


    // Add a node to the graph
    addNode(label: string, position: { x: number; y: number }) {
        const rect = new shapes.standard.Rectangle();
        rect.position(position.x, position.y);
        rect.resize(100, 40);
        rect.attr({
            body: { fill: 'blue' },
            label: { text: label, fill: 'white' },
        });
        rect.addTo(this.graph);
    }

    // Add a link between nodes
    addLink(sourceId: string, targetId: string) {
        const link = new shapes.standard.Link();
        link.source({ id: sourceId });
        link.target({ id: targetId });
        link.addTo(this.graph);
    }

    // Add link between nodes
    addDoubleLink(sourceId: string, targetId: string){
        const doubleLink = new shapes.standard.DoubleLink();
        doubleLink.source({id: sourceId});
        doubleLink.target({id:targetId});
        doubleLink.addTo(this.graph);
    }

    // Clear the graph
    clearGraph() {
        this.graph.clear();
    }

    addTools(paper: dia.Paper, element: shapes.standard.Rectangle){

        const removeButton = new elementTools.Remove();
        const boundaryTool = new elementTools.Boundary();
        const buttonTool = new elementTools.Button();
        const hoverTool = new elementTools.HoverConnect();
        const connectTool = new elementTools.Connect();
       // const controlTool = new elementTools.Control();

        const toolsView = new dia.ToolsView({
            tools: [
                removeButton,
                boundaryTool,
                hoverTool,
                connectTool,
                buttonTool
               // controlTool
            ]
        });

        const elementView = element.findView(paper);
        elementView.addTools(toolsView);

    }
}
