const rachel = {
  name: "Rachel",
  age: 18,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => rachel
  }
}

export default resolvers;
