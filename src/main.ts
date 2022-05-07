import "./style.css";
import hello from "./test-example";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
`;

console.log(hello());
