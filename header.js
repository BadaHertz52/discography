var Logo = function Logo() {
  return React.createElement(
    "div",
    { className: "logo" },
    React.createElement(
      "a",
      { href: "./main.html" },
      React.createElement("img", { src: "./assets/images/bts_logo.png", alt: "bts_logo", type: "button", name: "headernavbar btn" })
    )
  );
};

var Navbar = function Navbar() {
  function doDropdown(toggleBtns) {
    toggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var toggles = document.querySelectorAll('.dropdown .toggle');
        toggles.forEach(function (toggle) {
          return toggle.classList.remove('on');
        });
        var nextToggle = btn.nextElementSibling;
        nextToggle.classList.toggle('on');
      });
    });
  }
  function toogleHeaderNavbar() {
    var $toggleBtns = document.querySelectorAll('.navbar .toggle_btn'); // node list
    doDropdown($toggleBtns);
  }

  return React.createElement(
    "div",
    { className: " navbar " },
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", onClick: toogleHeaderNavbar },
        "\xA0 RM \xA0"
      ),
      React.createElement(
        "ul",
        { className: "toggle", "aria-labelledby": "navbarDropdown" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./rm1.html" },
            "Rap Monster"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./rm2.html" },
            "MONO"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./rm0.html" },
            "+\u266A"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "./jin1.html" },
        "\xA0 JIN \xA0"
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "#", onClick: toogleHeaderNavbar },
        "SUGA"
      ),
      React.createElement(
        "ul",
        { className: "toggle", "aria-labelledby": "navbarDropdown" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./suga1.html" },
            "Agust D"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./suga2.html" },
            "D-2"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./suga0.html" },
            "+\u266A"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "#", onClick: toogleHeaderNavbar },
        "JHOPE"
      ),
      React.createElement(
        "ul",
        { className: "toggle", "aria-labelledby": "navbarDropdown" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./jhope1.html" },
            "Hope World"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "./jhope0.html" },
            "+\u266A"
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "./jimin1.html" },
        "JIMIN"
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "./v1.html" },
        "\xA0\xA0\xA0V \xA0\xA0\xA0"
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "./jk1.html" },
        "\xA0\xA0JK\xA0\xA0"
      )
    ),
    React.createElement(
      "div",
      { className: "dropdown" },
      React.createElement(
        "a",
        { className: "toggle_btn", href: "./more.html" },
        "\xA0\xA0+\u2661\xA0\xA0"
      )
    )
  );
};

function ShowNavbar() {
  return React.createElement(
    "div",
    null,
    React.createElement(Logo, null),
    React.createElement(Navbar, null)
  );
}

ReactDOM.render(React.createElement(ShowNavbar, null), document.querySelector('#header'));