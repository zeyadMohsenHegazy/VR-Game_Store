var g_name;
var g_image;
var g_price;
let local;
const Games_array = [];
let t_body = document.querySelector('body');

GetContent();

function Buy(index) {
  local = JSON.parse(localStorage.getItem("Admin_local"));
    g_name = local[index].Name;
    g_image = local[index].Image[0];
    g_price =local[index].Price ;
    Games_array.push({
        Name: g_name, Price: g_price, Img: g_image
    });
    localStorage.setItem("G_local", JSON.stringify(Games_array));
    alert('the game added to cart!');
}

function GetContent()
{
    let Data = "";
    let header = `<<header class="position-fixed w-100">
    <nav class="navbar navbar-expand-sm navbar-dark p-1">
      <div class="container-fluid">
        <a class="navbar-brand" href="home.html"><img src="../assests/images/logo.png" width="50px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2 active  mt-2" aria-current="page" href="../home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 mt-2" href="gamesHome.html">Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 mt-2" href="../contactus.html">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 mt-2" href="cart.html">Shopping Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="login.html">
                <img src="../assests/images/signOut.png">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
<br>
<br>`;
    local = JSON.parse(localStorage.getItem("Admin_local"));
    for (i = 0; i < local.length; i++) {
        if(i%2!=0)
        {
            Data += ` <section class="container pt-5 mb-5">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <h1 class="text-light imaginHead">${local[i].Name}</h1>
                <p class="text-light imaginP">
                ${local[i].Desc}
                </p>
                  <button class="imaginBtn btn" onclick="Buy(${i})">Buy Now</button><Label style="margin-left: 15px; font-weight: 500; color: #09FBD3; border:0;">Price : ${local[i].Price}  $</Label> 
              </div>
              <div class="col-lg-5 col-md-6 col-sm-12 gradient-box sm-w-100">
                <img src="GameSrc/${local[i].Image[0]}" class="homeImg w-100">
              </div>
            </div>
            <div class="container mt-5 ">
              <div class="row ">  
                <div class="card col-3" style="width:15rem;background-color:transparent">
                  <img src="GameSrc/${local[i].Image[1]}" class="card-img-top">
                </div>
                <div class="card col-3" style="width: 15rem;background-color:transparent">
                  <img src="GameSrc/${local[i].Image[2]}" class="card-img-top">
                </div>
                <div class="card col-3" style="width: 15rem;background-color:transparent">
                  <img src="GameSrc/${local[i].Image[3]}" class="card-img-top">
                </div>
                <div class="card col-3" style="width: 15rem;background-color:transparent">
                  <img src="GameSrc/${local[i].Image[4]}" class="card-img-top">
                </div>
              </div>
            </div>
          </section>`
        }
        else if(i%2==0)
        {
         Data += ` 
         <!-- Game2 section -->
         <section class="container pt-5 mb-5">
           <div class="row">
             <div class="col-lg-5 col-md-6 col-sm-12 gradient-left-box sm-w-100">
               <img src="GameSrc/${local[i].Image[0]}" class="homeImg w-100">
             </div>
             <div class="col-lg-6 col-md-6 col-sm-12">
               <h1 class="text-light imaginHead">${local[i].Name}</h1>
               <p class="text-light imaginP">
               ${local[i].Desc}
               </p>
                 <button class="imaginBtn btn" onclick="Buy(${i})">Buy Now</button><Label style="margin-left: 15px; font-weight: 500; color: #09FBD3;">Price :  ${local[i].Price}  $</Label> 
             </div>
           </div>
           <div class="container mt-5">
             <div class="row ">
             <div class="card" style="width: 15rem;background-color:transparent">
               <img src="GameSrc/${local[i].Image[1]}" class="card-img-top">
               </div>
                <div class="card" style="width: 15rem;background-color:transparent">
                 <img src="GameSrc/${local[i].Image[2]}" class="card-img-top">
               </div>
               <div class="card col-3" style="width: 15rem;background-color:transparent">
                 <img src="GameSrc/${local[i].Image[3]}" class="card-img-top">
               </div>
               <div class="card col-3" style="width: 15rem;background-color:transparent">
                 <img src="GameSrc/${local[i].Image[4]}" class="card-img-top">
               </div>
             </div>
           </div>
         </section>`
        }
        
    }
    t_body.innerHTML = header+Data;

}

