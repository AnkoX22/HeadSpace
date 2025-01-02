import "./clock.modules.css";


export default function Clock() {
    return (
        <>
            <div className={"circle"}>
                <h1 className={"timer"}>25:00</h1>
            </div>

            <div className={"timer-buttons"}>
                <button className={"start-button"}>Start</button>
                <button className={"pause-button"}>Pause</button>
            </div>
        </>
            )}