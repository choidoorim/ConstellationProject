//https://m.blog.naver.com/PostView.nhn?blogId=wonderwallsoft&logNo=220643481780&proxyReferer=https:%2F%2Fwww.google.com%2F
var temp = location.href.split("?");
data = temp[1].split("/"); //temp[0]은 ? 기준으로 하위 주소, temp[1]은 상위 주소
Year = parseInt(data[0]);
MDay = parseInt(data[1]+data[2]);

var _h1 = `<p>${data[0]}</p>`;

var getYear = function(_Year){ //띠를 알기 위한  func
  if(_Year%12 == 0 ){
    yearFileName = "쥐 띠"
  }
  else if (_Year%12 == 1) {
    yearFileimg = "img/Year/cow.png"
    yearFileName = "소 띠"
  }
  else if (_Year%12 == 2) {
    yearFileimg = "img/Year/tiger.png"
    yearFileName = "호랑이 띠"
  }
  else if (_Year%12 == 3) {
    yearFileimg = "img/Year/rabbit.png"
    yearFileName = "토끼 띠"
  }
  else if (_Year%12 == 4) {
    yearFileimg = "img/Year/dragon.png"
    yearFileName = "용 띠"
  }
  else if (_Year%12 == 5) {
    yearFileimg = "img/Year/snake.png"
    yearFileName = "뱀 띠"
  }
  else if (_Year%12 == 6) {
    yearFileimg = "img/Year/horse.png"
    yearFileName = "말 띠"
  }
  else if (_Year%12 == 7) {
    yearFileimg = "img/Year/sheep.png"
    yearFileName = "양 띠"
  }
  else if (_Year%12 == 8) {
    yearFileimg = "img/Year/monkey.png"
    yearFileName = "원숭이 띠"
  }
  else if (_Year%12 == 9) {
    yearFileimg = "img/Year/chicken.png"
    yearFileName = "닭 띠"
  }
  else if (_Year%12 == 10) {
    yearFileimg = "img/Year/dog.png"
    yearFileName = "개 띠"
  }
  else if (_Year%12 == 11) {
    yearFileimg = "img/Year/pig.png"
    yearFileName = "돼지 띠"
  }

  return 
}

var getCon = function(){ //별자리를 알기 위한 func

}

var rsYear = getYear(Year);
var rsCon = getCon();

var YearComb = function (){ //띠와 별자리를 통해 궁합을 HTML에 출력하기 위한 func
  
}



var showHtml = `
<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <div id="box_main">
      ${_preData}
      </div>
    </body>
  </html>
`;

document.write(showHtml);
