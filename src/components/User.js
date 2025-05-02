import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>Name: Aayush Bansal</h2>
      <h3>Location: Panchkula</h3>
      <h4>Contact: @github.com/AB782</h4>
    </div>
  );
};

export default User;
