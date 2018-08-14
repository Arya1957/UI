class Slider {
  constructor(options) {
    this.$el = options.el;
    this.$sliderCt = this.$el.find('.slider');
    this.$sliderItems = this.$sliderCt.find('li');
    this.$sliderWidth = this.$sliderItems.width();
    this.interval = options.interval || 3000;
    this.index = 0;
    this.length = this.$sliderItems.length;
    this.bullets = options.bullets || false;
    this.arrow = options.arrow || false;
    this.autoplay = options.autoplay || false;
    this.init();
    this.bindEvents();
    // this.start();
  }

  init() {
    /* 第一步： 拷贝图片，为无缝轮播做准备 */
    this.$sliderCt.prepend(this.$sliderItems.last().clone()); // 将最后一张图片拷贝到第一张图片前面
    this.$sliderCt.append(this.$sliderItems.first().clone()); //  将第一张图片拷贝到最后一张图片后面
    this.$sliderCt.width(this.$sliderWidth * (this.length + 2));
    this.$sliderCt.css('left', -this.$sliderWidth); // 初始偏移量
    this.isAnimate = false; // 添加状态锁
    /* 第二步，判断是否需要加 bullets */
    if (this.bullets) this.renderBullet();
    /* 第三步，判断是否需要加上一张、下一张按钮 */
    if (this.arrow) this.renderArrow();
    /* 判断是否需要自动播放 */
    if (this.autoplay) this.autoPlay()
  }

  bindEvents() {
    let $preBtn = $('.arrow.pre');
    let $nextBtn = $('.arrow.next');
    $preBtn.click(this.pre.bind(this));  // 播放上一帧
    $nextBtn.click(this.next.bind(this)); //播放下一帧
    let _this = this;
    this.$bullets.on('click', function () {
      _this.index = $(this).index();
      _this.$sliderCt.css('left', -(_this.index + 1) * _this.$sliderWidth);
      _this.setBullet(_this.index);
    });
    if (this.autoplay) {
      this.$sliderCt.on('mouseenter', () => {
        clearInterval(this.timerId);

        console.log('clearInterval')
      })
      this.$sliderCt.on('mouseleave', () => {
        this.autoPlay()
      })
    }
  }

  renderBullet() {
    let $bulletCt = $('<ol class="bullets"></ol>')
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str += '<li class="bullet-item"></li>';
    }
    $bulletCt.html(str)
    this.$el.append($bulletCt);
    this.$bullets = $('.bullets>li');
    this.$bullets.eq(0).addClass('active');
  }

  renderArrow() {
    this.$el.append('<a href="#" class="arrow pre"><</a><a href="#" class="arrow next">></a>')
  }

  pre() {
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.$sliderCt.animate({ left: '+=' + this.$sliderWidth }, () => {
      this.index--;
      if (this.index < 0) {
        this.index = this.length - 1;
        this.$sliderCt.css('left', -this.length * this.$sliderWidth);
      }
      this.setBullet(this.index);
      this.isAnimate = false;  // 解锁
    })
  }
  next() {
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.$sliderCt.animate({ left: '-=' + this.$sliderWidth }, () => {
      this.index++;
      if (this.index === this.length) {
        
        this.index = 0;
        this.$sliderCt.css('left', -this.$sliderWidth);
      }
      this.setBullet(this.index);
      this.isAnimate = false;  // 解锁
    })
  }

  setBullet(idx) {
    this.$bullets.removeClass('active')
      .eq(idx).addClass('active');
  }

  autoPlay() {
    console.log('autoPlay')
    this.timerId = setInterval(() => {
      this.next();
      console.log(new Date())
    }, 3000)
  }
}
