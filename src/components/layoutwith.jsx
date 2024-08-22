import { Outlet } from 'react-router-dom';
import Topbar from './topbar';

const LayoutWithTopbar = () => {
  return (
    <div style={{position:'relative'}}>
      <Topbar />
      <Outlet />
    </div>
  );
};

export default LayoutWithTopbar;
