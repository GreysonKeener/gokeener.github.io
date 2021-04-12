import React from 'react';

let output;
const Output = (props) => {
  
  if(props.gameStatus === 1) output = "Congratulations you guessed the word!";
  if(props.gameStatus === 2) {
    output = `YOU LOSE! The word was ${props.answer}`;
  }
  return (
    <div className='output'>
      {output}
    </div>
  );
};

export default Output;