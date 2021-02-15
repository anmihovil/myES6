const menu = document.querySelector('#menu');
const btn = document.querySelector('button');
btn.addEventListener('click', numbersList);

function createListElement(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


// menu.appendChild(createListElement('Home'));
// menu.appendChild(createListElement('About Us'));
// menu.appendChild(createListElement('Contact'));

function numbersList() {
    const num = prompt('Please enter number of itterations:');
    for( let i = 0; i < num; i++){
        let n = i + 1;
        menu.appendChild(createListElement(n));
    }
}
