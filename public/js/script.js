function getRandomBallSize(idBall) {
    const ball = document.getElementById(`ball-${idBall}`);
    const ballParent = ball.parentNode;
    const newBallSize = (Math.floor(Math.random() * 5) + 5) * 5;
    // ball.style.width = newBallSize.toString();
    // ball.style.height = newBallSize.toString();
    ball.setAttribute("style", `width: ${newBallSize}rem; height: ${newBallSize}rem;`);
    ball.addEventListener("mouseup", () => {
        console.log("SOBRE");
    })
    // ball.setAttribute("style", ``);
    ballParent.style.justifyContent = `${["left", "center", "right"][Math.floor(Math.random() * 3)]}`
}
