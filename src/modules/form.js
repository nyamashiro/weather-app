//call back version
// const submitForm = function (callback) {
//   const submit = document.querySelector("#submit");

//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const formValue = document.querySelector("#location").value;
//     callback(formValue);
//   });
// };

//promises version
const submitForm = function () {
  return new Promise((resolve, reject) => {
    const submit = document.querySelector("#submit");

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      const formValue = document.querySelector("#location").value;
      if (formValue) {
        resolve(formValue);
      } else {
        reject("Location not found");
      }
    });
  });
};

export { submitForm };
