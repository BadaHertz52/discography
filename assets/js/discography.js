
/* toggle 공통 */
const toggles = document.querySelectorAll('.toggle')
function closeOtherToggle(){
      toggles.forEach( toggle=> {
        if(toggle.classList.contains('on')){
          toggle.classList.remove('on');}})
    ;
  }
;

/*header navbar toggle*/

function toogleHeaderNavbar () {
    'use strict';
    const $toggles = document.querySelectorAll('.header_toggle'); // Return NodeList
    const $toggleBtn = document.querySelector('.header_toggle_btn'); // Return Element
  
  function doToggle($toggles ,$toggleBtn) {
    'use strict';
     $toggleBtn.addEventListener('click', function () {
          closeOtherToggle();
          toggleElements();
        });
     
      window.addEventListener('resize', function () {
            if (window.innerWidth > 1024) {
              offElements();
            }
          });
        
        function toggleElements() {
          [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
          });
        
        }
      function offElements() {
            [].forEach.call($toggles, function (toggle) {
              toggle.classList.remove('on');
            });
  
  }
  
  }  
    
    doToggle( $toggles , $toggleBtn ); 
  
    };

toogleHeaderNavbar ();

/*music tracklist&lyrics*/
function ShowLyrics () {
    
  // trackList 와 lyric 배열 만들기 
  const $trackLists = document.querySelectorAll(".tracklist .toggle_btn");
  const $arrayTrackLists = Array.from($trackLists);
  const $lyrics = document.querySelectorAll(".lyric") ;
  const $arrayLyrics = Array.from($lyrics);
  const $trackToggleBtns = document.querySelectorAll('.toggle_btn');
  
  function addEventListener() {
    $trackToggleBtns.forEach(btn => {
     
      //클릭 시 해당 곡 가사 보이고, 다른 가사들은 숨김처리 
      btn.addEventListener('click',function
      (){
        closeOtherToggle();
      //버튼과 같은 index 의 가사가 보이도록 
        // btn의 index 구하기 
        const $index = $arrayTrackLists.indexOf(btn);
        
        // btn과 같은 index 가사 보임 
        const $lyric = $arrayLyrics[$index] ;
        $lyric.classList.toggle('on') ;
      });
      // 더블 클릭 시 해당 곡 가사 숨김처리 
        btn.addEventListener('dblclick',function
      (){
        
        toggles.forEach( function toggleRemove (toggle){toggle.classList.remove('on')} )
        });
    });

    
  }
    addEventListener();
  
    };
  
ShowLyrics ();

/*more*/
function toogleMore () {
    'use strict';
    const $toggle = document.querySelector('.more .toggle'); 
    const $toggleBtn = document.querySelector('.more .toggle_btn');
  
  function doToggle($toggle ,$toggleBtn) {
    'use strict';
     $toggleBtn.addEventListener('click', function () {
       $toggle.classList.toggle('on');
        });
  }  
    
    doToggle( $toggle , $toggleBtn ); 
  
    };

toogleMore();


