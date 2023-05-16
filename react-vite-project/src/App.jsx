import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Job salary={9000} position="CEO" company="Amazon" />
        <Job salary={6000} position="Junior CEO" company="Amazon" />
        <Job salary={4000} position="Project Manager" company="Netflix" />
      </div>
    </>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1> {props.salary}</h1>
      <h1> {props.position}</h1>
      <h1> {props.company}</h1>
    </div>
  );
};

// const getName = () => (
//   return "Candy";
// ); //This is a javascript function
//  const GetNameComponent = () => {
//   return <h1>Candy</h1>
//  }; // This is a react component
export default App;
