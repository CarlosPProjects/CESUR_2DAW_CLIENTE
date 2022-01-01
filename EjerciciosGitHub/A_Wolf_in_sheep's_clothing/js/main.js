/**
 * @file Encontrar al lobo oculto en el array.
 * @author Carlos Garavito
 * @version 0.0.1
 * https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
 */

 var farm = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf'];
 var pivot;
 
 farm.sort();
 console.log()
 
 for (let i = farm.length; i > 0; i--) {
     pivot = farm[i-1];
 
     if(pivot == 'sheep') {
         console.log("Oi! Sheep number "+ i + "! You are about to be eaten by a wolf!")
     } else if(pivot == 'wolf') {
         console.log("Pls go away and stop eating my sheep");
     }
 }
 
 