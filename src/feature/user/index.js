import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import cloneDeep from "lodash/cloneDeep";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
export const UserTable = (props) => {
  const { columnNames, data } = props;
  const _renderHeader = () => {
    const cloneColumnNames = cloneDeep(columnNames);
    cloneColumnNames.unshift("");
    return (
      <Tr>
        {cloneColumnNames.map((columnName) => {
          return <Th>{columnName}</Th>;
        })}
      </Tr>
    );
  };
  const _renderBody = () => {
    return data.map((user) => {
      return (
        <Tr key={uuidv4()}>
          <Td>
            <Checkbox />
          </Td>
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
