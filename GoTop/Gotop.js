
function GoTop(el, target) {
    this.$el = el;
    this.target = target || this.createNode();
    this.bindEvent();
}

GoTop.prototype.bindEvent = function () {
    this.target.addEventListener('click', () => {
        window.scrollTo(0, 0)
    });

    window.onscroll = () => {
        (window.pageYOffset >= 100) ? this.target.style.display = 'block' : this.target.style.display = 'none';
        // 等价于下面的代码
        // if(window.pageYOffset >= 500){
        //     this.target.style.display = 'block';
        // } else{
        //     this.target.style.display = 'none';
        // }
    };
};

GoTop.prototype.createNode = function () {
    let btn = document.createElement('button');
    btn.innerText = '回到顶部';
    this.$el.appendChild(btn);
    btn.style.display = 'none'; // 默认不显示

    return btn

};


/*  ES6 写法
class GoTop {
    constructor(el, target) {
        this.$el = el;
        this.target = target || this.createNode();
        this.bindEvent()
    }

    createNode() {
        let btn = document.createElement('button');
        btn.innerText = '回到顶部';
        this.$el.appendChild(btn);
        btn.style.display = 'none'; // 默认不显示

        return btn
    }

    bindEvent() {
        this.target.addEventListener('click', () => {
            window.scrollTo(0, 0)
        });

        window.onscroll = () => {
            (window.pageYOffset >= 500) ? this.target.style.display = 'block' : this.target.style.display = 'none';
            // 等价于下面的代码
            // if(window.pageYOffset >= 500){
            //     this.target.style.display = 'block';
            // } else{
            //     this.target.style.display = 'none';
            // }
        };
    }
}
*/

