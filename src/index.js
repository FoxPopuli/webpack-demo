import _ from 'lodash'
import myName from './myName'
const component = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    
    return element;
}

document.body.appendChild(component())
console.log(myName('Bob'))
