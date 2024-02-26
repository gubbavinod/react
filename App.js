//const heading = React.createElement("h1", {id: "heading"}, "Hello world React!!!");

const parent = React.createElement("div", {id: "parent"}, 
                    [React.createElement("div", {id: "child"}, 
                            [React.createElement("h1", {id: "heading"}, "Hello world React!!!"), 
                            React.createElement("h2", {id: "heading"}, "Hello world React!!!")]),
                    React.createElement("div", {id: "child2"}, 
                            [React.createElement("h1", {id: "heading"}, "Hello world React!!!"), 
                            React.createElement("h2", {id: "heading"}, "Hello world React!!!")])]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 