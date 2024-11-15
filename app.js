 // Массив с городами
 const cities = ['Москва', 'Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

 
 const temperatures = [];

 // Запрос температуры для каждого города
 cities.forEach(city => {
     const temp = prompt(`Введите температуру для города ${city}:`);
     temperatures.push(parseFloat(temp));  // Добавляем температуру в массив, преобразовав в число
 });

 //Максимальная и минимальная температура
 let maxTemp = -Infinity; 
 let minTemp = Infinity; 

 temperatures.forEach(temp => {
     if (temp > maxTemp) maxTemp = temp;
     if (temp < minTemp) minTemp = temp;
 });

 
 const cityList = document.getElementById('city-list');
 cities.forEach((city, index) => {
     const listItem = document.createElement('li');
     listItem.textContent = `${city}: ${temperatures[index]}°C`;
     cityList.appendChild(listItem);
 });

 document.getElementById('max-temp').textContent = `Максимальная температура: ${maxTemp}°C`;
 document.getElementById('min-temp').textContent = `Минимальная температура: ${minTemp}°C`;