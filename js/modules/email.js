export default function formSubmit() {
  const form = document.querySelector("[data-form]");
  const formButton = document.querySelector("[data-submit]");
  const formName = document.getElementById("name");
  const formEmail = document.getElementById("email");
  const formMensagem = document.getElementById("mensagem");
  let url;
  if (form) url = form.getAttribute("action");

  function displaySucess() {
    formButton.style.display = "none";
    const spanSucess = document.createElement("span");
    spanSucess.classList.add("sucesso");
    spanSucess.innerText =
      "Agradeço pelo seu contato! Entrarei em contato em breve.";
    form.appendChild(spanSucess);
    formName.value = "";
    formEmail.value = "";
    formMensagem.value = "";
  }

  function displayError() {
    formButton.style.display = "none";
    const spanError = document.createElement("span");
    spanError.classList.add("erro");
    spanError.innerText =
      "Ops! Parece que houve um problema. Por favor, tente novamente.";
    form.appendChild(spanError);
  }

  async function sendForm(event) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formObject()),
    };
    try {
      onSubmission(event);
      await fetch(url, options);
      displaySucess();
    } catch (error) {
      displayError();
    }
  }

  function formObject() {
    const formObj = {
      email: formEmail.value,
      name: formName.value,
      mensagem: formMensagem.value,
    };
    return formObj;
  }

  function onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerHTML =
      'Enviando<span class="dot" id="dot1">.</span><span class="dot" id="dot2">.</span><span class="dot" id="dot3">.</span>';
  }

  if (form) formButton.addEventListener("click", sendForm);
}
