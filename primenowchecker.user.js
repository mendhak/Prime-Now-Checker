// ==UserScript==
// @name        Check Slot Available on Prime Now
// @namespace   https://example.com
// @version     1
// @match https://primenow.amazon.co.uk/checkout/enter-checkout*
// @match https://code.mendhak.com/*
// ==/UserScript==
 

var i = 0;
var refreshAfter = Math.floor((Math.random() * 100) + 1)+60; 

var bigRedBanner = document.createElement('div');
bigRedBanner.setAttribute('style', 'width:100%; background-color: white;text-align:center;padding-top: 15px; padding-bottom:20px; font-size:24px; font-weight: bolder; ');
document.body.prepend(bigRedBanner);

console.log('Will refresh after ' + refreshAfter);

setTimeout(function(){ window.scrollTo(0,0); }, 3000);




var slotUnavailable=true;

//search for playing sound in Firefox preferences - add exception https://primenow.amazon.co.uk/
var slotFoundSound = document.createElement('audio');
slotFoundSound.src = 'https://ia803000.us.archive.org/13/items/Zoidberg_Whoop/whoop.mp3';
slotFoundSound.preload = 'auto';

try {
  
	slotUnavailable=(/No delivery windows/i.test(document.getElementById('delivery-slot-form').innerText));
}
catch(err){
  slotUnavailable=false;
}

if(slotUnavailable){
     setInterval(function() {

        console.log(i);
        i = i + 1;
        bigRedBanner.innerText = 'Nothing yet...😔 Reloading in (' + (refreshAfter-i) + ')';

        //input.value = i;
       

        if (i == refreshAfter) {
          location.reload();
        }


    }, 1000);

}
else {
  	
  	slotFoundSound.play();
    bigRedBanner.setAttribute('style', 'width:100%; background-color: red;text-align:center;padding-top: 15px; padding-bottom:20px; color: white; font-weight: bolder; font-size:33px;');
    bigRedBanner.innerText = '🎉SLOT FOUND!🎉';

}
