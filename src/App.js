import "./App.css";
import React, { useEffect } from "react";
import { Counter } from "./feature/counter/index";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./feature/user/userSlice";
// import { UserTable } from "./feature/user/index";
import { Table } from "./feature/custom-react-table/index";
import { v4 as uuidv4 } from "uuid";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setUsers([
        { firstName: "jay", lastName: "wang", age: 20 },
        { firstName: "yvonne", lastName: "shao", age: 21 },
        { firstName: "ben", lastName: "chen", age: 18 },
      ])
    );
  }, []);
  const { users } = useSelector((state) => state.users);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ],
    []
  );

  return (
    <div className="App">
      <Counter />
      Length: {users.length}
      {/* <UserTable columnNames={["name", "age"]} data={users} /> */}
      <Table columns={columns} data={users} />
    </div>
  );
}

export default App;
