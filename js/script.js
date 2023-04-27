function getRandomBallSize(idBall) {
    let ball = document.getElementById(`ball-${idBall}`);
    ball.setAttribute("style", `width: ${(Math.floor(Math.random() * 5) + 5) * 5}rem`);
}
