import Display from './modules/functionality.js';
import './style.css';

document.querySelector('.toDo-list').innerHTML = `
<ul class="display-list">
${Dom.addDOM(taskArray)}
</ul>
`;
