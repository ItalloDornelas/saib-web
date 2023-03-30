import { Flex } from '@chakra-ui/layout';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

interface AppLayoutType {
  children: React.ReactNode;
}

export const AppLayout = (props: AppLayoutType) => {
  return (
    <Flex>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Flex w="full" justify="center" p="5">
        {props.children}
      </Flex>
    </Flex>
  );
};
