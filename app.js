$.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'https://api.novaposhta.ua/v2.0/json/',
    data: JSON.stringify({
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: 'миронівка',
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
        console.log(entry.Description);
      });
    },
});

