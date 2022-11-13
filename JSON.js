//API = Application Programme Interface
//JSON = JavaScript Object Notation
const object = {
  id: 24,
  name: "Touhid",
  Education: {
    status: "BSc. Hons in BMB",
    School: "BSMRSTU",
  },
  Department: "BMB",
};

//Object to JSON
const userJSON = JSON.stringify(object);
console.log(userJSON);

//JSON to Object
const userObject = JSON.parse(userJSON);
console.log(userObject);
