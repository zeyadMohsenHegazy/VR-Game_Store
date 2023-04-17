

var iprice = document.getElementsByClassName("Iprice");
var iquntity = document.getElementsByClassName("quantity");
var itotal = document.getElementsByClassName("total");
var Sub_total = document.getElementById("get_total");
var Shipping = document.getElementById("get_shiping");
var Discount = document.getElementById("get_discount");
var AllTotal = document.getElementById("AllTotal");
var Coupon_code = document.getElementById("Coupon_txt");
var Msg = document.getElementById("msg");
var totalsub = 0;
var shipping = 20;
var discount = 0;
let t_body = document.querySelector('tbody');
// let Games_array = [{ Name: "FIFA 2023", Price: 50, Img: "logo.png" }, { Name: "PES 2023", Price: 40, Img: "logo.png" }];
let local;

getdata();
subTotal();

function delete_Game(index) {
    local = JSON.parse(localStorage.getItem("G_local"));
    // remove 1 element from array
    local.splice(index, 1);
    // set new array in local storage
    localStorage.setItem('G_local', JSON.stringify(local));
    getdata();
    subTotal();
    
}

function attachDeleteGameListeners() {
    const deleteButtons = document.querySelectorAll('.delete-game');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            delete_Game(event.currentTarget.getAttribute('data-index'));
        });
    });
}
function getdata() {
    // local storage are retreiving 
    let Data = "";
    // Restore all data from local storage
    local = JSON.parse(localStorage.getItem("G_local"));
    for (let i = 0; i < local.length; i++) {
        Data += ` <tr> <td><a href="#" class="delete-game" data-index="${i}" ><i class="fas fa-trash-alt" style="color: white;"></i></a></td>    <td><img src="GameSrc/${local[i].Img}" alt="game_image"></td>
    <td> ${local[i].Name} </td>
    <td> ${local[i].Price} <input type="hidden" value='${local[i].Price}'  class="Iprice">  </td>
    <td> <input class="w-25 pl-1  quantity"  type="number" min="1" max="10" value="1" id="quantity"
            style="background:#FE53BB ; border: none; color: white; "> </td>
    <td class="total"> ${local[i].Price} $  </td> </tr>`
    }
    t_body.innerHTML = Data;
    attachDeleteGameListeners();
}


function subTotal() {
    totalsub = 0;
    for (let i = 0; i < iprice.length; i++) {
        itotal[i].innerHTML = (iprice[i].value) * (iquntity[i].value) + "$";
        totalsub += (iprice[i].value) * (iquntity[i].value);
    }
    var s = discount / 100;
    var t = totalsub + shipping;
    var x = t - (t * s);
    Sub_total.innerText = totalsub + " " + "$";
    AllTotal.innerText = x + " " + "$";
}


function opencode() {
    var code = Coupon_code.value;
    if (code == "KF1") {
        discount = 10;
        Msg.innerText = " Congratulations , You Got 10% OFF ! "
        Msg.style.color = "green";
        Discount.innerText = discount + " " + "%";
    }
    else if (code == "KF2") {
        discount = 15;
        Msg.innerText = " Congratulations , You Got 15% OFF ! "
        Msg.style.color = "green";
        Discount.innerText = discount + " " + "%";
    }
    else if (code == "KF3") {
        discount = 20;
        Msg.innerText = " Congratulations , You Got 20% OFF ! "
        Msg.style.color = "green";
        Discount.innerText = discount + " " + "%";
    }
    else {
        discount = 0;
        Msg.innerText = " Sorry , Code IS expired ! "
        Msg.style.color = "red";
        Discount.innerText = discount + " " + "%";
    }
    subTotal();

}

function GetPrint() {
    var x = document.getElementById("sign");
    x.style.visibility = "visible";
    local = JSON.parse(localStorage.getItem("G_local"));
    // remove 1 element from array
    local.splice(0, 50);
    // set new array in local storage
    localStorage.setItem('G_local', JSON.stringify(local));
    window.print();
        x.style.display = "none";
    getdata();
    Msg.innerText = "";
    Coupon_code.value = "";
    Sub_total.innerText = " 0 " + "$";
    AllTotal.innerText = " 0 " + "$";
    discount = 0;

}

document.querySelector('#apply_code_button').addEventListener('click', opencode);
document.querySelector('#print_button').addEventListener('click', GetPrint);
document.querySelector('#quantity').addEventListener('change', subTotal);

