import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { ClientsProps } from '../../modules/TableClient/clients.interface';

interface CurrentUserProviderData {
  currentUser: ClientsProps;
  setCurrentUser: Dispatch<SetStateAction<ClientsProps>>;
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

const CurrentUserContext = createContext<CurrentUserProviderData>(
  {} as CurrentUserProviderData
);

export const CurrentUserProvider = ({ children }: CurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<ClientsProps>(
    {} as ClientsProps
  );

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
