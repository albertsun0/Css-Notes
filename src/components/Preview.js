import React from 'react';

function Preview({text}) {
    let arr = text.split(/\r\n|\n\r|\n|\r/);
    console.log(arr);
    let indent = 0;
    let bullet = false;
    let dash = false;
    let triangle = false;
    let block = false;
    let blockStyle = "";

    const isLetter =(c) => {
        return c.toLowerCase() !== c.toUpperCase();
    }

    const processPreStyle = (s) => {
        for(let i = 0; i< s.length; i++){
            if(s.charAt(i) === "+"){
                indent +=25;
            }
            if(s.charAt(i) === "-"){
                indent -=25;
                if(indent < 0){
                    indent = 0;
                }
            }
            if(s.charAt(i) === "."){
                bullet = !bullet;
            }
            if(s.charAt(i) === "~"){
                dash = !dash;
            }
            if(s.charAt(i) === ">"){
                triangle = !triangle;
            }
            if(s.charAt(i) === "["){
                block = true;
                blockStyle = "";
            }
            if(s.charAt(i) === "]"){
                block = false;
                blockStyle = "";
            }
            if(s.charAt(i) === "_"){
                indent = 0;
            }
        }
    }
    
    return <div className='w-1/2 text-white p-6 flex flex-col overflow-y-auto previewContain transition-all duration-1000'>
        {arr.map((val, i) => {
            if(val === ""){
                return <div key={i} className={`h-4 ${blockStyle}`} style={{marginLeft:indent}} ></div>
            }
            if(val.substring(0,3) === "<i>"){
                return <div key = {i}><img src={val.substring(3)}></img></div>
            }
            let classes = "";
            let text = val;
            for(let a = 0; a < val.length; a++){
                if(val.charAt(a) === "<"){
                    if(a > 0){
                        processPreStyle(val.substring(0,a));
                    }
                    for(let b = a; b < val.length; b++){
                        if(val.charAt(b) === ">"){
                            classes = val.substring(a+1,b);
                            text = val.substring(b+1);
                            if(block && blockStyle === ""){
                                blockStyle = classes;
                            }
                            break;
                        }
                    }
                    break;
                }
                if(isLetter(val.charAt(a))){
                    if(a > 0){
                        processPreStyle(val.substring(0,a));
                    }
                    text = val.substring(a);
                    break;
                }
                if(a === val.length-1){
                    processPreStyle(val);
                    return <div key={i} className={`h-4 ${blockStyle}`} style={{marginLeft:indent}}></div>
                }
            }
            

            return <div key={i} style={{marginLeft:indent}} 
                className = {`preview ${classes} ${bullet ? "bullet":""} ${dash ? "dash":""} ${triangle ? "triangle": ""} ${blockStyle}`}

            >{text}</div>

           
            
            // if(val.charAt(0)  === "<" || val.charAt(1)  === "<"){
            //     let start = 1;
            //     if(val.charAt(1) === "<"){
            //         start = 2;
            //     }
            //     for(let a = 0; a < val.length; a++){
            //         if(val.charAt(a) === ">"){
            //             return <div key={i} className={val.substring(start,a)} style={{marginLeft:indent}}> {val.substring(a+1)}</div>
            //         }
            //     }
            // }
            // return <div key={i} style={{marginLeft:indent}}>{val}</div>
        })}
    </div>;
}

export default Preview;
