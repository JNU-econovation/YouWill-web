const animation = function () {
  let items, winH;
 
  const initModule = function () {
      console.log('initModule()')

      items = document.getElementsByTagName("img")
      winH = window.innerHeight;
      console.log(items)
      console.log(winH)
      _addEventHandlers();
  }
 
  const _addEventHandlers = function () {
      console.log('addEventHandlers()')
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("resize", initModule);
  };
 
  const _checkPosition = function () {
      console.log('checkposition()')

      for (let i = 0; i < items.length; i++){
          // console.log(i)
          let posFromTop = items[i].getBoundingClientRect().top;
          
          if (winH > posFromTop) {
          // items[i].classList.add('fade-in')
          items[i].className = items[i].className.replace( "hidden", "fade-in" );
          }
      }
  }
 
  return {
    init: initModule
  }
}
 
animation().init();