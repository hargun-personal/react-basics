import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  { id: "heading", aer: "abc" },
  "Hello World By React!"
);
const number = 1001;

const JSXHeading = ( 
    <h1 id="heading" className="head" tabIndex="5">
        Hello by JSX {number *18}
    </h1>
)

const TitleComponent = () => {
    return <h2>TitleComponent</h2>
}

// React Functional Componnet

const HeadingComponet = () => (
    <div id="container">
    {JSXHeading}
    {TitleComponent()}
    <TitleComponent/>
    <TitleComponent></TitleComponent>
        <h1 className="heading" >This is Functional component</h1>
    </div> 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet/>);
