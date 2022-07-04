import * as React from "react";
import * as ReactDOM from "react-dom/client";

let Greet = () => <h1>Hello, React 18!</h1>;

ReactDOM.createRoot(document.querySelector("#react-18-root")).render(<Greet />);
