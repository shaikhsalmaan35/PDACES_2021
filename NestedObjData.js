const objNest = {
  data: [
    {
      name: "Aamer",
      city: "Nanded",
    },
    {
      name: "Afroz",
      city: "Mumbai",
    },
    {
      name: "Adil",
      city: "Pune",
    },
  ],
};

const filteredData = objNest.data.map((item) => item.name);

console.log(filteredData);
