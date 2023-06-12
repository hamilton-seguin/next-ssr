import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">
        <button className="p-3 bg-slate-500">index</button>
      </Link>
    </div>
  );
};

export default About;
