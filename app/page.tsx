import "./main.modules.css";

export default function Home() {
  return (
      <>
          <div className={"main-section"}>
              <h1 className={"main-title"}>Choose your Method!</h1>
              <div className={"log-in-options"}>
                  <div className={"button-group"}>
                      <button className={"button log-in-button"}>Log in</button>
                      <button className={"button sign-up-button"}>Sign up</button>
                  </div>
                  <div className={"link-group"}>
                      <a href={''} className={"link"}>Log in via Google</a>
                      <a href={''} className={"link"}>Log in via Github</a>
                  </div>
              </div>
          </div>
      </>
  );
}
