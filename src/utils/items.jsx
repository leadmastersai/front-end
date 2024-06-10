import { Link } from 'react-router-dom';
import menu1 from '../assets/dashb/men1.svg';
import menu2 from '../assets/dashb/men2.svg';
import menu3 from '../assets/dashb/men3.svg';
import menu4 from '../assets/dashb/men4.svg';
import menu5 from '../assets/dashb/men5.svg';
import menu6 from '../assets/dashb/men6.svg';
import menu7 from '../assets/dashb/men7.svg';
import menu8 from '../assets/dashb/men8.svg';

const items = [
  {
    key: '1',
    icon: <img src={menu1} className='item-ims' style={{ width: 17, height: 17 }} />,
    label: 'Dashboard',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
    ],
  },
  {
    key: '6',
    label: 'Campaigns',
    icon: <img src={menu6} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '5',
    label: <Link to='/adidea'>Automation</Link>,
    icon: <img src={menu4} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '2',
    icon: <img src={menu2} className='item-ims' style={{ width: 17, height: 17 }} />,
    label: 'Network',
  },
  {
    key: '3',
    icon: <img src={menu7} className='item-ims' style={{ width: 17, height: 17 }} />,
    label: <Link to="/analytics">Analytics</Link>,
  },
  {
    key: '4',
    label: 'Intgrations',
    icon: <img src={menu3} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '7',
    label: 'Settings',
    icon: <img src={menu8} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '8',
    label: 'Support',
    icon: <img src={menu5} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
];

export default items;
