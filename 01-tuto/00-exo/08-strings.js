// function fullname(name, lastname) {
//   // maniere la plus simple
//   return `${name} ${lastname}`.toLocaleUpperCase();
// }

const fullname = ({ name, lastname }) =>
  `${name} ${lastname}`.toLocaleUpperCase();

console.log(fullname({ name: "alex", lastname: "hu" }));
