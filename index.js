let input = document.getElementById("inp")
const convBtn = document.getElementById("conv-btn")
convBtn.addEventListener("click",function () {
    let inpVal = input.value
    console.log(inpVal)
    let t = document.getElementsByClassName("inp-val")
    for (var i=0; i<t.length; i++) {
        t[i].textContent = inpVal
    }
    document.getElementById("m-to-f").textContent = (inpVal * 3.28084).toFixed(3)
    document.getElementById("f-to-m").textContent = (inpVal * 0.3048).toFixed(3)
    document.getElementById("l-to-g").textContent = (inpVal * 0.2199692).toFixed(3)
    document.getElementById("g-to-l").textContent = (inpVal * 4.54609).toFixed(3)
    document.getElementById("k-to-p").textContent = (inpVal * 2.204623).toFixed(3)
    document.getElementById("p-to-k").textContent = (inpVal * 0.4535924).toFixed(3)
})