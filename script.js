const NAV=document.getElementById('nav');
NAV.addEventListener('click', (event) => {
    NAV.querySelectorAll('li').forEach(el =>el.classList.remove('selected'));
    event.target.classList.add('selected');

});