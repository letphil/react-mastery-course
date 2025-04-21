import "../App.css";

function Hello() {
  const name = "Phil";
  const age = 36;

  return (
    <>
      <h1 className="read-the-docs">Hello, React!</h1>
      <h2>
        {name} is {age} years old
      </h2>
    </>
  );
}

export default Hello;
