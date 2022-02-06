import React from 'react';
import {ReactComponent as Left} from '../Icons/left.svg'
import {ReactComponent as Check} from '../Icons/check-circle.svg'
import {ReactComponent as Minimize} from '../Icons/minimize-2.svg'
import {ReactComponent as Maximize} from '../Icons/maximize-2.svg'

function Sidebar({onClick, editOpen}) {
  return <div className='w-1/12 border-r-2 border-zinc-800 text-white flex flex-col justify-between text-sm'>
    <div className='space-y-1'>
      <div className='flex flex-row w-full justify-between items-center'>
        <Left className='mb-4 mt-4 w-5'></Left>
        {editOpen ?
        <Minimize className='mb-4 mt-4 w-4 bg-zinc-800' onClick = {onClick}></Minimize> :  
        <Maximize className='mb-4 mt-4 w-4 bg-zinc-800' onClick = {onClick}></Maximize>
        }
        

      </div>
        
        <div className = 'p-1 bg-zinc-800'>
          This File
        </div>
        <div className = 'p-1'>
          Another File
        </div>
        <div className = 'p-1'>
          Another File
        </div>
    </div>
    <div className='flex flex-row bg-gray-800 items-center'>
      <div className='bgg w-6 px-5'>
        <Check className= "w-4"></Check>
      </div>
      <div className='grow'>
        <div className='ml-2'>Username</div>
      </div>
    </div>
      
  </div>;
}

export default Sidebar;
