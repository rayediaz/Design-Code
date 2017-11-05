$(function () {

  mentoringBubbleClick()

})

// Bubble Pops Up on Mentoring Section
function mentoringBubbleClick() {
  $('.face').on('click', function () {

    // Getting the face position from top
    var $this = $(this),
      faceTop = $this.position().top,
      // Taking 230px with relation to child 3 which is the one in the center
      vertMath = -1 * (faceTop - 230) // Changing the amout to negative

    // Moving the .faces ul when clicked
    $this.parent().css('top', + vertMath + 'px')

    $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open')
  })
}

// Setting the scroll function up
$(window).scroll(function () {
  youtubeVidScroll()
  bubbleOpenDefault()
})


// Add class .has-bubble-open to .face:nth-child(3) 
function bubbleOpenDefault() {

  var wScroll = $(window).scrollTop()

  // if section.mentoring position from the top (1047) - 350 is less than scroll value
  if ($('section.mentoring').offset().top - 350 < wScroll) {
    $('.faces').addClass('launched')

    // If face dont have class 'has-bubble-open' then bubble pops up on child 3
    if (!$('.face').hasClass('has-bubble-open')) {
      setTimeout(function () {
        $('.face:nth-child(3)').addClass('has-bubble-open')
      }, 400)
    }
  }
}


// Parallax YouTube Section
function youtubeVidScroll() {
  var wScroll = $(window).scrollTop()

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px')
}
