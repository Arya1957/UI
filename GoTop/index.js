/*
创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。拥有以下属性和方法

1. `ct`属性，GoTop 对应的 DOM 元素的容器
2.  `target`属性， GoTop 对应的 DOM 元素
3.  `bindEvent` 方法， 用于绑定事件
4 `createNode` 方法， 用于在容器内创建节点
 */

function GoTop(el,target){
    this.$el = el;
    this.target = target || this.createNode();
    this.bindEvent();
}

GoTop.prototype.bindEvent = function(){


};

GoTop.prototype.createNode = function(){
    let btn = document.createElement('button');
    btn.innerText = '回到顶部';
    this.$el.appendChild(btn);
    return btn
};