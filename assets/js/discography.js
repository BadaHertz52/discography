'use strict';
/* toggle 공통 */
const toggles = document.querySelectorAll('.toggle')
function closeOtherToggle(){
      toggles.forEach( toggle=> {
        if(toggle.classList.contains('on')){
          toggle.classList.remove('on');}})
    ;
  }
;
function doDropwoun (toggleBtns){
      toggleBtns.forEach( 
      (btn)=> { 
        btn.addEventListener('click' , function(){ 
          closeOtherToggle();
          const toggle = btn.nextElementSibling ;
          toggle.classList.toggle('on')
        } 
          )
        }
      )
}
// header nav dropdown toggle 
function toogleHeaderNavbar () {
    const $toggleBtns = document.querySelectorAll('.navbar .toggle_btn'); // node list 
    doDropwoun($toggleBtns);
 }

  toogleHeaderNavbar ();

/*music tracklist&lyrics*/
function ShowLyrics () {
    
  // trackList 와 lyric 배열 만들기 
  const $trackLists = document.querySelectorAll(".tracklist .toggle_btn");
  const $arrayTrackLists = Array.from($trackLists);
  const $lyrics = document.querySelectorAll(".lyric") ;
  
  
  
  function addEventListener() {
    $trackLists.forEach(btn => {
    
      //클릭 시 해당 곡 가사 보이고, 다른 가사들은 숨김처리 
      btn.addEventListener('click',function
      (){
        closeOtherToggle();
      //버튼과 같은 index 의 가사가 보이도록 
        // btn의 index 구하기 
        const $index = $arrayTrackLists.indexOf(btn);
        
        // btn과 같은 index 가사 보임 
        $lyrics[$index].classList.toggle('on');
        /*$lyric.classList.toggle('on') ;*/
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

(function do_ShowLyrics () {
  const lyric_place = document.querySelector('#lyric_place');


if (lyric_place){
  ShowLyrics ();
}
})();

/* music_platform*/
function togglePlatform(){
  const $toggleBtns = document.querySelectorAll('#music_platform .toggle_btn');
  doDropwoun($toggleBtns)
}

togglePlatform();

/* popup*/
function doPopup (){
  const popupBtn = document.querySelector('.popup_btn');
  const popup = document.querySelector('.popup');
  const close_btn = document.querySelector('.popup a');
  popupBtn.addEventListener('click' , function(){
    popup.classList.toggle('on') ;
  } );
  close_btn.addEventListener('click' ,function(){
    popup.classList.remove('on')
  })
}

doPopup();
/*more*/
function toogleMore () {

    const $toggle = document.querySelector('.more .toggle'); 
    const $toggleBtn = document.querySelector('.more .toggle_btn');
  function doToggle($toggle ,$toggleBtn) {
    
     $toggleBtn.addEventListener('click', function () {
       $toggle.classList.toggle('on');
        });
  }  
    
    doToggle( $toggle , $toggleBtn ); 
  
    };

toogleMore();


