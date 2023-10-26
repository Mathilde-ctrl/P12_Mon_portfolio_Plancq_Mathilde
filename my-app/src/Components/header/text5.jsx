import { useEffect, useState } from "react";

function Text5(){
  const [text, setText] = useState('');
  const initialText = "Feel free to contact me if you'd like to discuss potential opportunities or explore my work further.";
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

    setTimeout(typeText, 21000); 
  }, []);

  

  return (
    <div className='headerContainer'>
      <p className="animatedText">{text}</p>
      <span className={animateBorder ? 'animatedBorder' : ''}></span>
    </div>
  );
}

export default Text5