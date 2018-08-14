class Tab {
  constructor(ct) {
    this.ct = ct;
    this.init();
    this.bind();
  }
  init  () {
    this.tabList = this.ct.querySelectorAll('.tab-header>li');
    this.tabPanels = this.ct.querySelectorAll('.tab-content>li');
  }
  bind  () {
    this.tabList.forEach((tab) => {
      tab.onclick = (e) => {
        let target = e.target;
        let index = [].indexOf.call(this.tabList, target);
        this.tabList.forEach((li) => li.classList.remove('active'));
        target.classList.add('active');
        this.tabPanels.forEach((panel) => panel.classList.remove('active'));
        this.tabPanels[index].classList.add('active')
      }
    })
  }
}



