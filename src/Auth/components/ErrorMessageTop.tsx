import {
  Flex,
  Icon,
  IconButton,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { XMarkIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

interface ErrorMessageTopProps {
  message: string;
  onClose: () => void;
}

const revealUp = keyframes`
  from {
    transform: translate3d(0, -70px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const ErrorMessageTop = ({ message, onClose }: ErrorMessageTopProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${revealUp} 0.2s`;

  useEffect(() => {
    if (message.length > 0) {
      setTimeout(() => {
        onClose();
      }, 5000);
    }
  }, [message, onClose]);

  return (
    <Flex
      align="center"
      animation={animation}
      bg="red.500"
      color="white"
      justify="space-between"
      px={8}
      py={1}
      top="0"
      w="100%"
    >
      <Icon as={ExclamationCircleIcon} h={6} w={6} />
      <Text fontSize="lg" m={4}>
        {message}
      </Text>
      <IconButton
        _hover={{
          transform: "scale(1.2)",
        }}
        aria-label="close"
        h={6}
        icon={<Icon as={XMarkIcon} />}
        marginInline={0}
        minW={0}
        paddingInline={2}
        variant=""
        w={6}
        onClick={onClose}
      />
    </Flex>
  );
};

export default ErrorMessageTop;
