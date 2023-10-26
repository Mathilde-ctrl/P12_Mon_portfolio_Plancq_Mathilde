import React, { useState, useEffect } from 'react';


function Text1() {
  const [text, setText] = useState('');
  const initialText = "Welcome to my portfolio !";
  const [animateBorder, setAnimateBorder] = useState(false);


  useEffect(() => {
    let index = 0;

    function typeText(){
      if (index < initialText.length) {
        setAnimateBorder(true)
        setText(initialText.substring(0, index + 1));
        index++;
        setTimeout(typeText, 50);
      }else{
        setAnimateBorder(false)
      }
    };

    setTimeout(typeText, 2000); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text1;
