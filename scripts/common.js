$(function(){
  autoResize();
  $(window).on('resize', autoResize);
})

function autoResize(){
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;
  let scale = 1;
  let defaultWidth = 1920;
  let defaultHeight = 1080;
  if (winWidth/winHeight < defaultWidth/defaultHeight) scale = winHeight / defaultHeight;
  else scale = winWidth / defaultWidth;
  $('.container').css('transform', 'scale('+ scale +')')
}
