import "@joint";
import {dia, shapes} from "jointjs";


export class GraphManager {
    private graph: dia.Graph;
    private paper: dia.Paper | undefined;

    constructor() {
        this.graph = new dia.Graph();
    }

    initializePaper(container: HTMLElement, width:number, height: number){
        this.paper = new dia.Paper({
            el: container,
            model: this.graph,
            width: width,
            height: height,
            gridSize: 10,
            drawGrid: true,
        });
    }
    addRectangle(x: number, y: number, width: number, height: number, label: string) {
        const rect = new shapes.standard.Rectangle();
        rect.position(x, y);
        rect.resize(width, height);
        rect.attr({
            body: {
                fill: 'blue',
            },
            label: {
                text: label,
                fill: 'white',
            },
        });
        rect.addTo(this.graph);
    }

    addLink(sourceId: string, targetId: string) {
        const link = new shapes.standard.Link();
        link.source({ id: sourceId });
        link.target({ id: targetId });
        link.addTo(this.graph);
    }
}