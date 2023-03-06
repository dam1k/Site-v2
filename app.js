const toggle = document.getElementById('toggle');
const cta_btn = document.querySelector('.cta-btn');
const close_btn = document.querySelector('#close-btn');
const modal = document.getElementById('modal');

//Event Listeners
toggle.addEventListener('click', showNav);

function showNav() {
    document.body.classList.toggle('show-nav');
}

cta_btn.addEventListener('click', () => modal.classList.add
('show-modal'));

close_btn.addEventListener('click', () => modal.classList.remove
('show-modal'));

//Hide modal on outside click
/*modal.addEventListener('click', function(e){
    if(e.target !== modal.firstElementChild){
        modal.classList.remove('show-modal');
    } else {
        return
    }
})*/

window.addEventListener('click', e => e.target === modal ? modal.classList.remove('show-modal'):false);