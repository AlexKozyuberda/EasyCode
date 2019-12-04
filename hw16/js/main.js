// 2. Напишите автокомплит. Это такой инпут',' в который вы начинаете вводить текст',' а он подсвечивает варианты.
// Пример автокомплита - гугл поиск
// У вас может быть автокомлит по животным/цветам/городам.

const arrayCities = [
	'Черновцы',
	'Чернигов',
	'Черкассы',
	'Хмельницкий',
	'Херсон',
	'Харьков',
	'Ужгород',
	'Тернополь',
	'Сумы',
	'Кадиевка',
	'Славянск',
	'Симферополь',
	'Северодонецк',
	'Севастополь',
	'Ровно',
	'Полтава',
	'Павлоград',
	'Одесса',
	'Никополь',
	'Николаев',
	'Мелитополь',
	'Мариуполь',
	'Макеевка',
	'Львов',
	'Луцк',
	'Луганск',
	'Лисичанск',
	'Кропивницкий',
	'Кривой Рог',
	'Кременчуг',
	'Хрустальный',
	'Краматорск',
	'Константиновка',
	'Киев',
	'Керчь',
	'Каменское',
	'Каменец-Подольский',
	'Ивано-Франковск',
	'Запорожье',
	'Житомир',
	'Енакиево',
	'Евпатория',
	'Донецк',
	'Днепр',
	'Горловка',
	'Винница',
	'Бровары',
	'Бердянск',
	'Белая Церковь',
	'Алчевск',
	'Александрия'
];

const input = document.querySelector('.field-input');

function getAutocomplete() {
	const autocomplete = document.querySelector('.autocomplete');
	const autocompleteList = document.querySelector('.autocomplete-list');

	let inputValue = input.value;

	if (inputValue) {
		inputValue = input.value[0].toUpperCase() + input.value.slice(1);
		autocomplete.classList.add('show');
	} else {
		autocomplete.classList.remove('show');
	}

	let amountLetters = inputValue.length;

	autocompleteList.innerHTML = '';
	
	arrayCities.filter(city => {
		let autocompleteItem = `<li class="autocomplete-item">
													<a href="#" class="autocomplete-link">${city}</a>
												</li>`;
												
		for (let i = 0; i < amountLetters; i++) {
			if (inputValue === city.slice(0, amountLetters)) {
				return autocompleteList.insertAdjacentHTML('beforeend', autocompleteItem);
			} 
		}
	});
}

input.addEventListener('input', getAutocomplete);