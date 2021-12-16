import './style.css';
import api from './modules/api.js';

const { submitScore, fetchDataFromAPI } = api;

const nameInput = document.getElementById('name_input');
const scoreInput = document.getElementById('score_input');

const refreshButton = document.getElementById('refresh_button');
const submitButton = document.getElementById('submit_button');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await submitScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromAPI();
  refreshButton.addEventListener('click', async () => {
    fetchDataFromAPI();
  });
});
