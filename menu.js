document.addEventListener("DOMContentLoaded", function(event) {

  this.bind = function() {

    this.els.btMenu.addEventListener('click', function(){
      console.log("tolo");
      // current status of the navigation
      var open = this.els.menu.getAttribute( 'aria-hidden' ) === 'false';
      this.data.navOpen = !open;

      this.els.menu.setAttribute("aria-hidden", open );
      this.els.btMenu.setAttribute("aria-expanded", !open );

    }.bind(this) );

  };

  this.dom = function() {
  // store selectors
    this.els = {
      menuCtn : document.querySelector(".menu"),
      btMenu : document.querySelector(".menuBtn"),
      menu : document.querySelector(".nav")
    };
    // Store Datas
    this.data = {
      mql : window.matchMedia("(min-width: 1024px)")
    };
  };

  this.init = function() {
    this.dom();
    this.bind();
    // this.handleMq();
  };
  this.init();
  return {};
});
