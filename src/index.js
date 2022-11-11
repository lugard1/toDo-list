import Dom from './modules/add.js';
import taskArray from './modules/taskArray.js';
import './style.css';

document.querySelector('.toDo-list').innerHTML = `
<ul>
${Dom.addDOM(taskArray)}
</ul>
`;
