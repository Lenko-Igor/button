const button = document.querySelector("#submit"),
      input = document.querySelector("#number"),
      error = document.querySelector("#error");
let inputValue = null;
let regexp = /^\s*$/;
     

// вешаем событие на input и button

input.addEventListener("focus", () =>{
  error.innerHTML = "";
})

button.addEventListener("click", () => {
    if(regexp.test(input.value)){
      error.innerHTML = "This input is not correct. Please again.";
      input.value = "";
    }else{
      inputValue = input.value;
      console.log(inputValue);
    }
})
