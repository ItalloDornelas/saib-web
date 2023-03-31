import { ReactNode } from 'react';

import { CurrentUserProvider } from './currentUser';
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <CurrentUserProvider>{children}</CurrentUserProvider>;
};

export default Providers;
