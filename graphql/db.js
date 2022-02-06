export const people = [
  {
    id: "0",
    name: "Rachel",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "Yehyun",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Hangyu",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Jin",
    age: 18,
    gender: "mal"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filteredPeople[0];
}
