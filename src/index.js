const button = document.querySelector("#submit"),
      input = document.querySelector("#number"),
      text = document.querySelector("#result"),
      requestURL = "https://jsonplaceholder.typicode.com/users",
      regexp = /^\s*$/;
let inputValue = {};

window.onload = ()=>{
  input.addEventListener("focus", () =>{
    text.style.background = "";
    text.innerHTML = "";
    button.disabled = false;
  })
  
  button.addEventListener("click", () => {
      if(regexp.test(input.value)){
        text.style.color = "red";
        text.innerHTML = "This input is not correct. Please again.";
        input.value = "";
      }else{
        inputValue.number = input.value;
  
        sendRequest("POST", requestURL, inputValue)
          .then(() => {
            button.disabled = true;
            input.value = "";
            text.style.color = "green";
            text.style.background = "#ffffffb5";
            text.innerHTML = "Your order is accepted";
          })
          .catch(err => console.log(err))
      }
  })
  
  function sendRequest(method, url, body){
    return fetch(url, {
      method : method,
      body : JSON.stringify(body),
      headers: {"Content-Type" : "application/json"}
    })
      .then(respons => {
        if(respons.ok){
          respons.json();
        }else{
          return respons.json()
            .then(error => {
              const e = new Error("Ошибка");
              e.data = error;
              throw e;
            })
        }
      })
  }
}




