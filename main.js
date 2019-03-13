const names = [];
const div = document.querySelector('div');

const addName = (e) => {
e.preventDefault(); //nie odświerza strony po dodaniu
const input = document.querySelector('input');
const newName = input.value; // pobieram wartośćz inputa

if(input.value.length) { //sprawdzam cz ywartość inputa jest większa niż 0//
    for(name of names){ //sprawdzamy czy wartość z inputa jest w naszej tablicy//
        if(name === newName){
           alert("To już jest");
            return
        }
}
names.push(newName);

div.textContent += newName + ", ";
input.value = "";

}}

document.querySelector('button').addEventListener('click', addName);