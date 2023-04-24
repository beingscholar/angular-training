const initialState = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
  ];
  const arr = [
    { id: 3, name: "C" },
    { id: 4, name: "D" }
  ];
  
  const employees = [...initialState, ...arr];
  
  console.log(employees);
  
  const arr1 = ["Cecilie", "Lone"];
  const arr2 = ["Emil", "Cecilie", "Linus"];
  const children = arr1.concat(arr2);
  const children1 = [...arr1, ...arr2];
  console.log(children);
  console.log(children1);
  const children2 = children1.filter((item, pos) => children1.indexOf(item) === pos);
  var children3 = [...new Set([...children])];
  // const children2 = arr1.merge(arr2);
  console.log(children2);
  console.log(children3);
  console.log(Array.from(new Set(arr1.concat(arr2))));
  
  const myArray = [1, 2, 3, 4, 5, 2, 4, 3, 2];
  
  const x = myArray.filter((item) => item !== 2);
  
  console.log(x);
  
  (function (x) {
    console.log(x);
  })(1)