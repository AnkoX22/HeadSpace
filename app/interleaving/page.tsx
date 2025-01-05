import "./interleaving.modules.css"
import Clock from "@/app/components/clock/page";

export default function Interleaving() {
    return (
        <>
            <div className={"method-label"}>
                <h1 className={"session-name"}>Session Name</h1>
                <br/>
                <h2 className={"technique-name"}>Technique: Interleaving</h2>
            </div>

            <div className={"main-section"}>
                <div className={"topic-section"}>
                    <textarea className={"topic-text"} placeholder={"Topic 1"}></textarea>
                    <textarea className={"topic-text"} placeholder={"Topic 2"}></textarea>
                    <textarea className={"topic-text"} placeholder={"Topic 3"}></textarea>
                    <button className={"button add-topic"}>+</button>
                </div>

                <div className={"clock-section"}>

                    <div className={"clock-setting"}>
                        <button className={"button timer-button"}>Timer</button>
                        <button className={"button counter-button"}>Counter</button>
                    </div>

                    <Clock/>
                </div>
            </div>

        </>
    );
}