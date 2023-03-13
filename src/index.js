import reactDom from "react-dom";
import { Hello } from "./Hello";
const helloEl = <Hello />;
reactDom.render(helloEl, document.querySelector("#root"));
