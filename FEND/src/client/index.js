import { performAction } from './js/app'
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', performAction);
});
