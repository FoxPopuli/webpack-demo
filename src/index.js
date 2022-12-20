import _ from 'lodash'
import myName from './myName'
import './style.css'

const component = (greeting) => {
    const element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.textContent = greeting;
    
    return element;
}

document.body.appendChild(component(myName('Bob')))
// console.log(myName('Bob'));
