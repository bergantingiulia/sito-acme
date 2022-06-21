//pulsanti per navigazione del sito

function OffertaUp() {
    window.scrollTo(0, 1780);
  }

  function DurataUp() {
    window.scrollTo(0, 3000);
  }

  function BorseUp() {
    window.scrollTo(0, 3800);
  }

  //bottoncino per andare su

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

    function showCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:block;";
    }


  //pop up

let popUp =
document.getElementById("popup");

function goUp() {
    popUp.style = "bottom: -50px;";
}

function disappear() {
  popUp.style = "display: none;";
}
