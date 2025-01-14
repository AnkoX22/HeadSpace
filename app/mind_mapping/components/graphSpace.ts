import { dia, elementTools, linkTools, shapes } from 'jointjs';
import 'jointjs/css/layout.css';

export class MindMapGraph {
    private readonly graph: dia.Graph;
    private paper: dia.Paper | undefined;


    shapesMap: Record<string, string> = {};

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
            gridSize: 20,
            drawGrid: true, // pre-defined pattern with default settings
            snapLinks: { radius: 20 }, // Snap links to nearby points
            snapToGrid: true, // Snap elements to the grid
           /* background: {
                color: '#F8F9FA'
            }, */
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

    // Standard and Basic shapes

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
                    fontFamily: 'Arial, sans-serif',
                    magnet: true
                }
            }
        });

        this.shapesMap["circle"] = paper.svg.innerHTML;

        circle.addTo(this.graph);
        this.addTools(paper, circle);
        return circle;
    }

    addEllipse(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper){
        const ellipse = new shapes.standard.Ellipse({
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
                    fontFamily: 'Arial, sans-serif',
                    magnet: true
                }
            }
        });


        ellipse.addTo(this.graph);
        this.addTools(paper, ellipse);
        return ellipse;
    }

    addCylinder(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper){
        const cylinder = new shapes.standard.Cylinder({
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
                    fontFamily: 'Arial, sans-serif',
                    magnet: true
                }
            }
        });


        cylinder.addTo(this.graph);
        this.addTools(paper, cylinder);
        return cylinder;
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
                    fontFamily: 'Arial, sans-serif',
                    magnet: true
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
                    refY: '80%',
                    magnet: true
                }
            }
        });
        triangle.addTo(this.graph);
        this.addTools(paper, triangle);
        return triangle;
    }


    addImage(x: number, y: number, width: number, height: number){
        const image = new shapes.standard.Image();
        image.position(x,y);
        image.resize(width,height);
        image.attr('root/title', 'shapes.standard.Image');
        image.attr('label/text', 'Image');
        image.attr('image/xlinkHref', 'image.png');

        image.addTo(this.graph);


        return image;
    }

    addText(x: number, y: number, width: number, height: number){
        const text = new shapes.standard.TextBlock();
        text.resize(width, height);
        text.position(x,y);
        text.attr('root/title', 'shapes.standard.TextBlock');
        text.attr('body/fill', 'pink');
        text.attr('label/text', 'Text Example');
        text.attr('label/style/color', 'charcoal');

        text.addTo(this.graph);

        return text;
    }

    addPath(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const path = new shapes.standard.Path({
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
                    fontFamily: 'Arial, sans-serif',
                    refY: '80%',
                    magnet: true
                }
            }
        });
        path.addTo(this.graph);
        this.addTools(paper, path);
        return path;
    }

    addHeaderedRect(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const headeredRect = new shapes.standard.HeaderedRectangle({
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
                    fontFamily: 'Arial, sans-serif',
                    refY: '80%',
                    magnet: true
                }
            }
        });

        headeredRect.addTo(this.graph);
        this.addTools(paper, headeredRect);
        return headeredRect;
    }

    addLink(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const link = new shapes.standard.Link()
        // transition.position(x, y);
        // transition.resize(width, height);
        link.addTo(this.graph);
        this.addLinkTools(paper, link);
        return link;
    }

    addDoubleLink(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const doubleLink = new shapes.standard.DoubleLink();
        // transition.position(x, y);
        // transition.resize(width, height);
        doubleLink.addTo(this.graph);
        this.addLinkTools(paper, doubleLink);
        return doubleLink;
    }


    /*
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
    */

    /*
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
    */


    private addTools(paper: dia.Paper, element: dia.Element) {
        const toolsView = new dia.ToolsView({
            tools: [
                new elementTools.Remove({
                    offset: { x: 0, y: 0 },
                    focusOpacity: 0.5,
                    action: () => {
                        element.remove();
                    },
                    scale: 1,
                }),
                new elementTools.Boundary({
                    padding: 5,
                    rotate: true,
                    useModelGeometry: true,
                    attributes: {
                        fill: 'none',
                        stroke: '#2C3E50',
                        'stroke-width': 1,
                        'stroke-dasharray': '5,5'
                    }
                }),
                new elementTools.Connect({
                    offset: {x: 50, y: 50},
                    targetAttribute: 'class'
                }),
                new elementTools.HoverConnect({
                    useModelGeometry: true,
                   // trackPath: (view) => view.model.attr(['body', 'd'])
                }),
            ]
        });

        const elementView = element.findView(paper);
        if (elementView) {
            elementView.addTools(toolsView);
            paper.on('element:mouseenter', (elementView) => {
                elementView.showTools();
            });

            paper.on('element:mouseleave', (elementView) => {
                elementView.hideTools();
            });
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


    // ERD shapes

    addKey(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const key = new shapes.erd.Key();
        key.position(x, y);
        key.resize(width, height);
        key.addTo(this.graph);
        this.addTools(paper, key);
        return key;
    }

    addEntity(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const entity = new shapes.erd.Entity();
        entity.position(x, y);
        entity.resize(width, height);
        entity.addTo(this.graph);
        this.addTools(paper, entity);
        return entity;
    }

    addWeakEntity(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const weakEntity = new shapes.erd.WeakEntity();
        weakEntity.position(x, y);
        weakEntity.resize(width, height);
        weakEntity.addTo(this.graph);
        this.addTools(paper, weakEntity);
        return weakEntity;
    }

    addIsA(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const isa = new shapes.erd.ISA()
        isa.position(x, y);
        isa.resize(width, height);
        isa.addTo(this.graph);
        this.addTools(paper, isa);
        return isa;
    }

    addAttribute(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const attribute = new shapes.erd.Attribute()
        attribute.position(x, y);
        attribute.resize(width, height);
        attribute.addTo(this.graph);
        this.addTools(paper, attribute);
        return attribute;
    }

    addDerived(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const derived = new shapes.erd.Derived();
        derived.position(x, y);
        derived.resize(width, height);
        derived.addTo(this.graph);
        this.addTools(paper, derived);
        return derived;
    }

    addNormal(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const normal = new shapes.erd.Normal();
        normal.position(x, y);
        normal.resize(width, height);
        normal.addTo(this.graph);
        this.addTools(paper, normal);
        return normal;
    }

    addIdentifyingRelationship(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const identifyingRelationship = new shapes.erd.IdentifyingRelationship();
        identifyingRelationship.position(x, y);
        identifyingRelationship.resize(width, height);
        identifyingRelationship.addTo(this.graph);
        this.addTools(paper, identifyingRelationship);
        return identifyingRelationship;
    }

    addMultivalued(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const multivalued = new shapes.erd.Multivalued();
        multivalued.position(x, y);
        multivalued.resize(width, height);
        multivalued.addTo(this.graph);
        this.addTools(paper, multivalued);
        return multivalued;
    }

    addRelationship(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const relationship = new shapes.erd.Relationship();
        relationship.position(x, y);
        relationship.resize(width, height);
        relationship.addTo(this.graph);
        this.addTools(paper, relationship);
        return relationship;
    }




    // UML shapes

    addAbstract(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const abstract = new shapes.uml.Abstract();
        abstract.position(x, y);
        abstract.resize(width, height);
        abstract.addTo(this.graph);
        this.addTools(paper, abstract);
        return abstract;
    }

    addClass(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const class1 = new shapes.uml.Class();
        class1.position(x, y);
        class1.resize(width, height);
        class1.addTo(this.graph);
        this.addTools(paper, class1);
        return class1;
    }

    addInterface(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const interface1 = new shapes.uml.Interface();
        interface1.position(x, y);
        interface1.resize(width, height);
        interface1.addTo(this.graph);
        this.addTools(paper, interface1);
        return interface1;
    }


    addState(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const state = new shapes.uml.State();
        state.position(x, y);
        state.resize(width, height);
        state.addTo(this.graph);
        this.addTools(paper, state);
        return state;
    }

    addStarState(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const starState = new shapes.uml.StartState();
        starState.position(x, y);
        starState.resize(width, height);
        starState.addTo(this.graph);
        this.addTools(paper, starState);
        return starState;
    }
    addEndState(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const endState = new shapes.uml.EndState();
        endState.position(x, y);
        endState.resize(width, height);
        endState.addTo(this.graph);
        this.addTools(paper, endState);
        return endState;
    }

    addTransition(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const transition = new shapes.uml.Transition();
       // transition.position(x, y);
        // transition.resize(width, height);
        transition.addTo(this.graph);
        this.addLinkTools(paper, transition);
        return transition;
    }

    addAggregation(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const aggregation = new shapes.uml.Aggregation();
        // wire.position(x, y);
        // wire.resize(width, height);
        aggregation.addTo(this.graph);
        this.addLinkTools(paper, aggregation);
        return aggregation;
    }

    addComposition(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const composition = new shapes.uml.Composition();
        // wire.position(x, y);
        // wire.resize(width, height);
        composition.addTo(this.graph);
        this.addLinkTools(paper, composition);
        return composition;
    }

    addAssociation(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const association = new shapes.uml.Association();
        // wire.position(x, y);
        // wire.resize(width, height);
        association.addTo(this.graph);
        this.addLinkTools(paper, association);
        return association;
    }

    addGeneralization(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const generalization = new shapes.uml.Generalization();
        // wire.position(x, y);
        // wire.resize(width, height);
        generalization.addTo(this.graph);
        this.addLinkTools(paper, generalization);
        return generalization;
    }

    // Logic Shapes

    addAndGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const andGate = new shapes.logic.And();
        andGate.position(x, y);
        andGate.resize(width, height);
        andGate.addTo(this.graph);
        this.addTools(paper, andGate);
        return andGate;

    }

    addXorGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const xorGate = new shapes.logic.Xor();
        xorGate.position(x, y);
        xorGate.resize(width, height);
        xorGate.addTo(this.graph);
        this.addTools(paper, xorGate);
        return xorGate;
    }

    addNotGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const notGate = new shapes.logic.Not();
        notGate.position(x, y);
        notGate.resize(width, height);
        notGate.addTo(this.graph);
        this.addTools(paper, notGate);
        return notGate;
    }


    addNorGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const norGate = new shapes.logic.Nor();
        norGate.position(x, y);
        norGate.resize(width, height);
        norGate.addTo(this.graph);
        this.addTools(paper, norGate);
        return norGate;
    }

    addOrGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const orGate = new shapes.logic.Or();
        orGate.position(x, y);
        orGate.resize(width, height);
        orGate.addTo(this.graph);
        this.addTools(paper, orGate);
        return orGate;
    }

    addNandGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const nandGate = new shapes.logic.Nand();
        nandGate.position(x, y);
        nandGate.resize(width, height);
        nandGate.addTo(this.graph);
        this.addTools(paper, nandGate);
        return nandGate;
    }


    addGate11(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const gate11 = new shapes.logic.Gate11();
        gate11.position(x, y);
        gate11.resize(width, height);
        gate11.addTo(this.graph);
        this.addTools(paper, gate11);
        return gate11;
    }

    addGate21(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const gate21 = new shapes.logic.Gate21();
        gate21.position(x, y);
        gate21.resize(width, height);
        gate21.addTo(this.graph);
        this.addTools(paper, gate21);
        return gate21;
    }

    addInput(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const input = new shapes.logic.Input();
        input.position(x, y);
        input.resize(width, height);
        input.addTo(this.graph);
        this.addTools(paper, input);
        return input;
    }

    addIO(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const io = new shapes.logic.IO()
        io.position(x, y);
        io.resize(width, height);
        io.addTo(this.graph);
        this.addTools(paper, io);
        return io;
    }

    addOutput(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const output = new shapes.logic.Output();
        output.position(x, y);
        output.resize(width, height);
        output.addTo(this.graph);
        this.addTools(paper, output);
        return output;
    }
    addRepeater(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const repeater = new shapes.logic.Repeater();
        repeater.position(x, y);
        repeater.resize(width, height);
        repeater.addTo(this.graph);
        this.addTools(paper, repeater);
        return repeater;
    }

    addWire(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const wire = new shapes.logic.Wire();
       // wire.position(x, y);
        // wire.resize(width, height);
        wire.addTo(this.graph);
        this.addLinkTools(paper, wire);
        return wire;
    }

    addXnorGate(x: number, y: number, width: number, height: number, label: string, paper: dia.Paper) {
        const xnorGate = new shapes.logic.Xnor()
        xnorGate.position(x, y);
        xnorGate.resize(width, height);
        xnorGate.addTo(this.graph);
        this.addTools(paper, xnorGate);
        return xnorGate;
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