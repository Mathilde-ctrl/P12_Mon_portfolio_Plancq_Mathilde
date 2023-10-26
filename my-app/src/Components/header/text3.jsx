import React, { useState, useEffect } from 'react';

function Text3() {
  const [text, setText] = useState('');
  const initialText = "During my studies, I worked on some projects involving Html, Css, JavaScript, Sass, React and Redux toolkit.";
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

    setTimeout(typeText, 9500); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text3;
