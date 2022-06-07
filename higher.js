'use strict';
import {tomb} from "./elemek.js";

// let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tomb = [9, 10, 5, 6, 8, 5, 9, 2];

function tombKiir(tomb){
    let szoveg = '';
    for(let i = 0; i < tomb.length; i++){
        if(i != tomb.length - 1){
            szoveg += `${tomb[i]} - `
        }else {
            szoveg += `${tomb[i]} `
        }
    }
    console.log(szoveg);
}
tombKiir(tomb);

// forEach - higher function - magasabbrendű függvény
let osszeg = 0;
tomb.forEach((value, index, array) => {
    osszeg += value;
});

console.log(`A tömb elemeinek összege: ${osszeg}`);

// map - higher function - magasabbrendű függvény - létrehoz egy új tömböt, eredeti elemszámmal
let eredmenyTomb1 = tomb.map((value, index, array) => {
    return value * 2;
});
tombKiir(eredmenyTomb1);

// filter - higher function - magasabbrendű függvény - új tömbbel tér vissza, (eredeti elemszámmal, vagy mással)
let eredmenyTomb2 = tomb.filter((value, index, array) => {
    return (value % 2 == 0);
});
tombKiir(eredmenyTomb2);

// reduce - reduceRight - higher function - magasabbrendű függvény - implicit módon egy értékkel tér vissza
let eredmeny = tomb.reduce((total, value, index, array) =>{
    return total * value;
},10);

console.log(`Az eredmény: ${eredmeny}`);

let betuTomb = ['a', 'l', 'm', 'a'];
let szo = betuTomb.reduce((total, value) =>{
    return total + value;
});

console.log(`A szó: ${szo}`);

// every - higher function - magasabbrendű függvény - logikai értékkel tér vissza
let minden = tomb.every((value, index, array) =>{
    console.log(`A tömb hossza: ${array.length}`)
    return value >= array.length;
});

console.log(minden);

// some - higher function - magasabbrendű függvény - logikai értékkel tér vissza
let valamelyik = tomb.some((value, index, array) =>{
    return value > array.length;
});
console.log(valamelyik);

// indexOf - lastIndexOf - higher function - magasabbrendű függvény - az elem pozíciója, indexe
let elsoTalalat = tomb.indexOf(5,1);
let utolsoTalalat = tomb.lastIndexOf(5);
console.log(elsoTalalat);
console.log(utolsoTalalat);

// find - higher function - magasabbrendű függvény - megtalálja az első megfelelő elemet
let megfelelo = tomb.find((value, index, array) =>{
    return value > array.length;
});
console.log(`Az első megfelelő elem: ${megfelelo}`);

// findIndex - higher function - magasabbrendű függvény - visszatér az első megfelelő elem indexével
