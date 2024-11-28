import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Details } from '../pages';
import { Menu } from '../components';

function AppRoutes():React.JSX.Element {
  return (
    <div className="container">
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}
export default AppRoutes;
