$.ajax({
  type: 'POST',
  dataType: 'json',
  url: 'https://api.novaposhta.ua/v2.0/json/',
  data: JSON.stringify({
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: 'кагарлик',
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
    const dataForm = document.querySelector('#post_options')
    text.forEach(function(entry) {
      dataForm.innerHTML += `<option value="${entry.Description}">${entry.Description}</option>`
    });
  },
});
