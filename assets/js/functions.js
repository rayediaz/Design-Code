$(function () {

  mentoringBubbleClick()

  setInterval(function () {
    articleTada()
  }, 4000)

  designBgChange()
})

// Changin background color on hover section design
function designBgChange() {
  $('.design-img-link').hover( function () {
    $(this).parent().parent().css('background-color', $(this).data('color'))
  }, function () {
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'))
  })
}

// Selecting random articles
function articleTada () {
  var random = Math.floor(Math.random() * $('.article-thumb').length) + 1

  $('.article-thumb').eq(random).addClass('is-emph')
    .siblings().removeClass('is-emph')
}

// Bubble Pops Up on Mentoring Section
function mentoringBubbleClick() {
  $('.face').on('click', function () {

    // Getting the face position from top
    var $this = $(this),
      faceTop = $this.position().top,
      faceLeft = $this.position().left,
      // Taking 230px with relation to child 3 which is the one in the center
      vertMath = -1 * (faceTop - 230), // Changing the amout to negative
      horizMath = 0 - faceLeft 

    if ($(window).width() > 640) {
      // Move the .faces ul from bottom to top when a face is clicked
      $this.parent().css('top', + vertMath + 'px')
    } else {
      
      if ($this.hasClass('back-btn')) {
        mentoringStart('230px', '0px', 1)
      } else {
        // Move the .faces ul from left to right when a face is clicked
        $this.parent().css('left', + horizMath + 'px')
      }
    }

    if (!$this.hasClass('back-btn')) {
      // Add bubble to face clicked
      $this.addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open')
    }
  })
}

// Setting the scroll function up
$(window).scroll(function () {
  youtubeVidScroll()
  bubbleOpenDefault()
  startArticles()
})

// Start section articles
function startArticles () {
  var wScroll = $(window).scrollTop()

  if ($('section.articles').offset().top - $(window).height() / 2 < wScroll) {
    $('.article-thumb').each(function (i) {
      setTimeout(function () {
        $('.article-thumb').eq(i).addClass('is-visible')
      }, 200 * i)
    })
  }
}

// Add class .has-bubble-open to .face:nth-child(3) 
function bubbleOpenDefault() {
  var wScroll = $(window).scrollTop()

  // if section.mentoring position from the top (1047) minus window.heigth / 2 is less than scroll value
  if ($('section.mentoring').offset().top - $(window).height() / 2 < wScroll) {
    
    if ( $(window).width() > 640) {
      $('.faces').addClass('launched')
      
      // If face dont have class 'has-bubble-open' then bubble pops up on child 3
      if (!$('.face').hasClass('has-bubble-open')) {
        setTimeout(function () {
          $('.face:nth-child(3)').addClass('has-bubble-open')
        }, 400)
      }
    } else {
      mentoringStart('230px', '0px', 1)
    }
  }
}


// Parallax YouTube Section
function youtubeVidScroll() {
  var wScroll = $(window).scrollTop()

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px')
}

// Styles applies when resize
function mentoringStart (top, left, position) {
  $('.faces').css({
    'top': top,
    'left': left
  })
  $('.face:nth-child(' + position+ ')').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open')
}

// Whenever you resize the window, the callback is called
$(window).resize(function () {
  if ($(window).width() > 640) {
    mentoringStart('0px', '0px', 3)
  } else {
    // Styles applies when is on mobile
    mentoringStart('230px', '0px', 1)
  }
})