import './style.css';
import UI from './modules/ui.js';

const { listItems } = UI;
const ul = document.getElementById('leaderboard_ul_id');

ul.innerHTML = `${listItems}`;
