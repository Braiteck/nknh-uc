$(() => {
	// Фотогалерея
	if ($('.gallery .swiper-container').length) {
		new Swiper('.gallery .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.gallery-swiper-button-next',
				prevEl: '.gallery-swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 14,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 14,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1279: {
					spaceBetween: 20,
					slidesPerView: 4
				}
			}
		})
	}


	// Ответ на комментарий
	$('.comment .reaply_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		if (!$(this).hasClass('active')) {
			$(this).addClass('active')
			parent.find('.add_answer').slideDown(300)
		} else {
			$(this).removeClass('active')
			parent.find('.add_answer').slideUp(200)
		}
	})


	// Моб. Меню
	$('header .menu_btn, .mob_header .mob_menu_btn').click(function (e) {
		e.preventDefault()

		$('body').addClass('menu_open')
		$('.mob_menu').addClass('show')
		$('.overlay').fadeIn(300)
	})


	$('.mob_menu > .close, .overlay').click(function (e) {
		e.preventDefault()

		$('body').removeClass('menu_open')
		$('.mob_menu').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	$('.mob_menu .menu .item > a.sub_link').click(function (e) {
		const $dropdown = $(this).next()

		if ($dropdown.css('visibility') === 'hidden') {
			e.preventDefault()

			$('.mob_menu .menu .item > .sub_menu').removeClass('show')
			$dropdown.addClass('show')
		}
	})

	$('.mob_menu .menu .sub_menu a.sub_link').click(function (e) {
		e.preventDefault()

		const $dropdown = $(this).next()

		if ($dropdown.css('visibility') === 'hidden') {
			e.preventDefault()

			$('.mob_menu .menu .sub_menu .sub_menu').removeClass('show')
			$dropdown.addClass('show')
		}
	})


	// Моб. подвал
	if ($(window).width() < 1024) {
		$('footer .title.mob_spoler').click(function (e) {
			e.preventDefault()

			!$(this).hasClass('active')
				? $(this).addClass('active').next().slideDown(300)
				: $(this).removeClass('active').next().slideUp(200)
		})
	}
})