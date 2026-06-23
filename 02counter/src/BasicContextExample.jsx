import { SimpleProvider } from "./SimpleProvider";
import Counter from "./Counter";
import Display from "./Display";

function BasicContextExample() {
  return (
    <SimpleProvider>
      <div style={{ padding: "20px" }}>
        <h1>Basic Context Example</h1>
        <Counter />
        <Display />
      </div>
    </SimpleProvider>
  );
}

export default BasicContextExample;
