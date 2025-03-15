//use callbacks in this case as once a promise settles/resolves/gets rejected once, it stays settled and therefore cannot be used again.
const submitForm = function (callback) {
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const formValue = document.querySelector("#search").value;
    callback(formValue);
  });
};

export { submitForm };
