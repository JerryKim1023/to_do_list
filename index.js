$(document).ready(function () {
    renderCurrentTime()
    renderQuote()
});
//현재 시간
function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5)
    $('#time').text(datetime)
})
}
// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`
            let author = `- ${data['author']} -`
            $('#content').text(content)
            $('#author').text(author)
        })
}

// 현재 날짜 표시
var Target = document.getElementById("date");
        function _date() {
            var datetime = new Date();

            var month = datetime.getMonth();
            var date = datetime.getDate();
            var day = datetime.getDay();
            var week = ['일', '월', '화', '수', '목', '금', '토'];

            Target.innerText = 
            `${month + 1}월 ${date}일 ${week[day]}요일\n`;
                
        }
        _date();
        setInterval(_date, 1000); // 1초마다 실행

// 현재 시간 표시
var Target_clock = document.getElementById("clock");
        function clock() {
            var time = new Date();

            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();

            Target_clock.innerText = 
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                
        }
        clock();
        setInterval(clock, 1000); // 1초마다 실행

var Target_quote = document.getElementById("quote");

// 글자색 실시간 변경
var array=["bisque","antiquewhite","aquamarine","cornsilk","aqua","chartreuse","coral"];
var clock_array=["antiquewhite","aqua","bisque","chartreuse","coral","aquamarine","cornsilk"];
var quote_array=["black","white"]

var cnt=0;
var clock_cnt=0;
var quote_cnt=0;

function change_font_color(){
    if(cnt==7) cnt=0;
        Target.style.color=array[cnt++];
    if(clock_cnt==7) clock_cnt=0;
        Target_clock.style.color=clock_array[clock_cnt++];
    if(quote_cnt==2) quote_cnt=0;
        Target_quote.style.color=quote_array[quote_cnt++];
}

change_font_color();
setInterval(change_font_color, 500); // 1초마다 실행

var Target_greeting = document.getElementById("greeting");

// 내 이름 호출 천천히 글자 증감
var greeting_array = [ "오", "늘", "도", " 화", "이", "팅", "!", "!","!"," 하","면"," 된","다","!"," -"," 지"," 용", " -" ];
var cnt1 = 0;
var cnt2 = greeting_array.length;
window.onload = function() {
increase();    //먼저 증가하는 메서드를 호출한다.
}
function increase() {
    if(cnt1<greeting_array.length){        //cnt1이 배열의 길이가 되기직전까지 문자를 하나씩 추가하여 innerHTML에 넣는다.
        Target_greeting.innerHTML += greeting_array[cnt1];
        cnt1++;
        timer = setTimeout("increase()", 200);    //0.2초후에 증가 메서드를 호출한다.
 }
    else{        //만약 배열의 길이와 cnt1이 같아진다면 글자수가 감소해야되므로 감소하는 메서드를 호출한다.
        cnt1=0;        //무한반복을 위해 cnt1은 다시 초기화 시켜준다.
        decrease();
}
}
function decrease() {    //감소하는 로직을 갖고있는 메서드
    if(cnt2>0){     //cnt2는 배열의 길이를 담고 있으므로 0직전까지 감소시키기 위해 조건을 준다.
        Target_greeting.innerHTML=Target_greeting.innerHTML.substring(0,cnt2-1);
        cnt2--;
        timer = setTimeout("decrease()", 200); //0.2초 후에 감소 메서드를 호출한다.
}
    else{    //cnt가 0이 된다면 다시 증가해야하므로 증가메서드를 호출한다.
        cnt2=greeting_array.length;    //무한반복을 위해 cnt2도 배열의 길이로 초기화시켜준다.
        Target_greeting.innerHTML=" "
        increase();
}
}

// 랜덤 사진 꾸미기
// function renderRandomImage() {
//   let imageList = [];
//   // 이미지 개수를 변경하려면 i=5의 값을 이미지 개수만큼 바꿔주세요!
//   for (i = 0; i < 5; i++) {
//     imageList.push(i);
//   }
//   let imageListLength = imageList.length;
//   let randomImage = Math.floor(Math.random() * (imageListLength))+1
//   randomImage = `images/${randomImage}.jpg`
//   $(document.body).css("background-image", `url(${randomImage})`);
// }
// renderRandomImage();