let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.unshift('Meditar');  

tasksList.push('Fazer exercícios da Trybe', 'Fazer café da tarde');  
console.log(tasksList);

tasksList.pop();
console.log(tasksList);

tasksList.shift();
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
