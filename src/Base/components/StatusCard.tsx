import { Box, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface StatusCardProps {
  label: string;
  value: string;
}

const StatusCard = ({ label, value }: StatusCardProps) => (
  <Box border="1px solid" borderColor="gray.300" borderRadius="base" flex={1}>
    <Stat p={5}>
      <StatLabel>{label}</StatLabel>
      <StatNumber mt={3}>{value}</StatNumber>
    </Stat>
  </Box>
);

export default StatusCard;
