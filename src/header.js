const Logo =()=>{
  return(
    <div className="logo">   
      <a href="./main.html">
        <img src="./assets/images/bts_logo.png" alt="bts_logo" type="button" name="headernavbar btn" />
      </a>
    </div>
  )
};

const Navbar =()=> {
  function doDropdown (toggleBtns){
    toggleBtns.forEach( 
    (btn)=> { 
      btn.addEventListener('click' , function(){ 
        const toggles =document.querySelectorAll('.dropdown .toggle');
        toggles.forEach(toggle =>toggle.classList.remove('on'));
        const nextToggle = btn.nextElementSibling ;
        nextToggle.classList.toggle('on')
      } 
        )
      }
    )
  } 
  function toogleHeaderNavbar () {
    const $toggleBtns = document.querySelectorAll('.navbar .toggle_btn'); // node list
    doDropdown($toggleBtns);
  }

  return(
  <div className=" navbar ">
    <div className="dropdown">
      <a  className="toggle_btn" onClick={toogleHeaderNavbar}>
        &nbsp; RM &nbsp;
      </a>
      <ul className="toggle" aria-labelledby="navbarDropdown">
        <li><a href="./rm1.html">Rap Monster</a></li>
        <li><a href="./rm2.html">MONO</a></li>
        <li><a href="./rm0.html">+♪</a></li>
      </ul>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="./jin1.html">
        &nbsp; JIN &nbsp;
      </a>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="#" onClick={toogleHeaderNavbar}>SUGA</a>
      <ul className="toggle" aria-labelledby="navbarDropdown">
        <li><a href="./suga1.html">Agust D</a></li>
        <li><a href="./suga2.html">D-2</a></li>
        <li><a href="./suga0.html">+♪</a></li>
      </ul>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="#" onClick={toogleHeaderNavbar}>JHOPE</a>
      <ul className="toggle" aria-labelledby="navbarDropdown">
        <li><a href="./jhope1.html">Hope World</a></li>
        <li><a href="./jhope0.html">+♪</a></li>
      </ul>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="./jimin1.html">JIMIN</a>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="./v1.html">&nbsp;&nbsp;&nbsp;V &nbsp;&nbsp;&nbsp;</a>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="./jk1.html">&nbsp;&nbsp;JK&nbsp;&nbsp;</a>
    </div>    
    <div className="dropdown">
      <a  className="toggle_btn"  href="./more.html">
        &nbsp;&nbsp;+♡&nbsp;&nbsp;
      </a>

    </div>     
  </div>
  )
};

function ShowNavbar (){
  return(
    <div>
      <Logo/>
      <Navbar/>
    </div>
  )
} 

ReactDOM.render(<ShowNavbar/> , document.querySelector('#header'));