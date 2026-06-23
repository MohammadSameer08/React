import { useSimpleContext } from "./CreateContext";

export default function About() {
  const { money } = useSimpleContext();

  return (
    <div>
      <h1>About Page</h1>
      <p>Money: {money}</p>
    </div>
  );
}
