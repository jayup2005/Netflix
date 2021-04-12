const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')


//select tabcontent items

function selectItem(){

    removeBorder()
    removeShow()
    this.classList.add('tabs-border')
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeBorder(){

tabItems.forEach(item =>item.classList.remove('tabs-border'))
}


function removeShow(){

    tabContentItems.forEach(item =>item.classList.remove('show'))

}


tabItems.forEach(item => item.addEventListener('click' , selectItem ))
