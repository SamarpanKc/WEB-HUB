import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Name, setName] = useState("Samarpan");
  const [Form, setForm] = useState({});

  const handleClick = () => {
    alert("You Clicked Me!");
  };

  const handleMouseOver = () => {
    alert("You Hover Me!");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleChange2 = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
    // change the name value
    console.log(Form);
  };

  return (
    <>
      <div className="container flex items-center flex-col justify-center">
        <h1 className="font-bold mb-8">Handling Events</h1>
        <div className="button">
          <button onClick={handleClick}>Click Me</button>
        </div>

        {/* onMouseHover property */}
        <div
          className="hoverer mt-6 w-44 h-12 content-center rounded-xl cursor-pointer font-semibold bg-slate-200 text-black"
          onMouseOver={handleMouseOver}
        >
          Hey, Hover me!
        </div>

        {/* onChange property */}
        <div className="inputs flex flex-col">
          <input
            className="mt-6 bg-slate-200 hover:bg-slate-100 text-black p-1.5 rounded-lg"
            type="text"
            value={Name}
            onChange={handleChange}
          />

          <input
            className="mt-6 bg-slate-200 hover:bg-slate-100 text-black p-1.5 rounded-lg"
            type="text"
            name="email"
            placeholder="email"
            value={Form.email ? Form.email : ""}
            onChange={handleChange2}
          />
          <input
            className="mt-6 bg-slate-200 hover:bg-slate-100 text-black p-1.5 rounded-lg"
            type="text"
            name="phone"
            placeholder="Phone no"
            value={Form.phone ? Form.phone : ""}
            onChange={handleChange2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
