const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmit);

function formSubmit (ev){
    ev.preventDefault();// зупиняє перезавантаження сторінки
  const formData = new FormData(ev.currentTarget);
  formData.forEach((value) => {
    
    if (value === "") {
                  return alert(' всі поля повинні бути заповнені');
              }
              console.log(value)
  });

ev.currentTarget.reset();

}