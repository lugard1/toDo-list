export default class Dom {
  static addDOM(taskArray) {
    const isChecked = (c) => {
      if (c) {
        return ' checked';
      }
      return '';
    };
    let taskArrayDOM = '';
    taskArray.forEach((element) => {
      taskArrayDOM += '<li><span><input class="checkbox" type="checkbox" name="taskArray"';
      taskArrayDOM += isChecked(element.completed);
      taskArrayDOM += `><input class="input" type="text" name="taskArrayi" value="${element.description}"></span>`;
      taskArrayDOM += '<i class="fa-solid fa-ellipsis-vertical"></i></li><br>';
    });
    return taskArrayDOM;
  }
}
