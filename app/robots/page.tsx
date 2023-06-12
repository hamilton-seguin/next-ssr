import Link from "next/link";

type Robot = {
  id: number;
  name: string;
};

const Robots = async () => {
  const robotsData = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await robotsData.json();
  
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div className="my-10">
        {data.map((robot: Robot) => (
          <ul key={robot.id}>
            <div>{robot.name}</div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Robots;
