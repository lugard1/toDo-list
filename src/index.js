import DOM from './modules/add.js';
import taskArray from './modules/taskArray.js';
import './style.css';

document.querySelector('.toDo-list').innerHTML = `
<ul class="display-list">
${DOM.addDOM(taskArray)}
</ul>
`;
