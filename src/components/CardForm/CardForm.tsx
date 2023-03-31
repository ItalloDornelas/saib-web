import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { FormLabel, Spinner, useDisclosure } from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClientsProps } from '../../modules/TableClient/clients.interface';
import { apiClient } from '../../services/api';
import { apiPaths } from '../../services/const/apiPaths';
import { InputForm } from '../Input';
import { Message } from '../Message';
import { ModalConfirm } from '../ModalConfirm/ModalConfirm';
import { schema } from './schema';
import { states } from './states';

interface CardFormProps {
  isEdit?: boolean;
  clientEdit?: ClientsProps;
}

export const CardForm = ({ isEdit, clientEdit }: CardFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({ resolver: yupResolver(schema) });
  const [loading, setLoading] = useState(false);

  const api = apiClient();

  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    let response: AxiosResponse<any, any>;
    try {
      setLoading(true);
      if (isEdit) {
        response = await api.put(apiPaths.put.editUser, {
          TECL_NOME: data.name,
          TECL_ENDERECO: data.address,
          TECL_CIDADE: data.city,
          TECL_UF: data.state,
          TECL_TELEFONE: data.phone,
          TECL_ID: clientEdit?.TECL_ID,
        });
      } else {
        response = await api.post(apiPaths.post.addUser, {
          TECL_NOME: data.name,
          TECL_ENDERECO: data.address,
          TECL_CIDADE: data.city,
          TECL_UF: data.state,
          TECL_TELEFONE: data.phone,
        });
      }

      setLoading(false);
      navigate('/');
      Message.success('', response.data.message);
    } catch (error) {
      if (isEdit) {
        Message.error('', 'Não foi possivel editar o cliente!');
      } else {
        Message.error('', 'Não foi possivel adicionar um novo cliente!');
      }
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleConfirmCancelRegister = () => {
    navigate('/');
  };

  const handleCancelRegister = () => {
    if (isDirty) {
      onOpen();
    } else {
      handleConfirmCancelRegister();
    }
  };

  return (
    <Flex flexDir="column" w="full">
      <ModalConfirm
        isOpen={isOpen}
        onClickToConfirm={handleConfirmCancelRegister}
        onClose={onClose}
        label="Você tem certeza que deseja sair? Esta ação fará você perder todo
        seu progresso."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          border="1px solid"
          borderColor="gray.400"
          borderRadius="lg"
          px="8"
          py="16"
          gap="5"
          flexDir="column"
        >
          <Flex gap="5">
            <InputForm
              autoFocus
              errors={errors.name?.message}
              defaultValue={isEdit ? clientEdit?.TECL_NOME : ''}
              label="Nome"
              register={register}
              name="name"
            />
            <InputForm
              errors={errors.address?.message}
              defaultValue={isEdit ? clientEdit?.TECL_ENDERECO : ''}
              label="Endereço"
              register={register}
              name="address"
            />
          </Flex>
          <Flex gap="5" flexDir={{ base: 'column', md: 'row' }}>
            <InputForm
              autoFocus
              defaultValue={isEdit ? clientEdit?.TECL_CIDADE : ''}
              errors={errors.city?.message}
              label="Cidade"
              register={register}
              name="city"
            />
            <Flex flexDir="column">
              <FormLabel>UF</FormLabel>
              <Select
                width="20"
                {...register('state')}
                defaultValue={isEdit ? clientEdit?.TECL_UF : ''}
              >
                {states.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
              </Select>
            </Flex>

            <InputForm
              errors={errors.phone?.message}
              label="Telefone"
              register={register}
              defaultValue={isEdit ? clientEdit?.TECL_TELEFONE : ''}
              name="phone"
              type="phone"
            />
          </Flex>
        </Flex>

        <Flex mt="6" justify="end" gap="4">
          <Button colorScheme="purple" bg="#9389bd" type="submit" w="">
            {loading ? <Spinner /> : 'Salvar'}
          </Button>
          <Button
            colorScheme="purple"
            bg="#9389bd"
            onClick={handleCancelRegister}
          >
            Cancelar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
