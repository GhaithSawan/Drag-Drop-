let input = document.getElementById("input")
let btn_add = document.getElementById("btn_add")
let boxs = document.querySelectorAll(".box")
let drag = null
btn_add.onclick = function(){
    if(input.value !=""){
        boxs[0].innerHTML +=`
        <p class="item" draggable="true" >${input.value}</p>
        
        `
        input.value = ""
    }
    dragfunction()
}
  function dragfunction(){
    let items = document.querySelectorAll(".item")
    {
        items.forEach(item=>{
            item.addEventListener("dragstart",function(){
                drag = item
                item.style.opacity = "0.5"

            })
            item.addEventListener("dragend",function(){
                drag = null
                item.style.opacity = "1"

            })
        })
        boxs.forEach(box=>{
            box.addEventListener("dragover",function(e){
                e.preventDefault()

                this.style.background = "#5788bb"
                this.style.color = "#fff"



            })
            box.addEventListener("dragleave",function(){
                this.style.background = "linear-gradient(187deg, rgba(192, 216, 241, 1) 77%, rgba(199, 224, 236, 1) 91%)"
                this.style.color = "black"


            })
            box.addEventListener("drop",function(){
                box.append(drag)
                this.style.background = "linear-gradient(187deg, rgba(192, 216, 241, 1) 77%, rgba(199, 224, 236, 1) 91%)"
                this.style.color = "black"
               


            })
        })

    }
  }
  