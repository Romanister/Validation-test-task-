let Inputs = document.getElementsByClassName("input");
let Prompt = document.getElementsByClassName("prompt");

const submit = () => {
  console.log(Date.parse(Inputs[5].value));
  for (let x of Array.from(Prompt)) {
    x.remove();
  }
  for (let i = 0; i < Inputs.length; i++) {
    if (Inputs[i].value == false) {
      Object(Inputs)[i].classList.add("error");
    } else {
      Object(Inputs)[i].classList.remove("error");
    }
  }
  if (nameReg(Object(Inputs)[0].value) == false) {
    Object(Inputs)[0].insertAdjacentHTML(
      "afterend",
      '<div class = "prompt">Введите свое имя, начиная с большой буквы. Имя должно содержать от 2-х до 16 букв.</div>'
    );
  }
  if (surnameReg(Object(Inputs)[1].value) == false) {
    Object(Inputs)[1].insertAdjacentHTML(
      "afterend",
      '<div class = "prompt">Введите свою фамилию, начиная с большой буквы. Фамилия должна содержать от 2-х до 16 букв.</div>'
    );
  }
  if (emailReg(Object(Inputs)[2].value) == false) {
    Object(Inputs)[2].insertAdjacentHTML(
      "afterend",
      '<div class = "prompt">Введите корректный email адрес</div>'
    );
  }
  if (passwordReg(Object(Inputs)[3].value) == false) {
    Object(Inputs)[3].insertAdjacentHTML(
      "afterend",
      '<div class = "prompt">Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ.</div>'
    );
  }
  if (Inputs[4].value !== Inputs[3].value) {
    Object(Inputs)[4].insertAdjacentHTML(
      "afterend",
      '<div class = "prompt">Пароли не совпадают</div>'
    );
  }
  if (Date.now() - Date.parse(Inputs[5].value) < 568036800000) {
    Object(Inputs)[5].insertAdjacentHTML(
      "afterend",
      '<div class = "prompt">Вам должно быть больше 18 лет</div>'
    );
  }
};

const nameReg = (name) => {
  let regN = /^[А-Я]{1}[а-я]{1,16}$/;
  return regN.test(String(name));
};
const surnameReg = (surname) => {
  let regS = /^[А-Я]{1}[а-я]{1,16}$/;
  return regS.test(String(surname));
};
const emailReg = (email) => {
  let regE =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regE.test(String(email).toLowerCase());
};
const passwordReg = (password) => {
  let regP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
  return regP.test(String(password));
};
