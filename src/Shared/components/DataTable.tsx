import { ReactNode } from "react";
import {
  Box,
  Center,
  Icon,
  Spinner,
  Table as ChakraUITable,
  TableCellProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";

interface BaseColumn<TValue> {
  label: string;
  selector: (row: TValue) => ReactNode;
  styles?: TableCellProps;
  onClick?: (item: TValue) => void;
}

interface DataTableProps<TValue> {
  data: TValue[];
  columns: BaseColumn<TValue>[];
  loading?: boolean;
}

function DataTable<T>({ columns, data, loading }: DataTableProps<T>) {
  return (
    <>
      <ChakraUITable size="sm">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={String(column)} borderColor="main.300" borderWidth="1px" px="micro" py="centi">
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {!loading &&
            data.map((row) => (
              <Tr key={`tr-row-${String(row)}`}>
                {columns.map(({ styles, onClick, selector }) => (
                  <Td
                    key={`td-row-${String(row)}`}
                    borderColor="primary.300"
                    borderWidth="1px"
                    px="micro"
                    py="centi"
                    onClick={onClick ? () => onClick(row) : undefined}
                    {...styles}
                  >
                    {selector(row)}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </ChakraUITable>

      {loading && (
        <Center flexDir="column" h="100%" py="xxxlarge" w="100%">
          <Spinner size="xl" />
        </Center>
      )}

      {!loading && data.length === 0 && (
        <Center flexDir="column" h="100%" py="small" w="100%">
          <Box bg="primary.200" borderRadius="circular" p="small">
            <Icon as={ArchiveBoxXMarkIcon} color="primary.800" fontSize="100px" />
          </Box>
          <Text color="primary.800" fontSize="2xl" fontWeight="semibold" mt="nano">
            Sin resultados
          </Text>
        </Center>
      )}
    </>
  );
}

export default DataTable;
