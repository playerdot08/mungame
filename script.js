// 게임 로직
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 캔버스 크기 설정
canvas.width = 720;
canvas.height = 1280;

// "시작하기" 버튼을 클릭했을 때 실행되는 함수
document.getElementById('start-button').addEventListener('click', function() {
    // 게임 시작 화면을 숨기고 게임 화면을 보이게 하기
    //document.getElementById('start-screen').style.display = 'none';  // 시작 화면 숨기기
    //document.getElementById('game-screen').style.display = 'block';  // 게임 화면 보이기

    // 버튼 숨기기
    document.getElementById('start-button').style.display = 'none';  // 버튼 숨기기

    // 게임 시작 로직을 여기서 추가할 수 있음
    startGame();
});

// 게임 시작 함수
function startGame() {
    console.log("게임이 시작되었습니다!");
    // 게임 로직을 여기에 추가해
}