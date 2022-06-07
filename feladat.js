'use strict';

import {tomb} from './elemek.js';

let idosebb = tomb.filter((value, index, array) =>{
    return value.kor > 26;
});

let evszam = document.getElementById("evszam")

idosebb.forEach((value) => {
    let nev = document.createElement('h1');
    nev.innerText = `Név: ${value.nev}`;
    let kor = document.createElement('p');
    kor.innerText = `Kor: ${value.kor};`
    evszam.appendChild(kor);
});

