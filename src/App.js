import "./App.css";
import React, { useEffect } from "react";
import { Counter } from "./feature/counter/index";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./feature/user/userSlice";

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
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
