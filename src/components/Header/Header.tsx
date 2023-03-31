import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { useNavigate } from 'react-router-dom';
import backImg from '../../assets/back.png';
import { ColorModeSwitcher } from '../../modules/ColorModeSwitcher';
import { paths } from '../../services/const/paths';

interface HeaderProps {
  title: string;
  isNavigation?: boolean;
}

export const Header = ({ title, isNavigation }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      w="full"
      p="2"
      px="8"
      bg="#ef9ea3"
      align="center"
      justify="space-between"
      borderBottom="2px solid"
      borderColor="gray.500"
    >
      <Flex gap="2" align="center">
        {isNavigation && (
          <Image
            src={backImg}
            alt="imagem para voltar"
            onClick={() => navigate(paths.homepage)}
            cursor="pointer"
          />
        )}
        <Text fontSize="xl" fontWeight="medium">
          {title}
        </Text>
      </Flex>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};
