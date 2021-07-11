(()=>{
    const sceneInfo={
        type:'sticky',
        heightNum:5,
        scrollHeight:0,
        objs:{
            container:document.querySelector
        }
    }

    //각 스크롤 섹션의 높이 세팅
    function setLayout(){
        sceneInfo.scrollHeight=sceneInfo.heightNum*window.innerHeight;
    }
    setLayout();
    




})()