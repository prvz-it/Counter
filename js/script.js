
let counter = document.querySelectorAll(".counter") ;
let countArr = Array.from(counter)

countArr.map((item)=>{
    let count = 0 ;
    function counterUp() {
        count++
        if (count <= item.dataset.namber) {
            item.innerHTML = count ;
        }
    }

    setInterval(() => {
        counterUp()
    }, item.dataset.speed / item.dataset.namber);
})