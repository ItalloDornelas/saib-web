import { Flex } from '@chakra-ui/layout';
import { CardForm } from '../../components/CardForm';
import { Header } from '../../components/Header';

export const RegisterClient = () => {
  return (
    <Flex flexDir="column" w="full">
      <Header title="Novo Registro" isNavigation={true} />
      <Flex w="full" justify="center" p="5">
        <CardForm />
      </Flex>
    </Flex>
  );
};
