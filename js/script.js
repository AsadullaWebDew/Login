
// arre hammasini bitta arra ga solib ma'lutlarni bacgent ga jonatish
let allmsal = []


// Add bosganda ishlaydign funksiya 

function allLogin(){
    let login = document.getElementById("log-in").value;
    let password = document.getElementById("password").value;

    // add bosgan da inputni tozalash 

    document.getElementById("log-in").value = "";
    document.getElementById("password").value = "";


    // console.log(login)
    // console.log(password)

    let masAll = {
        foydalanuvchi: login,
        parol:password
    }

    allmsal.push(masAll);
    console.log(allmsal);

    if(login == "Asadulla" && password == 12345){
          let ress = ""
          let nun = ""
          setTimeout(() => {
           ress+=`
           <div class="alert alert-primary" role="alert">Hush kelibsiz ${login}!!!</div>
              `
         document.getElementById("Result").innerHTML = ress;
       }, 50)
       setInterval(() => {
           document.getElementById("Result").innerHTML = nun;
         }, 10000)
    } 

    else{
         
    let res = ""
    let non = ""
        setTimeout(() => {
            res+=`
            <div class="alert alert-danger" role="alert">Login and password error!</div>
               `
          document.getElementById("Result").innerHTML = res;
        }, 50)
        setInterval(() => {
          document.getElementById("Result").innerHTML = non;
        },5000)

      }

}
