let list = [
  {id: 1, name: 'Diego',active: true,cost: 100, categoryId: 1},
  {id: 2, name: 'João',active: false,cost: 100, categoryId: 2},
  {id: 3, name: 'Amanda',active: true,cost: 100, categoryId: 3},
  {id: 4, name: 'Eduardo',active: false,cost: 100, categoryId: 1},
  {id: 5, name: 'Maria',active: true,cost: 100, categoryId: 2},
  {id: 6, name: 'Renato',active: true,cost: 100, categoryId: 3},
  {id: 7, name: 'Jéssica',active: false,cost: 100, categoryId: 1},
]

let newArray = [];
list.forEach(function(item,index) { 
  let percentage;
  switch (item.categoryId) {
    case 1:
      percentage = 1.05;
      break;
    case 2:
      percentage = 1.075;
      break;
    case 3:
      percentage = 0.9845;
      break;
    default:
      percentage = 1;
      break;
  }
  
  if (item.active){
    newArray.push({
      id: item.id,
      name : item.name,
      price : item.cost * percentage
    })
  }
});


console.log(newArray);