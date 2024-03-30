// Array Filter
const data = [10, 20, 30, 40];

const result = data.filter((e) => {
  return e > 15;
});
console.log(result);

const data2 = [
  { name: "somchai", salary: 25000, department: "prgramer" },
  { name: "som", salary: 35000, department: "marketing" },
  { name: "chai", salary: 15000, department: "internship" },
  { name: "pop", salary: 10000, department: "internship" },
  { name: "soso", salary: 55000, department: "marketing" },
];

const result2 = data2
  .filter((e) => e.salary > 20000)
  .filter((e) => e.department === "marketing");

console.log(result2);
