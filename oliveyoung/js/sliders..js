//--------- 메인 슬라이더---------

$(function () {
$('#main-slide').slick( {
  autoplay: true, //자동시작
  autoplaySpeed: 3000, //자동넘기기 시간
  fade: true, //부드럽게 넘기기
  cssEase: 'linear', //부드럽게 넘기기
  prevArrow:$('.prev'),
  nextArrow:$('.next'),
});

  //----------view 슬라이더-----------
// 이미지 박스
$('.view-img').slick( {
  autoplay: true, //자동시작
  autoplaySpeed: 2000, //자동넘기기 시간
  infinite:true,
  vertical: true,
  prevArrow:false, 
  nextArrow:false,
});

//텍스트 박스
$('.view-text').slick( {
autoplay: true, //자동시작
autoplaySpeed: 2000, //자동넘기기 시간
infinite:true,
vertical: true,
prevArrow:false,
nextArrow:false
});

// 메인 슬라이더 pause, play 버튼
var sw = 0;
	$('.btn_pause').click(function(){
	if(sw==0){
		$('.btn_pause').addClass('on');
		$('.product_list').slick('slickPause')
		sw = 1;
	}else{
		$('.btn_pause').removeClass('on');
		$('.product_list').slick('slickPlay')
		sw = 0;
		}
	});
  
// 메인 슬라이드 인덱스 페이지번호
    var $slider = $('#main-slide');

    if ($slider.length) {
      var currentSlide;
      var slidesCount
      var sliderCounter = document.createElement('div');
      sliderCounter.classList.add('slider__counter');
      
      var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + '/' + '5')
      };
    
      $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });
    
      $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });
    
      $slider.slick();
    }

  })    
