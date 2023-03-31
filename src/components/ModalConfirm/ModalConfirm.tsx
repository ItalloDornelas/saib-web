import { Button } from '@chakra-ui/button';
import { Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Spinner } from '@chakra-ui/react';
import { useState } from 'react';

interface IModalTrashProps {
  isOpen: boolean;
  onClose: () => void;
  onClickToConfirm?: () => void;
  onClickToConfirmDelete?: (id: number) => Promise<void>;
  id?: number;
  label: string;
}

export const ModalConfirm: React.FC<IModalTrashProps> = ({
  isOpen,
  onClose,
  onClickToConfirm,
  onClickToConfirmDelete,
  id,
  label,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          background="rgba(255, 255, 255, 0.01)"
          backdropFilter="blur( 0.81rem )"
          sx={{
            WebkitBackdropFilter: 'blur( 0.81rem )',
          }}
          border="0,06rem solid blur(1.25rem)"
        />
        <ModalContent width="80%">
          <ModalBody>
            <Text mt="1rem" fontWeight="bold">
              {label}
            </Text>
          </ModalBody>

          <ModalFooter
            justifyContent="end"
            w="100%"
            alignItems="center"
            gap="2"
          >
            {id && onClickToConfirmDelete ? (
              <Button
                onClick={async () => {
                  setLoading(true);
                  await onClickToConfirmDelete(id);
                }}
                colorScheme="red"
              >
                Deletar
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setLoading(true);
                  if (onClickToConfirm) {
                    onClickToConfirm();
                  }
                }}
                colorScheme="purple"
                bg="#9389bd"
              >
                {loading ? <Spinner /> : 'Confirmar'}
              </Button>
            )}

            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
