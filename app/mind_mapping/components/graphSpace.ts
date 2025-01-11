import { dia, elementTools, linkTools, shapes } from 'jointjs';

export class MindMapGraph {
    private readonly graph: dia.Graph;
    private paper: dia.Paper | undefined;

    constructor() {
        this.graph = new dia.Graph();
    }

    initializePaper(container: HTMLDivElement, width: number, height: number): dia.Paper {
        if (!container) {
            throw new Error('Container element is not defined.');
        }

        this.paper = new dia.Paper({
            el: container,
            model: this.graph,
            width,
            height,
            gridSize: 10,
            drawGrid: true,
            background: {
                color: '#F8F9FA'
            },
            interactive: {
                vertexAdd: true,
                vertexMove: true,
                vertexRemove: true,
                arrowheadMove: true
            }
        });

        this.setupPaperEvents();
        return this.paper;
    }

    private setupPaperEvents(): void {
        if (!this.paper) return;

        this.paper.on('blank:pointerdown', () => {
            const elements = this.graph.getElements();
            elements.forEach(element => {
                const elementView = element.findView(this.paper!);
                if (elementView) elementView.hideTools();
            });
        });

        this.paper.on('element:pointerclick', (elementView) => {
            const elements = this.graph.getElements();
            elements.forEach(element => {
                const view = element.findView(this.paper!);
                if (view && view !== elementView) view.hideTools();
            });
        });
    }

    addCircle(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const circle = new shapes.standard.Circle({
            position: { x, y },
            size: { width, height },
            attrs: {
                body: {
                    fill: 'white',
                    stroke: '#2C3E50',
                    strokeWidth: 2
                },
                label: {
                    text: label,
                    fill: '#2C3E50',
                    fontSize: 14,
                    fontFamily: 'Arial, sans-serif'
                }
            }
        });
        circle.addTo(this.graph);
        this.addTools(paper, circle);
        return circle;
    }

    addRectangle(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const rect = new shapes.standard.Rectangle({
            position: { x, y },
            size: { width, height },
            attrs: {
                body: {
                    fill: 'white',
                    stroke: '#2C3E50',
                    strokeWidth: 2,
                    rx: 5,
                    ry: 5
                },
                label: {
                    text: label,
                    fill: '#2C3E50',
                    fontSize: 14,
                    fontFamily: 'Arial, sans-serif'
                }
            }
        });
        rect.addTo(this.graph);
        this.addTools(paper, rect);
        return rect;
    }

    addTriangle(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const triangle = new shapes.standard.Polygon({
            position: { x, y },
            size: { width, height },
            attrs: {
                body: {
                    fill: 'white',
                    stroke: '#2C3E50',
                    strokeWidth: 2,
                    points: '0,100 50,0 100,100'
                },
                label: {
                    text: label,
                    fill: '#2C3E50',
                    fontSize: 14,
                    fontFamily: 'Arial, sans-serif',
                    refY: '80%'
                }
            }
        });
        triangle.addTo(this.graph);
        this.addTools(paper, triangle);
        return triangle;
    }

    addLink(source: dia.Element, target: dia.Element, paper: dia.Paper) {
        const link = new shapes.standard.Link({
            source: { id: source.id },
            target: { id: target.id },
            attrs: {
                line: {
                    stroke: '#2C3E50',
                    strokeWidth: 2,
                    targetMarker: {
                        type: 'path',
                        d: 'M 10 -5 0 0 10 5 Z'
                    }
                }
            },
            router: { name: 'manhattan' },
            connector: { name: 'rounded' }
        });
        link.addTo(this.graph);
        this.addLinkTools(paper, link);
        return link;
    }

    addDoubleLink(source: dia.Element, target: dia.Element, paper: dia.Paper) {
        const link = new shapes.standard.DoubleLink({
            source: { id: source.id },
            target: { id: target.id },
            attrs: {
                line: {
                    stroke: '#2C3E50',
                    strokeWidth: 2
                }
            },
            router: { name: 'manhattan' },
            connector: { name: 'rounded' }
        });
        link.addTo(this.graph);
        this.addLinkTools(paper, link);
        return link;
    }

    private addTools(paper: dia.Paper, element: dia.Element) {
        const toolsView = new dia.ToolsView({
            tools: [
                new elementTools.Remove({
                    offset: { x: 0, y: 0 },
                    action: () => {
                        element.remove();
                    }
                }),
                new elementTools.Boundary({
                    padding: 5,
                    attributes: {
                        fill: 'none',
                        stroke: '#2C3E50',
                        'stroke-width': 1,
                        'stroke-dasharray': '5,5'
                    }
                }),
                new elementTools.Connect({
                    targetAttribute: 'class'
                }),
            ]
        });

        const elementView = element.findView(paper);
        if (elementView) {
            elementView.addTools(toolsView);
            elementView.hideTools();
        }
    }

    private addLinkTools(paper: dia.Paper, link: dia.Link) {
        const toolsView = new dia.ToolsView({
            tools: [
                new linkTools.Vertices(),
                new linkTools.Segments(),
                new linkTools.Remove(),
                new linkTools.SourceArrowhead(),
                new linkTools.TargetArrowhead(),
                new linkTools.Boundary({
                    padding: 5,
                    attributes: {
                        fill: 'none',
                        stroke: '#2C3E50',
                        'stroke-width': 1,
                        'stroke-dasharray': '5,5'
                    }
                })
            ]
        });

        const linkView = link.findView(paper);
        if (linkView) {
            linkView.addTools(toolsView);
            paper.on('link:mouseenter', (linkView) => {
                linkView.showTools();
            });

            paper.on('link:mouseleave', (linkView) => {
                linkView.hideTools();
            });
        }
    }

    clearGraph() {
        this.graph.clear();
    }

    getPaper(): dia.Paper | undefined {
        return this.paper;
    }

    getGraph(): dia.Graph {
        return this.graph;
    }
}