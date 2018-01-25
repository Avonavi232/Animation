'use strict';

function wrt(d) {
    console.log(d);
}

const s = Snap('#kit');

const path = s.select('path');


const pathlength = path.getTotalLength();



path.attr({
    strokeDasharray: pathlength,
    strokeDashoffset: pathlength
});


function animIn(el, len, duration) {
    Snap.animate(len, 0, function (val) {
        el.attr({
            strokeDashoffset: val
        });
    }, duration, mina.linear(), () => {
        animOut(el, len, duration);
    });
}

function animOut(el, len, duration) {

    Snap.animate(0, -len, function (val) {
        el.attr({
            strokeDashoffset: val
        });
    }, duration, mina.linear(), ()=>{
        animIn(el, len, duration);
    });
}


animIn(path, pathlength, 2000);


