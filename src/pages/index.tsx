import Head from "next/head";
import { Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import DataTable from "@/Shared/components/DataTable";

export default function Home() {
  const columns = [
    {
      label: "Nombre",
      selector: (row) => row.nombre,
    },
    {
      label: "Parcela",
      selector: (row) => row.parcela,
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <DataTable
          columns={columns}
          data={[
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
            { nombre: "Carlos", parcela: "12" },
          ]}
        />
      </Box>
    </>
  );
}
