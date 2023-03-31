import { Flex, Link, Text } from '@chakra-ui/layout';
import { paths } from '../../services/const/paths';

export default function EmptyTable() {
  return (
    <Flex
      p="4"
      boxShadow="lg"
      m="4"
      borderRadius="lg"
      flexDir="column"
      bg="blackAlpha.300"
    >
      <Flex align="center" justify="center" gap="8">
        <Text fontSize="xl" fontWeight="bold">
          Não há clientes registrados!
        </Text>
      </Flex>
      <Text fontSize="sm" fontWeight="medium">
        Para registrar um novo cliente basta clicar em{' '}
        <Link href={paths.register} color="#9389bd">
          registrar.
        </Link>
      </Text>
    </Flex>
  );
}
