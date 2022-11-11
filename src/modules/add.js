export default class Dom {
  isChecked (c) {
    if (c) {
      return "checked";
    } else {
      return '';
    }
 }


  addDOM (taskArray) {
    const taskArrayDOM = '';
    taskArray.forEach( (element) => {
      taskArrayDOM = `<li><span><input type="checkbox" name="taskArray"`;
      // taskArrayDOM += isChecked(element.completed);
      taskArrayDOM += `<input class="input" type="text" name="taskArrayi" value="${element.description}"></span>`;
      taskArrayDOM += `<i class="fa-solid fa-ellipsis-vertical"></i></li><br>`;
    });
    return taskArrayDOM;
  }
}
