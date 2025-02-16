import 'bootstrap/dist/css/bootstrap.min.css';
import {MindMapGraph} from "@/app/mind_mapping/components/graphSpace";
import {dia} from "jointjs";
import "./toolbar.modules.css";
import React, { useRef, useState} from "react";
import UpArrow from "../../../public/up-arrow-svgrepo-com.svg";
import DownArrow from "../../../public/down-arrow-5-svgrepo-com.svg";

interface ToolBarProps {
    mindGraphMapRef: React.RefObject<MindMapGraph|null>
    paperRef: React.RefObject<dia.Paper|null>
}

export default function ToolBar({ mindGraphMapRef, paperRef }: ToolBarProps) {

    const [isExtended, setIsExtended] = useState(true);

    const extendArrowRef = useRef<SVGSVGElement>(null);
    const shrinkArrowRef =  useRef<SVGSVGElement>(null);
    const toolbarRef =  useRef<HTMLDivElement>(null);



    const handleShapeAdd = (shapeName: string) => {
        if (!mindGraphMapRef.current || !paperRef.current) {
            console.error("MindMapGraph or Paper is not initialized!");
            return;
        }

        const mindMapGraph = mindGraphMapRef.current;
        const paper = paperRef.current;
        const centerX = window.innerWidth * 0.5;
        const centerY = window.innerHeight * 0.5;

        switch (shapeName) {
            case 'rectangle':
                mindMapGraph.addRectangle(centerX, centerY, 100, 50, "", paper);
                break;
            case 'circle':
                mindMapGraph.addCircle(centerX, centerY, 100, 50, "", paper);
                break;
            case 'triangle':
                mindMapGraph.addTriangle(centerX, centerY, 100, 50, "", paper);
                break;
            case 'ellipse':
                mindMapGraph.addEllipse(centerX, centerY, 100, 50, "", paper);
                break;
            case 'cylinder':
                mindMapGraph.addCylinder(centerX, centerY, 100, 50, "", paper);
                break;
            case 'text':
                mindMapGraph.addText(centerX, centerY, 50, 50);
                break;
            case 'image':
                mindMapGraph.addImage(centerX, centerY, 100, 50);
                break;
            case 'link':
                mindMapGraph.addLink(centerX, centerY, 100, 50, "", paper);
                break;
            case 'double link':
                mindMapGraph.addDoubleLink(centerX, centerY, 100, 50, "", paper);
                break;
            case 'and':
                mindMapGraph.addAndGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'or':
                mindMapGraph.addOrGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'not':
                mindMapGraph.addNotGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'nor':
                mindMapGraph.addNorGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'nand':
                mindMapGraph.addNandGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'xor':
                mindMapGraph.addXorGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'xnor':
                mindMapGraph.addXnorGate(centerX, centerY, 100, 50, "", paper);
                break;
            case 'gate11':
                mindMapGraph.addGate11(centerX, centerY, 100, 50, "", paper);
                break;
            case 'gate21':
                mindMapGraph.addGate21(centerX, centerY, 100, 50, "", paper);
                break;
            case 'input':
                mindMapGraph.addInput(centerX, centerY, 100, 50, "", paper);
                break;
            case 'output':
                mindMapGraph.addOutput(centerX, centerY, 100, 50, "", paper);
                break;
            case 'io':
                mindMapGraph.addIO(centerX, centerY, 100, 50, "", paper);
                break;
            case 'repeater':
                mindMapGraph.addRepeater(centerX, centerY, 100, 50, "", paper);
                break;
            case 'wire':
                mindMapGraph.addWire(centerX, centerY, 100, 50, "", paper);
                break;
            case 'entity':
                mindMapGraph.addEntity(centerX, centerY, 100, 50, "", paper);
                break;
            case 'weak entity':
                mindMapGraph.addWeakEntity(centerX, centerY, 100, 50, "", paper);
                break;
            case 'abstract':
                mindMapGraph.addAbstract(centerX, centerY, 100, 50, "", paper);
                break;
            case 'attribute':
                mindMapGraph.addAttribute(centerX, centerY, 100, 50, "", paper);
                break;
            case 'isa':
                mindMapGraph.addIsA(centerX, centerY, 100, 50, "", paper);
                break;
            case 'identifying':
                mindMapGraph.addIdentifyingRelationship(centerX, centerY, 100, 50, "", paper);
                break;
            case 'class':
                mindMapGraph.addClass(centerX, centerY, 100, 50, "", paper);
                break;
            case 'key':
                mindMapGraph.addKey(centerX, centerY, 100, 50, "", paper);
                break;
            case 'derived':
                mindMapGraph.addDerived(centerX, centerY, 100, 50, "", paper);
                break;
            case 'multivalued':
                mindMapGraph.addMultivalued(centerX, centerY, 100, 50, "", paper);
                break;
            case 'relationship':
                mindMapGraph.addRelationship(centerX, centerY, 100, 50, "", paper);
                break;
            case 'state':
                mindMapGraph.addState(centerX, centerY, 100, 50, "", paper);
                break;
            case 'normal':
                mindMapGraph.addNormal(centerX, centerY, 100, 50, "", paper);
                break;
            case 'star state':
                mindMapGraph.addStarState(centerX, centerY, 100, 50, "", paper);
                break;
            case 'end state':
                mindMapGraph.addEndState(centerX, centerY, 100, 50, "", paper);
                break;
            case 'transition':
                mindMapGraph.addTransition(centerX, centerY, 100, 50, "", paper);
                break;
            case 'interface':
                mindMapGraph.addInterface(centerX, centerY, 100, 50, "", paper);
                break;
            case 'aggregation':
                mindMapGraph.addAggregation(centerX, centerY, 100, 50, "", paper);
                break;
            case 'composition':
                mindMapGraph.addComposition(centerX, centerY, 100, 50, "", paper);
                break;
            case 'association':
                mindMapGraph.addAssociation(centerX, centerY, 100, 50, "", paper);
                break;
            case 'generalization':
                mindMapGraph.addGeneralization(centerX, centerY, 100, 50, "", paper);
                break;
            // Add more shape types as needed
        }
    };

    const handleExtend = () =>{
      setIsExtended(true);
     // toolbar?.classList.add("extended");
        toolbarRef.current?.classList.remove("shrink");
    }

    const handleShrink = () => {
        setIsExtended(false);
        toolbarRef.current?.classList.add("shrink");
        // toolbar?.classList.remove("extended");
    }
    extendArrowRef.current?.addEventListener('click', handleExtend);
    shrinkArrowRef.current?.addEventListener('click', handleShrink);

    return (
        < div id ="toolbar" ref={toolbarRef}>
           <div className={"header"}>
               <h1 className={"title "}>Tool Box </h1>
               {!isExtended ? <UpArrow width="32" height="32" opacity="0.5" className={"arrow"} ref={extendArrowRef} id={"extend-arrow"}/> : <DownArrow width="32" height="32" opacity="0.5" ref={shrinkArrowRef} className={"arrow"} id={"shrink-arrow"}/>}
           </div>
            <div className={"tools simple-tools"}>
                <h1 className={"sub-tool"}>Simple Shapes</h1>
                <div className={"d-flex flex-wrap gap-2"}>
                    <button
                        className="draggable circle-option"
                        onClick={() => handleShapeAdd('circle')}
                        aria-label="Add Circle"

                    ></button>
                    <button
                        className="draggable rectangle-option"
                        onClick={() => handleShapeAdd('rectangle')}
                        aria-label="Add Rectangle"
                    >
                    </button>
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
        </div>
    );
}