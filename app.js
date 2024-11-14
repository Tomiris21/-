 // Массив с городами
 const cities = ['Москва', 'Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

 // Пустой массив для хранения температур
 const temperatures = [];

 // Запрос температуры для каждого города
 cities.forEach(city => {
     const temp = prompt(`Введите температуру для города ${city}:`);
     temperatures.push(parseFloat(temp));  // Добавляем температуру в массив, преобразовав в число
 });

 // Находим максимальную и минимальную температуру
 let maxTemp = -Infinity;  // Инициализация для поиска максимума
 let minTemp = Infinity;   // Инициализация для поиска минимума

 temperatures.forEach(temp => {
     if (temp > maxTemp) maxTemp = temp;
     if (temp < minTemp) minTemp = temp;
 });

 // Отображение списка городов и температур
 const cityList = document.getElementById('city-list');
 cities.forEach((city, index) => {
     const listItem = document.createElement('li');
     listItem.textContent = `${city}: ${temperatures[index]}°C`;
     cityList.appendChild(listItem);
 });

 // Отображение максимальной и минимальной температуры
 document.getElementById('max-temp').textContent = `Максимальная температура: ${maxTemp}°C`;
 document.getElementById('min-temp').textContent = `Минимальная температура: ${minTemp}°C`;