const { async } = require("regenerator-runtime");

const asyncfunc = async () => {
  try {
    let a = 4;
    let b = 7;
    let c = a + b;
    console.log(c);
  } catch (error) {
    console.log(error);
  }
};

asyncfunc();
