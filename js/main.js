// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// Not found
const people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Alex"],
  },
];

// Not found

const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

// jhon

const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

function findNarsis(arr) {
  const resalt = arr.filter((el) => !el.know.length);
  console.log(resalt);
  if (resalt.length !== 1) {
    console.log("Not found");
    return;
  }
  const narsis = resalt[0].name;

  const isNarsis = arr.every(
    (el) => el.know.includes(narsis) || el.name === narsis
  );
  if (isNarsis) {
    console.log(narsis);
  } else {
    console.log("Not found");
  }
}

findNarsis(people1);
findNarsis(people2);
findNarsis(people3);
