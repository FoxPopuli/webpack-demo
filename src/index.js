import _ from 'lodash';
import myName from './myName';
import './style.css';
import printMe from './print';

const component = (greeting) => {
    const element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.textContent = greeting;
    const btn = document.createElement('button');
    btn.onclick = printMe;
    btn.textContent = 'Click me and check the console!';
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component(myName('Bob')))