// var iprice = document.getElementsByClassName("Iprice");
// var iquntity = document.getElementsByClassName("quantity");
// var itotal = document.getElementsByClassName("total");
// var Sub_total = document.getElementById("get_total");
// var Shipping = document.getElementById("get_shiping");
// var Discount = document.getElementById("get_discount");
// var AllTotal = document.getElementById("AllTotal");
// var Coupon_code = document.getElementById("Coupon_txt");
// var Msg = document.getElementById("msg");
// var totalsub = 0;
// var shipping = 200;
// var discount = 0;
// let t_body = document.querySelector('tbody');
// // let Games_array = [{ Name: "FIFA 2023", Price: 50, Img: "logo.png" }, { Name: "PES 2023", Price: 40, Img: "logo.png" }];

// console.log(Games_array);

// getdata();
// subTotal();
// function getdata() {
//     // local storage are retreiving 
//     localStorage.setItem("G_local", JSON.stringify(Games_array));
//     let Data = "";
//     // Restore all data from local storage
//     local = JSON.parse(localStorage.getItem("G_local"));
//     for (i = 0; i < local.length; i++) {
//         Data += ` <tr> <td><a href="#" onclick="delete_game(${i})" ><i class="fas fa-trash-alt" style="color: white;"></i></a></td>
//     <td><img src="GameSrc/${local[i].Img}" alt="game_image"></td>
//     <td> ${local[i].Name} </td>
//     <td> ${local[i].Price} <input type="hidden" value='${local[i].Price}'  class="Iprice">  </td>
//     <td> <input class="w-25 pl-1  quantity"  type="number" min="1" max="10" value="1" onchange="subTotal()"
//             style="background:#FE53BB ; border: none; color: white; "> </td>
//     <td class="total"> ${local[i].Price} $  </td> </tr>`
//     }
//     t_body.innerHTML = Data;
// }



// function delete_game(v) {
//     local = JSON.parse(localStorage.getItem("G_local"));
//     // remove 1 element from array
//     Games_array.splice(v, 1);
//     // set new array in local storage
//     localStorage.setItem('G_local', JSON.stringify(Games_array));
//     getdata();
//     subTotal();
// }



// function subTotal() {
//     totalsub = 0;
//     for (i = 0; i < iprice.length; i++) {
//         itotal[i].innerHTML = (iprice[i].value) * (iquntity[i].value) + "$";
//         totalsub += (iprice[i].value) * (iquntity[i].value);
//     }
//     var s = discount / 100;
//     var t = totalsub + shipping;
//     var x = t - (t * s);
//     Sub_total.innerText = totalsub + " " + "$";
//     AllTotal.innerText = x + " " + "$";
// }

// function opencode() {
//     var code = Coupon_code.value;
//     if (code == "KF1") {
//         discount = 10;
//         Msg.innerText = " Congratulations , You Got 10% OFF ! "
//         Msg.style.color = "green";
//         Discount.innerText = discount + " " + "%";
//     }
//     else if (code == "KF2") {
//         discount = 15;
//         Msg.innerText = " Congratulations , You Got 15% OFF ! "
//         Msg.style.color = "green";
//         Discount.innerText = discount + " " + "%";
//     }
//     else if (code == "KF3") {
//         discount = 20;
//         Msg.innerText = " Congratulations , You Got 20% OFF ! "
//         Msg.style.color = "green";
//         Discount.innerText = discount + " " + "%";
//     }
//     else {
//         discount = 0;
//         Msg.innerText = " Sorry , Code IS expired ! "
//         Msg.style.color = "red";
//         Discount.innerText = discount + " " + "%";
//     }
//     subTotal();

// }

// function GetPrint() {
//     var x = document.getElementById("sign");
//     x.style.display = "block";




//     local = JSON.parse(localStorage.getItem("G_local"));
//     // remove 1 element from array
//     Games_array.splice(0, 50);
//     // set new array in local storage
//     localStorage.setItem('G_local', JSON.stringify(Games_array));
//     getdata();
//     Msg.innerText = "";
//     Coupon_code.value = "";
//     Sub_total.innerText = " 0 " + "$";
//     AllTotal.innerText = " 0 " + "$";
//     discount = 0;

//     window.print();
//     x.style.display = "none";
// }


