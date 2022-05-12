import "./App.css";
import React, { useEffect } from "react";
import { Counter } from "./feature/counter/index";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./feature/user/userSlice";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setUsers([
        { name: "jay", age: 20 },
        { name: "yvonne", age: 21 },
        { name: "ben", age: 18 },
      ])
    );
  }, []);
  const { users } = useSelector((state) => state.users);
  return (
    <div className="App">
      <Counter />
      Length: {users.length}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={uuidv4()}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
