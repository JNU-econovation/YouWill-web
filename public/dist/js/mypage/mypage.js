const tabList = document.querySelectorAll('.tab');
// const tabContent = document.querySelectorAll('.cont');
// const tabNum = this.parentElement.getAttribute('data-tabnum');

// for(let i=0;i<tabList.length;i++){
//     tabList.children[i].addEventListener('click',function(e){
//         e.preventDefault();
        
//         for(let j=0;j<tabList.length;j++){
//             tabContent[i].style.display='none';
//             tabList[j].className='tab';
//         }
//         tabContent[tabNum].style.display='block'

//         if(list.className.indexOf('active') == -1) {
//             list.className = 'tab active'
//         }
//     })
// }
Array.prototype.forEach.call(tabList, function(list) {
    
    list.children[0].addEventListener('click', function(e) {
        e.preventDefault()

        const tabContent = document.querySelectorAll('.cont');
        const tabNum = this.parentElement.getAttribute('data-tabnum');

        Array.prototype.forEach.call(tabContent, function(cont, i) {
            
            cont.style.display = 'none'
            tabList[i].className = 'tab'

        })

        tabContent[tabNum].style.display = 'block'

        if(list.className.indexOf('active') == -1) {
            list.className = 'tab active'
            
        }
    })
})


