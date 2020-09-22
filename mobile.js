var mobile = [
    {
      name: "iphone",
      brand: "apple",
      features: { os: "ios", mem: 3 },
      accessories: ["bluetooth", "headphones"],
    },
    {
      name: "s7",
      brand: "samsung",
      features: { os: "android", mem: 4 },
      accessories: ["bluetooth", "headphones"],
    },
    {
      name: "lumia",
      brand: "microsoft",
      features: { os: "windows", mem: 8 },
      accessories: ["bluetooth", "headphones"],
    },
    {
      name: "a1",
      brand: "blackberry",
      features: { os: "symbian", mem: 310 },
      accessories: ["bluetooth", "headphones"],
    },
  ];
  
  for (let i in mobile) {
    console.log(mobile[i]);
  }