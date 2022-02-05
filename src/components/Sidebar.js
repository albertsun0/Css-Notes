import React from 'react';
import {ReactComponent as Left} from '../Icons/left.svg'
function Sidebar() {
  return <div className='w-1/12 border-r-2 border-gray-800 text-white flex flex-col justify-between'>
    <div className='space-y-2 p-2'>
        <Left className='mb-4'></Left>
        <div className = 'p-2 bg-gray-800 rounded-sm'>
          This File
        </div>
        <div className = 'p-2 rounded-sm'>
          Another File
        </div>
        <div className = 'p-2 rounded-sm'>
          Another File
        </div>
    </div>
    <div className='bgg'>
      11:23
    </div>
      
  </div>;
}

export default Sidebar;
