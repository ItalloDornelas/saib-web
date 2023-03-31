import { useDisclosure } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import editImg from '../../assets/edit.png';
import minusImg from '../../assets/minus.png';
import { Message } from '../../components/Message';
import { ModalConfirm } from '../../components/ModalConfirm/ModalConfirm';
import { useCurrentUser } from '../../context/currentUser';
import { apiClient } from '../../services/api';
import { apiPaths } from '../../services/const/apiPaths';
import { paths } from '../../services/const/paths';
import { ClientsProps } from './clients.interface';
import { headerTable } from './headerTable';

interface TableFromApiProps {
  clients: ClientsProps[];
  getAllClients: () => void;
}

export const TableFromApi = ({ clients, getAllClients }: TableFromApiProps) => {
  const [id, setId] = useState<number>(0);

  const { setCurrentUser } = useCurrentUser();
  const api = apiClient();

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const deleteClient = async (id: number) => {
    try {
      const response = await api.delete(`${apiPaths.delete.deleteUser}/${id}`);
      Message.success('', response.data.message);
      getAllClients();
      onClose();
    } catch (error) {
      Message.error('', 'Não foi possivel deletar!');
    }
  };

  return (
    <>
      <ModalConfirm
        isOpen={isOpen}
        onClickToConfirmDelete={deleteClient}
        onClose={onClose}
        id={id}
        label="Você tem certeza que deseja deletar?"
      />
      <TableContainer w="full">
        <Table w="full" border="1px solid" borderColor="#9389bd">
          <Thead bg="#9389bd">
            <Tr>
              {headerTable.map((header) => (
                <Td key={header.label} py="1" px="2">
                  {header.imgPath ? (
                    <Flex w={{ base: '5', md: '24' }}>
                      <Image
                        src={header.imgPath}
                        alt="imagem para adicionar"
                        onClick={() => {
                          navigate(paths.register);
                        }}
                        cursor="pointer"
                      />
                    </Flex>
                  ) : (
                    <Text fontWeight="bold" fontSize="xs">
                      {header.label}
                    </Text>
                  )}
                </Td>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {clients.length ? (
              clients.map((client) => {
                return (
                  <Tr key={client.TECL_ID}>
                    <Td
                      py="1"
                      px="2"
                      borderColor="#9389bd"
                      w={{ base: '5', md: '24' }}
                    >
                      <Flex
                        align="center"
                        gap={{ base: '1', md: '4' }}
                        flexDir={{ base: 'column-reverse', md: 'row' }}
                      >
                        <Image
                          src={minusImg}
                          alt="imagem para deletar"
                          onClick={() => {
                            setId(client.TECL_ID);
                            handleOpen();
                          }}
                          cursor="pointer"
                          w={{ base: '20px', md: '32px' }}
                        />
                        <Image
                          src={editImg}
                          alt="imagem para editar"
                          onClick={() => {
                            setCurrentUser(client);
                            navigate(paths.edit);
                          }}
                          cursor="pointer"
                          w={{ base: '20px', md: '32px' }}
                        />
                      </Flex>
                    </Td>
                    <Td py="1" px="2" borderColor="#9389bd">
                      <Text fontWeight="medium" fontSize="xs">
                        {client.TECL_NOME}
                      </Text>
                    </Td>
                    <Td py="1" px="2" borderColor="#9389bd">
                      <Text fontWeight="medium" fontSize="xs">
                        {client.TECL_ENDERECO}
                      </Text>
                    </Td>
                    <Td py="1" px="2" borderColor="#9389bd">
                      <Text fontWeight="medium" fontSize="xs">
                        {client.TECL_CIDADE}
                      </Text>
                    </Td>
                    <Td py="1" px="2" borderColor="#9389bd">
                      <Text fontWeight="medium" fontSize="xs">
                        {client.TECL_UF}
                      </Text>
                    </Td>
                    <Td py="1" px="2" borderColor="#9389bd">
                      <Text fontWeight="medium" fontSize="xs">
                        {client.TECL_TELEFONE}
                      </Text>
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td py="1" px="2" borderColor="#9389bd">
                  <Flex p="5">
                    <Text fontWeight="medium" fontSize="xs" color="#9389bd">
                      Pesquisa não encontrada.
                    </Text>
                  </Flex>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
