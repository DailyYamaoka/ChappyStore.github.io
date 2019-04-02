window.onload = function(){
	document.getElementById("marker").insertAdjacentHTML('afterbegin',creatCode());
}

function creatCode(){ 
    var rand = Math.floor(Math.random() * 2) + 1;
    var str = "plate" + rand;
    var newCode = '<a-obj-model position="0 0.5 0" src="'
      + str
      + '" scale="2.5 2.5 2.5">'
      + '  <a-animation attribute="rotation"'
      + '           to="0 360 0"'
      + '           fill="forwards"'
      + '           repeat="indefinite"'
      + '           dur="12000"' 
      + '           easing="linear">'
      + '  </a-animation>'
      + '</a-obj-model>';
    
	return newCode;
}
