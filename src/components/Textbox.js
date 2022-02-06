import React from 'react';

function Textbox({onUpdate, editOpen}) {
    const update = () =>{
        onUpdate(document.getElementById("textbox").value);
    }
  return <div className={`border-r-2 border-zinc-800 transition-all duration-1000 ${editOpen? "w-5/12" : "w-1/12"}`}>
      <textarea className='w-full h-full bg-zinc-900 text-white p-3 focus:outline-none resize-none leading-relaxed' id="textbox" 
      onChange = {() => update()}>
      </textarea>
  </div>;
}

export default Textbox;
