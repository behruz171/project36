let row = $(".text")
let inp1 = $(".inp1")
let inp2 = $(".inp2")
let inp3 = $(".inp3")
let inp4 = $(".inp4")
let inp5 = $(".inp5")
let son = 0
function chiz() {
    son = 0
    row.html("")
    mass.map((item, index) => {
        son++
        let col = `
        <tr class="${item.status1}">
      <td class="bg-dark text-light">${son}</td>
      <td>${item.id}</td>
      <td>${item.user}</td>
      <td>${item.tel}</td>
      <td>${item.jsh}</td>
      <td>${item.qurilma}</td>
      <td><button class="btn btn-info" onclick="bos(${index})">:</button>
      <div class="w ${item.status ? "d-block" : "d-none"}">

        <button class="form-control btn btn-default text-danger" onclick="blok(${index})">Bloklash</button>
        <button class="form-control  btn btn-default text-success" onclick="chiqar(${index})">Blokdan chiqarish</button>
        <button class="form-control  btn btn-default text-danger" onclick="tugat(${index})">Sessiyani tugatish</button>

     </div>
      </td>
      
    </tr>
        `
        row.append(col)
    })
}

chiz()

function bos(nimadir) {
    mass[nimadir].status = !mass[nimadir].status
    chiz()
}

function blok(son1) {
    mass[son1].status1 = "bg-danger"
    mass[son1].status = !mass[son1].status
    chiz()
}

function chiqar(son2) {
    mass[son2].status1 = "bg-light"
    mass[son2].status = !mass[son2].status
    chiz()
}

function tugat(son3) {
    mass.splice(son3, 1)
    mass[son3].status = !mass[son3].status
    chiz()
}

function qidir(soz) {
    let natija = mass.filter(item => {
        return item.user.toLowerCase().includes(soz.toLowerCase())
    })
    son = 0
    natija.map((item, index) => {
        row.html("")
        son++
        let col = `
        <tr class="${item.status1}">
      <td class="bg-dark text-light">${son}</td>
      <td>${item.id}</td>
      <td>${item.user}</td>
      <td>${item.tel}</td>
      <td>${item.jsh}</td>
      <td>${item.qurilma}</td>
      <td><button class="btn btn-info" onclick="bos(${index})">:</button>
      <div class="w ${item.status ? "d-block" : "d-none"}">

        <button class="form-control btn btn-default text-danger" onclick="blok(${index})">Bloklash</button>
        <button class="form-control  btn btn-default text-success" onclick="chiqar(${index})">Blokdan chiqarish</button>
        <button class="form-control  btn btn-default text-danger" onclick="tugat(${index})">Sessiyani tugatish</button>

     </div>
      </td>
      
    </tr>
        `
        row.append(col)
    })

}

function bos1(){
    let col={
        id:inp1.val(),
        user:inp2.val(),
        tel:inp3.val(),
        jsh: inp4.val(),
        qurilma:inp5.val(),
        status:false,
        status1:"bg-light"
    }
    mass.push(col)
    chiz(mass)
    
}
