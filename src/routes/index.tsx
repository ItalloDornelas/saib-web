import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EditClient } from '../pages/EditClient';
import { Home } from '../pages/Home';
import { RegisterClient } from '../pages/RegisterClient';

import { paths } from '../services/const/paths';

function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.homepage} element={<Home />} />
      </Routes>
      <Routes>
        <Route path={paths.register} element={<RegisterClient />} />
      </Routes>
      <Routes>
        <Route path={paths.edit} element={<EditClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
