const cmbYear=document.getElementById('cmbYear');
const cmbMonth=document.getElementById('cmbMonth');
const cmbDay=document.getElementById('cmbDay');

const now=new Date();
const nowYear=now.getFullYear();
const nowMonth=now.getMonth();
const nowDay=now.getDate();

//select box에 년도 option 할당
for(let i=nowYear;i<=2030;i++){
    cmbYear.options[i-nowYear]= new Option(i+"년",i);//new Option(text,value,defaultselected,selected)  
}
//select box에 월 option 할당
for(let i=0;i<12;i++){
    cmbMonth.options[i]=new Option(i+1+"월",i);
}
//slect box에 일 option의 기본값을 "1일"로 지정
// cmbDay.options[0]=new Option("1일");



function m_change(){
    cmbDay.options.length = 0;

    const year = cmbYear.options[cmbYear.selectedIndex].value;//parseInt(string, radix): 문자열을 반환값으로 변환
    const month = cmbMonth.options[cmbMonth.selectedIndex].value;
    
    let lastDay=30;
    if(month==0||month==2||month==4||month==6||month==7||month==9||month==11){
        lastDay=31;
    }
    for(let i=0;i<=lastDay-1;i++){
        cmbDay.options[i]=new Option(i+1+'일',i+1);
    }

    
}



