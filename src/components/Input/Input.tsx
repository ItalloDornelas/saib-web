import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

import { Input, InputGroup, InputProps } from '@chakra-ui/input';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';

interface InputType extends InputProps {
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  label?: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}

export const InputForm: React.FC<InputType> = ({
  name,
  label,
  register,
  maxBlockSize,
  errors,
  ...rest
}) => {
  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <Input {...register(name)} {...rest} />
      </InputGroup>
      <FormErrorMessage>
        <>{errors}</>
      </FormErrorMessage>
    </FormControl>
  );
};
