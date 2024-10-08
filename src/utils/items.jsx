import { Link } from 'react-router-dom';
import menu1 from '../assets/dashb/men1.svg';
import menu2 from '../assets/dashb/men2.svg';
import menu3 from '../assets/dashb/men3.svg';
import menu4 from '../assets/dashb/men4.svg';
import menu5 from '../assets/dashb/men5.svg';
import menu6 from '../assets/dashb/men6.svg';
import menu7 from '../assets/dashb/men7.svg';
import menu8 from '../assets/dashb/men8.svg';
import menu9 from '../assets/dashb/getad.svg';


const items = [
  {
    key: '5',
    label: <Link to='/home'>Dashboard</Link>,
    icon: <img src={menu9} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '1',
    label: <Link to='/adidea'>Get Ad Idea</Link>,
    icon: <img src={menu9} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '2',
    label: 'Launch Ads',
    icon: <img src={menu9} className='item-ims' style={{ width: 17, height: 17 }} />,
    children: [
      {
        key: '2-1',
        label: <Link to='/adsdrafts'>Ads Drafts</Link>,
      },
      {
        key: '2-2',
        label: <Link to='/publishads'>Publish Ads</Link>,
      },
      {
        key: '2-3',
        label: <Link to='/rejected'>Rejected</Link>,
      },
    ],
  },
  {
    key: '10',
    label: <Link to="/postidea">post Idea</Link>,
    icon: <img src={menu5} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '4',
    label: 'Launch Posts',
    icon: <img src={menu9} className='item-ims' style={{ width: 17, height: 17 }} />,
    children: [
      {
        key: '2-1',
        label: <Link to='/drafts'>Post Drafts</Link>,
      },
      {
        key: '2-2',
        label: <Link to='/published-posts'>Publish Post</Link>,
      },
    
    ],
  },

  {
    key: '3',
    label: <Link to='/createad'>Campaign</Link>,
    icon: <img src={menu6} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  {
    key: '4',
    label: <Link to='/automation'>Automation</Link>,
    icon: <img src={menu4} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  // {
  //   key: '5',
  //   icon: <img src={menu2} className='item-ims' style={{ width: 17, height: 17 }} />,
  //   label: 'Network',
  // },
  {
    key: '6',
    icon: <img src={menu7} className='item-ims' style={{ width: 17, height: 17 }} />,
    label: <Link to="/analytics">Analytics</Link>,
  },
  {
    key: '7',
    label: <Link to='/integrations' >Integrations</Link>,
    icon: <img src={menu3} className='item-ims' style={{ width: 17, height: 17 }} />,
  },
  // {
  //   key: '8',
  //   label: 'Settings',
  //   icon: <img src={menu8} className='item-ims' style={{ width: 17, height: 17 }} />,
  // },
  // {
  //   key: '9',
  //   label: 'Support',
  //   icon: <img src={menu5} className='item-ims' style={{ width: 17, height: 17 }} />,
  // },
  
  
];

export default items;
