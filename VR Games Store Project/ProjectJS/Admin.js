let form = document.querySelector('.form-wrapper');
let t_body = document.querySelector('tbody');
let G_name = document.getElementById("game");
let G_desc = document.getElementById("desc");
let G_price = document.getElementById("price");
let G_image = document.getElementById("img");
let Games_array = [];
let local;
let submit = document.getElementById("save");
let mood = "Create";
let tmp;
let word_search = document.getElementById("search_txt");


ShowDataTabl();


// Pop-up form 
function ShowForm() {
    form.classList.add('active');
}

// hide form
function cancel() {
    form.classList.remove('active');
}

// function add game in array & localstorage 
// function add_game() {
//     // array of images for game
//     let Images = [];
//     const files = Array.from(G_image.files);
//     files.forEach(file => {
//         Images.push(file.name);
//       });
//       console.log(Images);
     
//     // add items in array of objects
//     if (mood == "Create") {
//         Games_array.push({
//             Name: G_name.value,
//             Desc: G_desc.value,
//             Price: G_price.value,
//             Image: Images,
//         });
//     }
//     else {
//         // delete_game(tmp);
//         // Games_array[tmp].Name = G_name.value;
//         // Games_array[tmp].Desc = G_desc.value;
//         // Games_array[tmp].Price = G_price.value;
//         // Games_array[tmp].Image = Images;
//         local = JSON.parse(localStorage.getItem("G_local"));
//         local[tmp].Name=G_name.value;
//         local[tmp].Desc=G_desc.value;
//         local[tmp].Price=G_price.value;
//         local[tmp].Image=G_image.value;
        
//         submit.innerHTML = 'Save Change';
//         mood = "Create";
//         cancel();
//         ShowDataTabl();
//     }
//     // add array of object to local storage with key = "G_local" 
//     localStorage.setItem("Admin_local", JSON.stringify(Games_array));
//     localStorage.setItem("G_local", JSON.stringify(Games_array));
//     // empty textboxs after add
//     G_name.value = "";
//     G_desc.value = "";
//     G_price.value = "";
//     G_image.value = "";
//     ShowDataTabl();
// }
function add_game() {
    // array of images for game
    let Images = [];
    const files = Array.from(G_image.files);
    files.forEach(file => {
        Images.push(file.name);
    });
    console.log(Images);

    if (mood == "Create") {
        // add items in array of objects
        Games_array.push({
            Name: G_name.value,
            Desc: G_desc.value,
            Price: G_price.value,
            Image: Images,
        });
        // add array of object to local storage with key = "G_local"
        localStorage.setItem("Admin_local", JSON.stringify(Games_array));
        localStorage.setItem("G_local", JSON.stringify(Games_array));
    }
    else {
        // Update the game information
        local = JSON.parse(localStorage.getItem("G_local"));
        local[tmp].Name = G_name.value;
        local[tmp].Desc = G_desc.value;
        local[tmp].Price = G_price.value;
        local[tmp].Image = Images;

        // Update local storage
        localStorage.setItem("Admin_local", JSON.stringify(local));
        localStorage.setItem("G_local", JSON.stringify(local));

        submit.innerHTML = 'Save Change';
        mood = "Create";
    }
    // empty textboxs after add
    G_name.value = "";
    G_desc.value = "";
    G_price.value = "";
    G_image.value = "";
    ShowDataTabl();
}
// Load Table Data
function ShowDataTabl() {
 
    let Data = "";
    // Restore all data from local storage
    local = JSON.parse(localStorage.getItem("G_local"));
    for (i = 0; i < local.length; i++) {
        Data += ` <tr>
                      <td> ${local[i].Name} </td>
                      <td> ${local[i].Desc}  </td>
                      <td> ${local[i].Price + "$"} </td>
                      <td> ${local[i].Image[0]} </td>
                      <td><button type="button" class="btn btn-secondary"  onclick="edit_game(${i})">Edit</button> </td>
                      <td> <button type="button" class="btn btn-danger"onclick="delete_game(${i})">Delete</button> </td>
                    </tr>`
    }
    t_body.innerHTML = Data;
    cancel();
}

// Delete Game
function delete_game(index) {
    // debugger;
    local = JSON.parse(localStorage.getItem("Admin_local"));
    local = JSON.parse(localStorage.getItem("G_local"));
    // remove 1 element from array
    Games_array.splice(index, 1);
    // set new array in local storage
    localStorage.setItem('Admin_local', JSON.stringify(Games_array));
    localStorage.setItem('G_local', JSON.stringify(Games_array));
    // load new table
    ShowDataTabl();
}

// Edit Game
function edit_game(index) {
    ShowForm();
    local = JSON.parse(localStorage.getItem("G_local"));
    G_name.value=local[index].Name;
    G_desc.value=local[index].Desc;
    G_price.value=local[index].Price;
    // G_name.value = Games_array[index].Name;
    // G_desc.value = Games_array[index].Desc;
    // G_price.value = Games_array[index].Price;
    // G_image.files = Games_array[index].Image;  
    submit.innerHTML = 'UPDATE';
    mood = "update";
    tmp = index;
    // ShowDataTabl();
}

function search() {
    let Data = "";
    // Restore all data from local storage
    local = JSON.parse(localStorage.getItem("Admin_local"));
    for (i = 0; i < local.length; i++) {
        if (local[i].Name == word_search.value || local[i].Name.includes(word_search.value))
            Data += ` <tr>
                      <td> ${local[i].Name} </td>
                      <td> ${local[i].Desc}  </td>
                      <td> ${local[i].Price + "$"} </td>
                      <td> ${local[i].Image}  </td>
                      <td><button type="button" class="btn btn-secondary"  onclick="edit_game(${i})">Edit</button> </td>
                      <td> <button type="button" class="btn btn-danger"onclick="delete_game(${i})">Delete</button> </td>
                    </tr>`
    }
    t_body.innerHTML = Data;
}


