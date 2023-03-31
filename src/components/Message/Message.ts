import { createStandaloneToast } from '@chakra-ui/react';

export class Message {
  private static toast = createStandaloneToast();

  private static duration = 9000;

  private static isClosable = true;

  static success(title: string, description: string) {
    this.toast.toast({
      description,
      duration: this.duration,
      isClosable: this.isClosable,
      status: 'success',
      title: title ? title : '',
    });
  }

  static error(title: string, description: string) {
    this.toast.toast({
      description,
      duration: this.duration,
      isClosable: this.isClosable,
      status: 'error',
      title: title ? title : '',
    });
  }

  static info(title: string, description: string) {
    this.toast.toast({
      description,
      duration: this.duration,
      isClosable: this.isClosable,
      status: 'info',
      title: title ? title : '',
    });
  }

  static warning(title: string, description: string) {
    this.toast.toast({
      description,
      duration: this.duration,
      isClosable: this.isClosable,
      status: 'warning',
      title: title ? title : '',
    });
  }
}
