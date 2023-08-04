import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namsate React");

//JSX ==>React.createElement ==> ReactElement - JS Object ==>HTMLElement(render)

//React Element
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Namsate React using JSX1
  </h1>
);

//React Functional Component
const Title = () => (
  <h1 id="heading" tabIndex="5">
    Namsate React using JSX
  </h1>
);
//Calling one component inside another component is called component composition
// here React element can be use in component by writing inside {}
const HeadingComponent = () => (
  <div id="parent">
    {/* {jsxHeading} */}
    <Title />
    {Title()}
    <Title></Title>
    <h1 className="heading">Namaste React from functional Component</h1>
  </div>
);

//console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //for calling functional components
//root.render(jsxHeading); //for calling react element
