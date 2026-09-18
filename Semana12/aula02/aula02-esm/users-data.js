const users = [
  {
    name: "Felipe",
    age: 34,
  },
  {
    name: "Loris",
    age: 34,
  },
  {
    name: "Linus Torvald",
    age: 50,
  },
];

export function ageVerify(age) {
  console.log("Idade: ", age);
  if (age >= 18) {
    console.log("Maior de idade!");
  } else {
    console.log("Menor de idade!");
  }
}

export default users;
