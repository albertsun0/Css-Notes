import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Textbox from './Textbox';
import Preview from './Preview';

function Editor() {

    const [text,setText] = useState("");
    const [editOpen, seteditOpen] = useState(true);

    const changeText = (txt) => {
        setText(txt);
    }
    
    return <div className='w-full h-screen flex flex-col bg-zinc-900'>
        <div className='w-full h-screen flex flex-row'>
            <Sidebar></Sidebar>
            <Textbox text = {text} onUpdate = {changeText}></Textbox>
            <Preview text = {text}></Preview>
        </div>
        
    </div>
    
}

export default Editor;
