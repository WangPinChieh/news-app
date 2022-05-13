import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
export const UserTable = (props) => {
  const { columnNames, data } = props;
  const _renderHeader = () => {
    return (
      <Tr>
        {columnNames.map((columnName) => {
          return <Th>{columnName}</Th>;
        })}
      </Tr>
    );
  };
  const _renderBody = () => {
    return data.map((user) => {
      return (
        <Tr key={uuidv4()}>
          <Td>{user.name}</Td>
          <Td>{user.age}</Td>
        </Tr>
      );
    });
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>{_renderHeader()}</Thead>
        <Tbody>{_renderBody()}</Tbody>
      </Table>
    </TableContainer>
  );
};
