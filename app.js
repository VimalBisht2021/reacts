const parent= React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am an h1 tag created by vimal"),
        React.createElement("h2",{},"I am an h2 tag created by vimal.")]),
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am an h1 tag created by vimal"),
            React.createElement("h2",{},"I am an h2 tag created by vimal.")])]);



const heading = React.createElement("h1",{id:"heading"},"hello vimal what are you doing?");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
