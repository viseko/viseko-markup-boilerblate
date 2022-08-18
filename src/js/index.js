const doSomething = (el) => {
  console.log(el)
};

const arr = [1, 2, 3, 5];

const myName = "Ivan";

for (let i = 0; i < arr.length; i++) {
  if (arr[i].name === myName) {
      doSomething(arr[i]);
      // break was supposed to be here
  }
  break;
}
