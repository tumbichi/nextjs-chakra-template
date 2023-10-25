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

export interface BaseColumn<TValue> {
  label: string;
  selector: (row: TValue) => ReactNode;
  styles?: TableCellProps;
  onClick?: (item: TValue) => void;
}

interface DataTableProps<TValue> {
  data: TValue[];
  columns: BaseColumn<TValue>[];
  loading?: boolean;
  onClickRow?: (row: TValue) => void;
}

function DataTable<T>({
  columns,
  data,
  loading,
  onClickRow,
}: DataTableProps<T>) {
  return (
    <Box overflow="auto">
      <ChakraUITable size="sm">
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th
                key={String(column.label) + index}
                borderColor="neutral.300"
                borderWidth="1px"
                px={3}
                py={4}
                {...column.styles}
              >
                {column.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {!loading &&
            data.map((row, index) => (
              <Tr
                key={`tr-row-${index}`}
                _hover={{
                  bg: "neutral.200",
                  cursor: "pointer",
                }}
                onClick={onClickRow ? () => onClickRow(row) : undefined}
              >
                {columns.map(({ styles, onClick, selector, label }) => (
                  <Td
                    key={`td-row-${label}-${index}`}
                    borderColor="neutral.300"
                    borderWidth="1px"
                    px={3}
                    py={3}
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
        <Center flexDir="column" h="100%" py={16} w="100%">
          <Spinner size="xl" />
        </Center>
      )}

      {!loading && data.length === 0 && (
        <Center flexDir="column" h="100%" py={8} w="100%">
          <Box bg="neutral.200" borderRadius="full" p={8}>
            <Icon
              as={ArchiveBoxXMarkIcon}
              color="neutral.800"
              fontSize="100px"
            />
          </Box>
          <Text color="neutral.800" fontSize="2xl" fontWeight="semibold" mt={1}>
            Sin resultados
          </Text>
        </Center>
      )}
    </Box>
  );
}

export default DataTable;
