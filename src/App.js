import "./App.css";
import React, { useEffect } from "react";
import { Counter } from "./feature/counter/index";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./feature/user/userSlice";
import {
  addToCart,
  removeFromCart,
} from "./feature/shopping-cart/shopping-cart-slice";
// import { UserTable } from "./feature/user/index";
import { Table } from "./feature/custom-react-table/index";
import { v4 as uuidv4 } from "uuid";
import { Center } from "@chakra-ui/react";
import { IconButton, Stack, HStack, VStack, Box } from "@chakra-ui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
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
  const { shoppingCart } = useSelector((state) => state.shoppingCart);
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
      <Center>
        <HStack spacing="20px">
          <IconButton
            colorScheme="blue"
            aria-label="Open shopping cart"
            icon={<ShoppingCartIcon />}
            onClick={onOpen}
          />
          <IconButton
            colorScheme="blue"
            aria-label="Add to shopping cart"
            icon={<AddShoppingCartIcon />}
            onClick={onOpen}
          />
        </HStack>
      </Center>
      <Counter />
      Length: {users.length}
      {/* <UserTable columnNames={["name", "age"]} data={users} /> */}
      <Table
        columns={columns}
        data={users}
        onSelectChanged={(data) => {
          dispatch(addToCart(data));
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table
              columns={columns}
              data={shoppingCart}
              onSelectChanged={(data) => {
                //remove from cart
              }}
            />
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
