const menu = document.querySelector('#menu');

function createListElement(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}


// menu.appendChild(createListElement('Home'));
// menu.appendChild(createListElement('About Us'));
// menu.appendChild(createListElement('Contact'));

function numbersList(num) {
    for( let i = 0; i < num; i++){
        let n = i + 1;
        menu.appendChild(createListElement(n));
    }
}

numbersList(100);
