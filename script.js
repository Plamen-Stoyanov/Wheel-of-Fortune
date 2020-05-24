  // // variables
const wheel       = document.querySelector('.wheel');
const startButton = document.querySelector('#myBtn');
let randomDegrees = 0;
let value         = 1;
let clicked       = 0 ;

startButton.addEventListener("click", () => {
  // disable the start button
    startButton.style.pointerEvents = 'none';
    clicked++;
    console.log( clicked );

    // create new random rotation
		const newRandomRotation = parseInt((Math.random() + 1) * 360);
    randomDegrees += newRandomRotation;

    // rotate
    wheel.addEventListener("transitionend", () => getFieldValue());
    wheel.setAttribute("style", "transform: rotate(" + randomDegrees + "deg);");
    wheel.style.transition = 'all 5s ease-out';

    // show wining prize alert
    setTimeout(function(){
      // Enable button for the next spin
      startButton.style.pointerEvents = 'auto';
  
      // Check if the user confirmed the wining alert 
      if(confirm('Честито ти спечели!')){
        wheel.style.transition = 'none';
      }
      //callback the function after the rotate is over (5s)
        }, 5000);
	})

  // calc field probability
function getFieldValue(){
  if (Math.floor(25 - ((randomDegrees%(360))/15)) == 25 && 
        ((25 - ((randomDegrees%(360))/15))-10)*10 > 35 && 
        ((25 - ((randomDegrees%(360))/15))-10)*10 < 50) {
          
		fieldValue = 110;
	} else {
    fieldValue = Math.floor(25 - ((randomDegrees%(360))/15))
	}
}



