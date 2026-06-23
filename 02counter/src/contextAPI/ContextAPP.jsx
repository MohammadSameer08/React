import { CreateProvider } from "./CreateProvider";
import Home from "./Home";
import About from "./About";

// call this in main app component
function BasicContextExampleAPP() {
  return (
    <CreateProvider>
      <div style={{ padding: "20px" }}>
        <h1>Basic Context Example</h1>
        <Home />
        <About />
      </div>
    </CreateProvider>
  );
}

export default BasicContextExampleAPP;
