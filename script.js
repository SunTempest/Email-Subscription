const scriptURL = 'https://script.google.com/macros/s/AKfycbzYRm6Ez5D9m0szSDIEzhWY7zektvGBDzACeKrMKCobK7eeIQFU_euREz0ynRK2y_gvag/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        const msg = document.getElementById("message");
        msg.innerHTML = "sabuskuripshon origato gozaimasu!";

        setTimeout(() => {
            msg.innerHTML = "";
        },5000)
        form.reset() 
      })
      .catch(error => console.error('Error!', error.message))
  })