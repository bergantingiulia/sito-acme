//pulsanti per navigazione del sito

function OffertaUp() {
    window.scrollTo(0, 1900);
  }

  function DurataUp() {
    window.scrollTo(0, 3100);
  }

  function BorseUp() {
    window.scrollTo(0, 3800);
  }

  //bottoncino per andare su

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

//cookie
function showCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:block;";
    }
function hideCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:none;";
    }
