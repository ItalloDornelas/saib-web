import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { SetStateAction, useEffect, useState } from 'react';
import { apiClient } from '../../services/api';
import { apiPaths } from '../../services/const/apiPaths';
import { ClientsProps } from './clients.interface';
import EmptyTable from './EmptyTable';
import { TableFromApi } from './TableFromApi';

export const TableClient = () => {
  const [clients, setClients] = useState<ClientsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const handleChange = (e: { target: { value: SetStateAction<string> } }) =>
    setValue(e.target.value);
  const api = apiClient();

  const getAllClients = async () => {
    try {
      const response = await api.get(apiPaths.get.getUsers);
      setClients(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredClient: ClientsProps[] = value
    ? clients.filter((res) => {
        let name = res.TECL_NOME.toString();
        return name.toLowerCase().match(`${value.toLowerCase()}.*`);
      })
    : clients;

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {clients.length ? (
            <Flex flexDir="column" w="full" gap="5">
              <Input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Pesquisar"
                w="30%"
              />
              <TableFromApi
                clients={filteredClient}
                getAllClients={getAllClients}
              />
            </Flex>
          ) : (
            <EmptyTable />
          )}
        </>
      )}
    </>
  );
};
