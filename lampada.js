const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const Lamp = document.getElementById ( 'Lamp' );

function isLampBroken () {
    return Lamp.src.indexOf ( 'quebrada' ) > -1
}

function LampOn () {
    if ( !isLampBroken () ) {
         Lamp.src = './img/Ligada.jpg';
    } 

 }



function LampOff () {
    if ( !isLampBroken () ) {
       Lamp.src = './img/Desligada.jpg';
    }   
 
 }

function LampBroken () {
       Lamp.src = './img/quebrada.jpg';
} 

turnOn.addEventListener ( 'click', LampOn );
turnOff.addEventListener ( 'click', LampOff );
Lamp.addEventListener ( 'mouseover', LampOn);
Lamp.addEventListener ('mouseleave', LampOff);
Lamp.addEventListener ('dblclick', LampBroken);