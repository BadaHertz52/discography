'use strict';
// 공통 //

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
  function addEventListener() {
    $lists.forEach(btn => {

      //클릭 시 해당 곡 가사 보이고, 다른 가사들은 숨김처리
      btn.addEventListener('click',function
      (){
      //버튼과 같은 index 의 가사가 보이도록
        // btn의 index 구하기
        const $index = $arrayTrackLists.indexOf(btn);

        // btn과 같은 index 가사 보임
        $contents[$index].classList.toggle('on');
        //$content.classList.toggle('on') ;//
      });

    });


  }
    addEventListener();

    };

(function do_ShowLyrics () {
  const content_place = document.querySelector('#content_place');
  if (lyric_place){
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


