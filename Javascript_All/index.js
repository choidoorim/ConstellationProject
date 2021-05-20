//onsubmit에 대해서 return true는 확인의 의미이다. return false일 경우 반대.
//현재 이 코드에서는 alert를 예외처리를 위한 것으로 사용중으로 정상적으로 작동하기 위해서는 return false처리해야 한다.
function printValue(){
  var Year = parseInt(document.getElementById('year').value);
  //var Month = parseInt(document.getElementById('mt').value);
  //var Day = parseInt(document.getElementById('day').value);
  var Month = document.getElementById('mt').value;
  var Day = document.getElementById('day').value;
  var count = 0;
  var strError = "";
  if(Year < 0 || Month < 0 || Day < 0){
    count += 1;
    strError = strError + '양수만 입력해주세요. \n'
  }
  if(Month < 1  || Month > 12){
    count += 1;
    strError = strError + 'Month는 1~12월을 입력해주세요. \n'
  }
  if(Day < 1  || Day > 31){
    count += 1;
    strError = strError + 'Day는 1~31일을 입력해주세요.'
  }
  
  if(count > 0){
    alert(strError);
    return true;
  }else {
    if(Month.length == 1){
      Month = '0' + Month;
    }
    if(Day.length == 1){
      Day = '0' + Day;
    }
    
    window.location =  "main.html?" +Year+ "/" +Month+ "/" +Day;
    return false;
  }
}
