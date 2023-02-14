document.querySelector("#city-options").addEventListener('input', e => {
  console.log("мур")
  const city = document.getElementById('city-options').value;
  const dataForm = document.querySelector('#post_options')
  dataForm.innerHTML = ''

  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'https://api.novaposhta.ua/v2.0/json/',
    data: JSON.stringify({
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
        Limit: 555
      },
      apiKey: 'd2f1d924423a9a17e82873f4e6922804'
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    xhrFields: {
      withCredentials: false 
    },
    success: function(texts) {
      let text = texts.data
      
      text.forEach(function(entry) {
        dataForm.innerHTML += `<option value="${entry.Description}">${entry.Description}</option>`
      });
    },
  });
})