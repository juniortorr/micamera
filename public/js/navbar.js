const classToggle = () => {
    const options = document.querySelector('.options2')
    options.classList.toggle('hidden');
}

document.querySelector('.icon-hidden').addEventListener('click', classToggle);

console.log('hello')