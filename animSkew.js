var a = document.getElementsByClassName('move')[0]
    var b = document.getElementsByClassName('move')[1]
    var c = document.getElementsByClassName('move')[2]

    let currentPos = window.pageYOffset;
    const update = () => {
        const newPos = window.pageYOffset;
        const diff = newPos - currentPos;
        const speed = diff * 0.05 * -0.6;

        a.style.transform = `skewY(${speed}deg)`;
        b.style.transform = `skewY(${speed}deg)`;
        c.style.transform = `skewY(${speed}deg)`;

        currentPos = newPos;

        requestAnimationFrame(update);
    }

    update();
    $(".verticalTableHeader").each(function(){$(this).height($(this).width())})