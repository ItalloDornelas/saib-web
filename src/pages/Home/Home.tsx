import { Flex } from '@chakra-ui/layout';
import { Header } from '../../components/Header';
import { TableClient } from '../../modules/TableClient';

export const Home = () => {
  return (
    <Flex flexDir="column" w="full">
      <Header title="Teste ReactJS - SaibWeb" />
      <Flex w="full" justify="center" p="5">
        <TableClient />
      </Flex>
    </Flex>
  );
};
