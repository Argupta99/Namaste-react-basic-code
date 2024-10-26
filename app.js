//creating nested element where there is 2 siblings
const mainHeading = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
       [ React.createElement("h1", {}, "Hey I am Arpita"),React.createElement("h2", {},"Happy Holi to everyone") ]))
       ;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainHeading);