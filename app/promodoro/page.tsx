import "./promodoro.modules.css";
import Clock from "@/app/components/clock/page";

export default function Promodoro() {
    return (
        <main>
            <div className={"method-label"}>
                <h1 className={"session-name"}>Session Name</h1>
                <br/>
                <h2 className={"technique-name"}>Technique Promodoro</h2>
            </div>

           <main className={"text-center"} id={"clock"}>
               <Clock  style={{
                   height: 'calc(100% - 40px)',
                   width: 'calc(100%- 40px)'
               }}/>
           </main>

        </main>
    );
}