/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/Home.css';

/* From https://css-tricks.com/snippets/css/typewriter-effect/ */

function Home() {
  document.addEventListener('DOMContentLoaded',(event) => {
    // array with texts to type in typewriter
    const dataText = ["Hi, I'm Lindsay.", "Hola, soy Lindsay.", "Welcome!", "Thanks for stopping by!", "Gracias por visitar mi página :)"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (dataText[i] && i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  return (
    <div className="Home" id="home">
      <h1>Hi, I'm Lindsay.</h1>
      <p className="image-credit">Photo by <a href="https://unsplash.com/@yogidan2012?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniele Levis Pelusi</a> on <a href="https://unsplash.com/s/photos/purple-fire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
    </div>
  );
}

export default Home;