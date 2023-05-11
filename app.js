/* <div id = "parent">
    <div id = "child">
        <h1>I am an H1 tag</h1>
        <h2>I am an H2 tag</h2>
    </div>
    <div id = "child2">
        <h1>I am an H1 tag</h1>
        <h2>I am an H2 tag</h2>
    </div>
</div>  */

////How can we achive this 






// const heading =
//  React.createElement("h1",{
//  id:"heading"
// }, "Hello world form React"); 

const parent = 
React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am an H1 tag"),
    React.createElement("h2",{},"I am an H2 tag"),
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am an H1 tag"),
    React.createElement("h2",{},"I am an H2 tag"),
])]
)

console.log(parent) // object
//creating tag from react
const root = ReactDOM.createRoot(document.getElementById("root")); // creating a root for adding value

root.render(parent)