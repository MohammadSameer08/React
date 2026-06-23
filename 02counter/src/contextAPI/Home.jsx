import { useSimpleContext } from "./CreateContext";

export default function Home() {
  const { money } = useSimpleContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Money: {money}</p>
    </div>
  );
}
