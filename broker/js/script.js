let activeTopCard = false;
document.querySelector('.info__open').addEventListener('click', event => {
    if ( activeTopCard == false ) {
        document.querySelector('.info__text').classList.add('info__text-active');
        document.querySelector('.info__open').style.transform = "rotate(180deg)";
        activeTopCard = true;
    } else {
        document.querySelector('.info__text').classList.remove('info__text-active');
        document.querySelector('.info__open').style.transform = "rotate(0deg)";
        activeTopCard = false;
    }
})