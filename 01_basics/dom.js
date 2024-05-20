/* Here we will discuss everything about dom */
/*
    dom expand as document object model


*/

// .....getAttributes and set Arrtibutes

// what are attributes -> jo bhi tag ke ander likhe jate hai vo attributes hote hai example class, id ...etc
// we can make our own custom attributes also

// document.querySelector('[customAttribute]').attributes.customattribute.value = "Ramesh"

// document.querySelector('[customAttribute]').setAttribute('customAttribute',"Devesh")
// document.querySelector('[customAttribute]').getAttribute('customAttribute')
// Those which are valid keyword attributes in javascript we can access or change their value directly 
document.querySelector('[customAttribute]').id = "important"; 


//How to apply styles from js
// NOTE: if you have applied style in css folder you can't acess using dom all the properties in css folder you can't modified

// document.querySelector('[customAttribute]').style.color='red'
// document.querySelector('[customAttribute]').style.border = "2px solid grey"
const list = document.querySelectorAll('p')
// for(para of list){
//     para.style.border = "1px solid grey";
//     para.style.color = 'red';
// }
// There is a better solution for this make the class style for the changes you want and setAttribute is class from js

// for(para of list){
//     para.style = `
//     color:darkblue;
//     border: 1px solid rebeccapurple;
//     font-family: 'Courier New', Courier, monospace;
//     justify-content: center;
//     margin: auto;
//     `
// }

for(paragraph of list){
    // para.setAttribute("class","modified");
    // paragraph.className = "modified";
    // but if we have previous class already applied in this tag or we want to apply
    // more class we have to mentions all the class.. so this is also not the way to do it
    paragraph.classList.add("modified");
}