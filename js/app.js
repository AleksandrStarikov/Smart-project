$(function() {

    /* Fixed header */
    let header = $('#header'),
        introH = $('#intro').innerHeight()
        scrollOffset = $(window).scrollTop()

        checkScroll(scrollOffset)

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop()

        checkScroll(scrollOffset)
    })

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass('fixed')
        }  else {
                header.removeClass('fixed')
            }
    }
    
    /* Smooth scroll */

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault()

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top

            nav.removeClass('active') // Removes nav after clicking

            $('html, boby').animate({
                scrollTop: blockOffset
            }, 500)
    })

    // Memu nav toggle

    let nav = $('#nav'),
        navToggle = $('#nav-toggle')

    navToggle.on('click', function(event) {
        event.preventDefault()

        nav.toggleClass('active')
    })


    // Clients slider https://kenwheeler.github.io/slick/
    let slider = $('#clientsSlider')

    slider.slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      })

    // Tabs
    const tabsBtn = document.querySelectorAll('.btn-service')
    const tabsItem = document.querySelectorAll('.services__item')

    tabsBtn.forEach(onTabClick) 

    function onTabClick(item) {
        item.addEventListener('click', function() {
            let currentBtn = item
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            if ( ! currentBtn.classList.contains('active') ) {
              tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            })
    
            tabsItem.forEach(function(item) {
                item.classList.remove('active')
            })
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
            }
        })
    }

    document.querySelector('.btn-service').click()


})