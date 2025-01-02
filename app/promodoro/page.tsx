import "./promodoro.modules.css";
import Clock from "@/app/components/clock/page";

export default function Promodoro() {
    return (
        <>
            <div className={"method-label"}>
                <h1 className={"session-name"}>Session Name</h1>
                <br/>
                <h2 className={"technique-name"}>Technique Promodoro</h2>
            </div>
            <Clock/>
        </>
    );
}