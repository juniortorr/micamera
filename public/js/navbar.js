const classToggle = () => {
    const options = document.querySelector('.options')
    options.classList.toggle('hidden');
}

document.querySelector('.icon-hidden').addEventListener('click', classToggle);

console.log('hello')