//creating nested element
const mainHeading = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
        React.createElement("h1", {}, "Hey I am Arpita"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainHeading);