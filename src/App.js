import "./App.css";
import React, { useEffect } from "react";
import { Counter } from "./feature/counter/index";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./feature/user/userSlice";
// import { UserTable } from "./feature/user/index";
import { Table } from "./feature/custom-react-table/index";
import { v4 as uuidv4 } from "uuid";
import { Center } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="App">
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<ShoppingCartIcon />}
        onClick={onOpen}
      />
      <Counter />
      Length: {users.length}
      {/* <UserTable columnNames={["name", "age"]} data={users} /> */}
      <Table columns={columns} data={users} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shipping Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
