const cityOptions = document.querySelector("#city-options");
const postOptions = document.querySelector("#post-options");

cityOptions.addEventListener('input', function() {
  const city = cityOptions.value;
  postOptions.innerHTML = '';

  const API_KEY = 'd2f1d924423a9a17e82873f4e6922804';
  const LIMIT = 555;
  const API_URL = `https://api.novaposhta.ua/v2.0/json/`;

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: city,
        Limit: LIMIT
      },
      apiKey: API_KEY
    })
  })
  .then(response => response.json())
  .then(data => {
    data.data.forEach(entry => {
      addPostOption(entry.Description);
    });
  })
  .catch(error => console.error(error));
});

function addPostOption(description) {
  const option = document.createElement('option');
  option.value = description;
  option.textContent = description;
  postOptions.appendChild(option);
}