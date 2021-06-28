'use strict';
// toggle 공통 //
const toggles = document.querySelectorAll('.toggle');

function closeOtherToggle(){
      toggles.forEach( toggle=> {
        if( toggle.classList.contains('on')){
          toggle.classList.remove('on');}})
    ;
  }
//dropDown//
function doDropdown (toggleBtns){
      toggleBtns.forEach( 
      (btn)=> { 
        btn.addEventListener('click' , function(){ 
          const toggle = btn.nextElementSibling ;
          toggle.classList.toggle('on')
        } 
          )
        }
      )
}
// close btn//
const open = document.querySelector('.open');

function Close (){
  const close_btns = document.querySelectorAll('.close');

  close_btns.forEach( btn =>{
    const close_open = btn.parentElement;
    btn.addEventListener('click' ,function(){
    close_open.classList.remove('on');

  })
  } )
}
(()=>{if (open) {
  Close()
}})();
// header nav dropdown toggle
function toogleHeaderNavbar () {
    const $toggleBtns = document.querySelectorAll('.navbar .toggle_btn'); // node list
    doDropdown($toggleBtns);

 }

  toogleHeaderNavbar ();

//mixtape//
function ShowContent () {
  // List 와 content 배열 만들기
  const $lists = document.querySelectorAll(".list .toggle_btn");
  const $arrayTrackLists = Array.from($lists);
  const $contents = document.querySelectorAll(".content") ;
  const $first_lyric = document.querySelector(".mixtape .toggle");
  const $content_place = document.querySelector(" #content_place");
  function addEventListener() {
    $lists.forEach(btn => {

      //클릭 시 해당 content가 보이고, 다른 content들은 숨김처리, 단, 가사 외의 togglebtn의 실행이면 첫번째 가사는 보이도록 함 
      btn.addEventListener('click',function
      (){
        closeOtherToggle();
      //버튼과 같은 index 의 content가 보이도록
        // btn의 index 구하기
        const $index = $arrayTrackLists.indexOf(btn); 
         // btn과 같은 index content 보임
        $contents[$index].classList.toggle('on');
        //$content.classList.toggle('on') ;//
        console.log($contents[$index].parentElement, $content_place);
        if ($contents[$index].parentElement !== $content_place)
        $first_lyric.classList.toggle('on');
        
      });

    });

  }
    addEventListener();
    };

(function do_ShowLyrics () {
  const content_place = document.querySelector('#content_place');
  if (content_place){
  ShowContent ();
  }
})();

// music_platform//
function togglePlatform(){
  const $toggleBtns = document.querySelectorAll('#music_platform .toggle_btn');
  doDropdown($toggleBtns)
}

togglePlatform();

// popup//
const popupBtn = document.querySelector('.popup_btn');
function doPopup (){
  const popup = document.querySelector('.popup');
  popupBtn.addEventListener('click' , function(){
    popup.classList.toggle('on') ;
  } );
  Close();
}
(()=>{
  if (popupBtn){
    doPopup();
  }
})()

//more//
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


