
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
    'use strict';
   
    const $trackToggleBtns = document.querySelectorAll('.toggle_btn');
  
  
  function addEventListener() {
    $trackToggleBtns.forEach(btn => {
      //클릭 시 해당 곡 가사 보이고, 다른 가사들은 숨김처리 
      btn.addEventListener('click',function
      (){
        closeOtherToggle();
        btn.nextElementSibling.classList.toggle('on');});
      // 더블 클릭 시 해당 곡 가사 숨김처리 
        btn.addEventListener('dblclick',function
      (){
        console.log('dblclick');
        toggles.forEach( function toggleRemove (toggle){toggle.classList.remove('on')} )
        });
    });

    
  }
    addEventListener();
  
    };

ShowLyrics ();

/*mv*/
/*vlive*/

