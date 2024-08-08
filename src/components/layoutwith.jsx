import { Outlet } from 'react-router-dom';
import Topbar from './topbar';

const LayoutWithTopbar = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
};

export default LayoutWithTopbar;
