import React from 'react';

function Textbox({onUpdate}) {
    const update = () =>{
        onUpdate(document.getElementById("textbox").value);
    }
  return <div className='border-r-2 border-gray-800 grow'>
      <textarea className='w-full h-full bg-zinc-900 text-white p-3 focus:outline-none resize-none leading-relaxed' id="textbox" 
      onChange = {() =>  update()}>

      </textarea>
  </div>;
}

export default Textbox;
