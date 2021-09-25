// SLIDER CAROUSEL

class SliderCarousel {
    constructor({
        slider,
        wrapper,
        items,
        leftBtn,
        rightBtn,
        itemsToShow,
        position = 0,
        infinity = true,

    }) { // properties fot the Class
        this.style = document.querySelector('#sliderCarusel-style')
        this.slider = document.querySelector('.slider')
        this.wrapper = document.querySelector('.slider-wrapper')
        this.items = document.querySelector('.slider-items')
        this.item = document.querySelectorAll('.slider-item')
        this.itemsToShow = itemsToShow

        this.options = { // here will be an object with different properties
            position, // first elem of the photo will be zero
            itemWidth: Math.floor(100 / this.itemsToShow),
            infinity: infinity,
        }
    }

    // RUN()
    init() { // run the slider
        this.addGloClass()
        this.addStyle()
        this.response()

        // checking, if the user has added arrows or not, if he didn't add, so, we add own arrows and run the code
        if (this.leftBtn && this.rightBtn) {
            this.controlSlider()
        } else {
            this.addArrow()
            this.controlSlider()
        }
    }

    // METHODS()

    // ADD CLASSES
    addGloClass() {
        this.slider.classList.add('glo-slider')
        this.wrapper.classList.add('glo-slider-wrapper')
        this.items.classList.add('glo-items')
        for (let i = 0; i < this.item.length; i++) {
            this.item[i].classList.add('glo-slider-item')
        }
    }

    // ADD STYLES
    addStyle() {
        this.style = document.createElement('style')
        this.style.id = 'sliderCarusel-style'
        document.head.appendChild(this.style) // adds a <style> tag to the end of the <head>
        this.style.textContent = ` 

        .glo-slider-wrapper {
            overflow: hidden;  
        }

        .glo-items {
            display: flex;
            flex-direction: row;
            transition: transform .5s;
            will-change: transform;
            column-gap: 5px;
            padding: 0;
            margin: 0;
        }

        .glo-slider-item {
            width: 25px;
            flex: 0 0 ${this.options.itemWidth}%; 
            padding: 0;
            margin: 0;
        }

        `
    }

    // ADD BTN CONTROLS
    controlSlider() {
        this.leftBtn.addEventListener('click', this.slideToLeft.bind(this))
        this.rightBtn.addEventListener('click', this.slideToRight.bind(this))
            // bind() - connects method and class, or we can use arrow function: slideToLeft = () => {--this...}
    }

    slideToLeft() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position

            // infinity
            if (this.options.position < 0) {
                this.options.position = this.item.length - this.itemsToShow
            }

            // slider moving
            this.items.style.transform = `translateX(-${this.options.position * this.options.itemWidth}%)`
                // this.slider.style.marginLeft = '-5px'
        }
    }

    slideToRight() {
        if (this.options.infinity || this.options.position < this.item.length - this.itemsToShow) {
            ++this.options.position

            // infinity
            if (this.options.position > this.item.length - this.itemsToShow) {
                this.options.position = 0
            }

            // slider moving
            this.items.style.transform = `translateX(-${this.options.position * this.options.itemWidth}%)`
                // this.slider.style.marginLeft = '-5px'
                // moves every time by 50% left side relatively the first slide, starts from "-" because moves to the left side
        }
    }

    addArrow() {
        this.leftBtn = document.createElement('button')
        this.rightBtn = document.createElement('button')

        this.leftBtn.className = 'glo-items-left'
        this.rightBtn.className = 'glo-items-right'

        this.wrapper.appendChild(this.leftBtn)
        this.wrapper.appendChild(this.rightBtn)

        // styles
        this.leftBtn.textContent = '<'
        this.rightBtn.textContent = '>'

        this.style.textContent += `

        .glo-items-left, .glo-items-right {
            margin-top: 10px;
            margin-left: 5px;
            width: 35px;
            height: 35px;
            border: none;
        }
        `
    }

    // RESPONSE (adaptive)
    response() {

        const getDemensions = () => {
            const windowWidth = document.documentElement.clientWidth
            if (windowWidth >= 1024) {
                this.itemsToShow = 3
                console.log(windowWidth);
            } else if (windowWidth < 1024 && windowWidth >= 768) {
                this.itemsToShow = 2
                console.log(windowWidth);

            } else if (windowWidth <= 767) {
                this.itemsToShow = 1
                console.log(windowWidth);
            }

            this.options.itemWidth = Math.floor(100 / this.itemsToShow)
            this.style.textContent += `
            .glo-slider-item {
            flex: 0 0 ${this.options.itemWidth}%; 
            }`
        }
        getDemensions()
        window.addEventListener('resize', getDemensions)
    }
}

/*
    NOTES: 
    overflow: hidden - so we can see the last slider

    ${} - variable entry

    const itemsToShowDefault = this.itemsToShow
    using map() method iterates all the values and saves breakpoints (1024, 768, 576)
    const allBreakpoints = this.responsive.map(items => items.breakpoint)
    console.log(allBreakpoints) // 1024, 768, 576
    const maxBreakpoint = Math.max(...allBreakpoints)
    ... - operator spread - merges all the elements together
    console.log(maxBreakpoint) // 1024

    const checkBreakpoints = () => {
    const windowWidth = document.documentElement.clientWidth
    documentElement.clientWidth - this is property for the user screen wide receiving 
*/
