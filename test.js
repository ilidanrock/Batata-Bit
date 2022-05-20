const array = [
  {
    id: 2,
    name: "John Doe",
  },
  {
    id: 1,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Samuel Soe",
    phone: "+12223334444",
  },
  {
    id: 2,
    name: "John Doe",
    email: "rluis",
  },
  {
    id: 4,
    name: "John Doe",
  },
  {
    id: 4,
    name: "John Doe",
    pet: "Rocco",
    married: true
  },
];

function dedupe(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result.push(array[i]);
      continue;
    }
    let r = result.some((ele) => ele.id === array[i].id);
    if (r) {
      result = result.map((ele, index) => {
        if (ele.id === array[i].id) {
          return (ele[index] = { ...ele, ...array[i] });
        } else {
          return ele;
        }
      });
    } else {
      result.push(array[i]);
    }
  }
  return result
}

 console.log(dedupe(array)); 
