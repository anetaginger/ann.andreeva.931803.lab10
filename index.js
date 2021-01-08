document.querySelector('.zanaves').addEventListener('click',function() {
    this.classList.toggle("active");
});

document.querySelector('.lamp').addEventListener('click',function() {
    const focus = document.querySelector('.focus')
    focus.classList.toggle("active");
});

document.querySelector('.hat').addEventListener('click',function() {
    const bird = document.querySelector('.bird');
    const bunny = document.querySelector('.bunny');
    bird.classList.toggle("active");
    bunny.classList.toggle("active");
});