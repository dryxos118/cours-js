const showPeople = (people) => {
  const nexPeople = people.map((person) => {
    const { name, job } = person;

    return `<p/>${name} <strong>${job}</strong></p>`;
  });
  return nexPeople.join("");
};

export default showPeople;
