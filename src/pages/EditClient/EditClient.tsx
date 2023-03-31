import { Flex } from '@chakra-ui/layout';
import { CardForm } from '../../components/CardForm';
import { Header } from '../../components/Header';
import { useCurrentUser } from '../../context/currentUser';

export const EditClient = () => {
  const { currentUser } = useCurrentUser();
  return (
    <Flex flexDir="column" w="full">
      <Header title="Editar Registro" isNavigation={true} />
      <Flex w="full" justify="center" p="5">
        <CardForm isEdit={true} clientEdit={currentUser} />
      </Flex>
    </Flex>
  );
};
