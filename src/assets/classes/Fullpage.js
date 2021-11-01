class Fullpage {

    constructor(){
        if(this.main) {
            this.buildSections();
            this.buildDots();
            this.addEvents();
        }
    }

    main = document.getElementById('app');
    sections = this.main ? this.main.getElementsByTagName('section') : null;
    isScrolling;

    defaults = {
        container : this.main,
        sections : this.sections ? this.sections : null,
        animateTime : 0.7,
        animateFunction : 'ease',
        maxPosition: this.sections ? this.sections.length - 1 : 0,
        currentPosition: 0,
        previousPosition: null,
        displayDots: true,
        dotsPosition: 'right'
    };

    updateClass = (type, newClass, currentClass) => {
        if (type === 1) {
            return currentClass += ' ' + newClass;
        } else if (type === 2) {
            return currentClass.replace(newClass, '');
        }
    }

    buildSections = () => {
        const sections = this.defaults.sections;
        for (let i = 0; i < sections.length; i++) {
            sections[i].setAttribute('data-index', i);
            sections[i].setAttribute('id', `section_${i}`);
        }
        let firstElement = document.getElementById('section_0');
        firstElement.classList.remove('hide');
        firstElement.classList.add('active');
        return this;
    }

    changeCurrentPosition = (position) => {
        if (position !== "") {
            this.defaults.currentPosition = position;
            window.location.hash = this.defaults.currentPosition;

        }
    }

    buildDots = () => {
        const dots = document.getElementById('dotList');
        if(dots){
            dots.remove();
        }
        this.ul = document.createElement('ul');
        this.ul.setAttribute('id', 'dotList');

        this.ul.className = this.updateClass(1, 'dots', this.ul.className);
        this.ul.className = this.updateClass(1, this.defaults.dotsPosition === 'right' ? 'dots-right' : 'dots-left', this.ul.className);

        const sections = this.defaults.sections;

        for (let i = 0; i < sections.length; i++) {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.setAttribute('id', `dot${i}`)
            a.setAttribute('href', `#${i}`);
            li.appendChild(a);
            this.ul.appendChild(li);
        }

        this.ul.childNodes[0].firstChild.className = this.updateClass(1, 'active', this.ul.childNodes[0].firstChild.className);


        if (this.defaults.displayDots) {
            document.body.appendChild(this.ul);
        }

        return this;
    }

    animateScroll = () => {
        const max = this.defaults.sections.length;
        if(this.defaults.currentPosition <= max - 1) {

        }else {
            alert('stop');
        }
        let animateTime = this.defaults.animateTime;
        let animateFunction = this.defaults.animateFunction;
        let position = this.defaults.currentPosition * 100;
        let previousDot = document.getElementById(`dot${this.defaults.previousPosition}`);
        let currentDot = document.getElementById(`dot${this.defaults.currentPosition}`);
        let previousSlider = document.getElementById(`section_${this.defaults.previousPosition}`);
        let currentSlider = document.getElementById(`section_${this.defaults.currentPosition}`);

        this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
        this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
        this.defaults.container.style.transform = 'translateY(-' + position + '%)';
        this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateFunction;
        this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateFunction;
        this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateFunction;
        if(previousDot){
            previousDot.classList.remove('active');
        }
        if(previousSlider){
            previousSlider.classList.remove('active');
            previousSlider.classList.add('hide');
            window.clearTimeout(this.isScrolling);
        }
        if(currentDot){
            currentDot.classList.add('active');
        }
        if(currentSlider){
            this.isScrolling = setTimeout(() => {
                currentSlider.classList.remove('hide');
                currentSlider.classList.add('active');
            }, 500)

        }
    }

    addEvents = () => {

        if (document.addEventListener) {
            document.addEventListener('mousewheel', this.mouseWheelAndKey, false);
            document.addEventListener('wheel', this.mouseWheelAndKey, false);
            document.addEventListener('keyup', this.mouseWheelAndKey, false);
            document.addEventListener('touchstart', this.touchStart, false);
            document.addEventListener('touchend', this.touchEnd, false);
            window.addEventListener("hashchange", this.hashChange, false);

            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                if(!('ontouchstart' in window)){
                    document.body.style = "overflow: scroll;";
                    document.documentElement.style = "overflow: scroll;";
                }
            }

        } else {
            document.attachEvent('onmousewheel', this.mouseWheelAndKey, false);
            document.attachEvent('onkeyup', this.mouseWheelAndKey, false);
        }

        return this;
    }

    removeEvents = () => {
        if (document.addEventListener) {
            document.removeEventListener('mousewheel', this.mouseWheelAndKey, false);
            document.removeEventListener('wheel', this.mouseWheelAndKey, false);
            document.removeEventListener('keyup', this.mouseWheelAndKey, false);
            document.removeEventListener('touchstart', this.touchStart, false);
            document.removeEventListener('touchend', this.touchEnd, false);

        } else {
            document.detachEvent('onmousewheel', this.mouseWheelAndKey, false);
            document.detachEvent('onkeyup', this.mouseWheelAndKey, false);
        }

        setTimeout(() => {
            this.addEvents();
        }, 600);
    }

    mouseWheelAndKey = (event) => {
        if (event.deltaY > 0 || event.key === 'ArrowDown') {
            this.defaults.previousPosition = this.defaults.currentPosition;
            this.defaults.currentPosition ++;
            this.changeCurrentPosition(this.defaults.currentPosition);

        } else if (event.deltaY < 0 || event.key === 'ArrowUp') {
            this.defaults.previousPosition = this.defaults.currentPosition;
            this.defaults.currentPosition --;
            this.changeCurrentPosition(this.defaults.currentPosition);
        }
        this.removeEvents();
    }

    touchStart = (event) => {
        this.mTouchStart = parseInt(event.changedTouches[0].clientY);
        this.mTouchEnd = 0;
    }

    touchEnd = (event) => {
        this.mTouchEnd = parseInt(event.changedTouches[0].clientY);
        if (this.mTouchEnd - this.mTouchStart > 100 || this.mTouchStart - this.mTouchEnd > 100) {
            if (this.mTouchEnd > this.mTouchStart) {
                this.defaults.currentPosition --;
            } else {
                this.defaults.currentPosition ++;
            }
            this.changeCurrentPosition(this.defaults.currentPosition);
        }
    }

    hashChange = () => {
        if (window.location) {
            let anchor = window.location.hash.replace('#', '').split('/')[0];
            if (anchor !== "") {
                if (anchor < 0) {
                    this.changeCurrentPosition(this.defaults.maxPosition);
                } else if (anchor > this.defaults.maxPosition) {
                    this.changeCurrentPosition(0);
                } else {
                    this.defaults.currentPosition = anchor;
                    this.animateScroll();
                }
            }
        }
    }

}

export default Fullpage;