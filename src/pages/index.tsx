import Head from "next/head";
import { Box } from "@chakra-ui/react";
import DataTable from "Base/components/DataTable";

interface ParcelRow {
  name: string;
  service: string;
}

export default function Home() {
  const columns = [
    {
      label: "Nombre",
      selector: (row: ParcelRow) => row.name,
    },
    {
      label: "Servicio",
      selector: (row: ParcelRow) => row.service,
    },
  ];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta content="Generated by create next app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Box as="main" p={4}>
        <DataTable
          columns={columns}
          data={[
            { name: "Carlos", service: "Servicio 1" },
            { name: "Carlos", service: "Servicio 2" },
            { name: "Carlos", service: "Servicio 3" },
            { name: "Carlos", service: "Servicio 4" },
            { name: "Carlos", service: "Servicio 5" },
            { name: "Carlos", service: "Servicio 6" },
            { name: "Carlos", service: "Servicio 7" },
            { name: "Carlos", service: "Servicio 8" },
          ]}
        />
      </Box>
    </>
  );
}
