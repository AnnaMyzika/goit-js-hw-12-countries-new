import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  input: document.querySelector('.input'),
  countries: document.querySelector('.countries'),
};
// fetchCountries('usa').then(data => console.log(data));

refs.input.addEventListener('input', debounce(createMarkup, 500));

function createMarkup({ target: { value } }) {
  if (value.trim() === '') {
    return;
  }
  fetchCountries(value.trim())
    .then(data => {
      if (data.length >= 2 && data.length <= 10) {
        refs.countries.innerHTML = '';
        const markup = data.reduce(
          (acc, { name }) => acc + `<li>${name}</li>`,
          '',
        );
        refs.countries.insertAdjacentHTML('beforeend', markup);
      }

      if (data.length === 1) {
        refs.countries.innerHTML = '';
        const { capital, population, languages, flag } = data[0];
        const langStr = languages.reduce(
          (acc, { name }) => acc + `<li>${name}</li>`,
          '',
        );
        const markup = `<li>
        <p>Population: ${population}</p>
        <p>Capital: ${capital}</p>
        <ul>${langStr}</ul>
        <img src='${flag}' width='300px'>
        </li>`;
        refs.countries.insertAdjacentHTML('beforeend', markup);
        console.log(languages);
      }

      if (data.length > 10) {
        refs.countries.innerHTML = '';
        error({
          text: 'Too many matches found. Please enter a more specific query!',
          delay: 3000,
        });
      }
    })
    .catch(() => {
      refs.countries.innerHTML = '';
      error({
        text: 'Error more specific query!',
        delay: 3000,
      });
    });
}
