import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const data = { name: "", age: "" };

  const [users, setUsers] = useState([]);
  const [val, setVal] = useState(data);

  const handleData = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
    console.log(val);
    let ag = Number(e.target.value);
    // console.log("E = ",e);

    console.log("age = ", ag);
    if (e.target.ag < 0) {
      alert("Enter Positive Age");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!val.name || !val.age) {
      alert("All fields are Mandatory");
    } else if (val.age < 0) {
      alert("Age cannot be negative");
    } else {
      setUsers([...users, val]); //adding current users to the array
      setVal(data);
    }
  };

  return (
    <>
      <form id="my-form" className="container" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="name"
            value={val.name}
            onChange={handleData}
            id="name"
          />
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            name="age"
            value={val.age}
            onChange={handleData}
            id="age"
          />
        </div>
        <button className="btn">Add User</button>
      </form>
      <pre>
        {users.map((i, index) => (
          <h2 className="ui-defined" key={index}>
            {i.name} ({i.age} Years old)
          </h2>
        ))}
      </pre>
    </>
  );
}
