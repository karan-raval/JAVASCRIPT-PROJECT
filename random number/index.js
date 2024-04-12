//! ----==== Global SELECTORS ===-------

const accountNumber = document.querySelector('.accountNumber'); // account number input && account retiro  && deposito handler
const btnRetiro = document.querySelector('.btn-withdrwal'); // retiro button 
const btnDeposito = document.querySelector('.btn-deposit'); // deposito button
const btnContinuar = document.querySelector('.btn-continue');  // Continuar button
const btnCancelar = document.querySelector('.btn-cancel');    // Cancelar button
const screen = document.querySelector('.screen');  // screen display
const number = Array.from(document.querySelectorAll('.number'));// import all of numbers
let login = ''; // login status
let userIndex = 0; // global user index
let retiro = false; // retiro status 
let deposito = false;  // deposito status
// user data information
let bankUsers = [
  {
    accoutId: '1234',
    name: 'Carlos',
    middleName: 'Manuel',
    lastname: 'Ortiz',
    accoutBalance: 10,
  },
  {
    accoutId: '1235',
    name: 'Ana',
    middleName: 'Maria',
    lastname: 'Guerra',
    accoutBalance: 500,
  },
  {
    accoutId: '12355',
    name: 'Ana',
    middleName: 'Maria',
    lastname: 'Guerra',
    accoutBalance: 600,
  },
  {
    accoutId: '01023',
    name: 'German',
    middleName: 'Manuel',
    lastname: 'Hernandez',
    accoutBalance: 60,
  },

]

//! ------===EVENT LISTENER ===-----
window.addEventListener('load', handleEventListers); //  window load event listener

//! ----==== EVENT LISTENERS function ===-------
function handleEventListers() {
  btnRetiro.addEventListener('click', handleRetiro); // retiro button click listener
  btnDeposito.addEventListener('click', handleDeposito); // deposito button click listener
  btnContinuar.addEventListener('click', handleAcountNum); // Continuar button click listener
  btnCancelar.addEventListener('click', handleCancelar); // Cancelar button click listener

  number.map(button => {
    button.addEventListener('click', handleDisplay, handleAcountNum);
  }); // number array click listener
};

//! ------=== Functions ===-----

function handleDisplay(e) {
  accountNumber.value += e.target.value; // sets the value of the account number input

};


function handleAcountNum(e) {
  e.preventDefault() // prevents the default action
  // checks user data from bankUsers array length
  for (let index = 0; index < bankUsers.length; index++) {
    // if user found in bankUsers array
    if (accountNumber.value == bankUsers[index].accoutId) {
      userIndex = index; // sets the global user index
      login = 'login' // sets the login status to login
      screen.innerHTML = "" // clears the screen
      // prints the login screen
      screen.innerHTML += `
      <h1>Bienvenido ${bankUsers[index].name} ${bankUsers[index].lastname} </h1>
      <h2> su balance es de: <span class="account-balance">$${bankUsers[index].accoutBalance}</span></h2>
      <h2>Selecccion una opcion : <span class="retiro-name">Retiro</span> o <span class="deposito-name">Deposito</span></h2>
      
      ` }

  };

  // if user not logged in
  if (login == '') {
    screen.innerHTML = "" // clears the screen
    // prints the screen  
    screen.innerHTML += `
      <h1 style="color:red;">Numero de Cuenta no encontrado</h1>
      <h4>Verificar numero de cuenta e intendar de nuevo !</h4>
      `
    // wait for 3 seconds then reloads the page
    setTimeout(() => {
      location.reload();
    }, "3000");

  };
  // if retiro button is true and user logged in
  if (retiro == true && login == 'login') {
    //  checks if user data bankUser balance is < 10
    if (bankUsers[userIndex].accoutBalance < 10) {
      screen.innerHTML = "" // clears the screen
      // prints the screen
      screen.innerHTML += `
      <h1 style="color:red;">  ${bankUsers[userIndex].name} su retiro no pudo ser efectuado</h1>
      <h2>Su  porque se  balance es de  menor a <span style="color:red;">$ 10.00</span>  o su cuenta estaria en numeros negativos</h2>
      `
    } else {
      // if user data bankUser balance is < 0
      if (bankUsers[userIndex].accoutBalance - accountNumber.value < 0) {

        screen.innerHTML = "" // clears the screen
        // prints the screen
        screen.innerHTML += `
      <h1 style="color:red;">  ${bankUsers[userIndex].name} su retiro no pudo ser efectuado</h1>
      <h4>Su  porque  su cuenta estaria en numeros negativos lo sentimos!</h4>
      `

      } else {
        // if user data bankUser balance !< 0
        screen.innerHTML = "" // clears the screen 
        // prints the screen
        screen.innerHTML += `
      <h1 style="color:green;">  ${bankUsers[userIndex].name} su retiro fue  exitoso</h1>
      <h3>Su  Nuevo balance es de :<span class="account-balance">$${bankUsers[userIndex].accoutBalance -= accountNumber.value}</span></h3>
      `
        userIndex = 0; // sets user index to 0
        retiro = false; // sets retiro status to false
        // wait for 4 seconds then reloads the page
        setTimeout(() => {
          location.reload();
        }, "3000");
      }
    };

    // if deposito button is true and user logged in
  } else if (deposit == true && login == 'login') {
    // if user data bankUser balance is > 990
    if (bankUsers[userIndex].accoutBalance + Number(accountNumber.value) > 990 || bankUsers[userIndex].accoutBalance > 990) {
      screen.innerHTML = "" // clears the screen 
      // prints the screen
      screen.innerHTML += ` 
      <h1>  ${bankUsers[userIndex].name} su deposito no pudo ser efectuado</h1>
      <h2>  porque se  balance es de  mayor a $ 990.00  o su cuenta esta por arriva del deposito mayor a $990</h2>
      `
    } else {
      // if user data bankUser balance!> 990
      screen.innerHTML = "" // clears the screen 
      // prints the screen 
      screen.innerHTML += ` 
      <h1 style="color:green;">  ${bankUsers[userIndex].name} su retiro fue  exitoso</h1>
      <h2>Su  Nuevo balance es de :$${bankUsers[userIndex].accoutBalance += Number(accountNumber.value)}</h2>
      `

      userIndex = 0; // sets user index to 0
      deposito = false; // sets deposito status to false
      // wait for 3 seconds then reloads the page
      setTimeout(() => {
        location.reload();
      }, "3000");
    };
  };;



};


// check if user logged in successfully and handles user data print
function handleRetiro() {
  // trys to find the user in the bankUsers array accountNumber.value
  for (let index = 0; index < bankUsers.length; index++) {
    // value of the account number input and check if user logged in
    if (login == 'login' && accountNumber.value == bankUsers[index].accoutId) {
      retiro = true // sets retiro status to true
      accountNumber.value = '' // clears the value of the account number input
      screen.innerHTML = "" //clears the screen
      //prints the login screen
      screen.innerHTML += `
      <h1>  ${bankUsers[index].name} por favor Ingresar monto a retirar </h1>
      <h2>Su balance es de:  <spa class="account-balance">$${bankUsers[index].accoutBalance}</spa></h2>
      `

    };



  }
  // if user not logged in
  if (login == '') {
    screen.innerHTML = "" // clears the screen
    //prints the login screen
    screen.innerHTML += `
      <h1>Por favor ingresar numero de cuenta</h1>
      
      `
    // wait for 3 seconds then reloads the page
    setTimeout(() => {
      location.reload();
    }, "3000");
  };

};

function handleDeposito() {
  // bucle checks user data from bankUsers array  length
  for (let index = 0; index < bankUsers.length; index++) {
    // if user found in bankUsers array
    if (login == 'login' && accountNumber.value == bankUsers[index].accoutId) {
      deposito = true // sets deposito status to true
      accountNumber.value = '' // clears the value of the account number input
      screen.innerHTML = "" //clears the screen
      // prints the login screen
      screen.innerHTML += `
      <h1>  ${bankUsers[index].name} por favor Ingresar monto a depositar </h1>
      <h2>Su balance es de: <span class="account-balance">$${bankUsers[index].accoutBalance}</span></h2>
      `

    };



  }
  // if user not logged in
  if (login == '') {
    screen.innerHTML = "" //clears the screen
    // prints the login screen
    screen.innerHTML += `
      <h1>Por favor ingresar numero de cuenta</h1>
      
      `

    // wait for  seconds then reloads the page
    setTimeout(() => {
      location.reload();
    }, "3000");
  };
}


// handler for the cancel button
function handleCancelar() {
  // if user not logged in & accountNumber.value!= ''
  if (login == '' && accountNumber.value == '') {
    screen.innerHTML = "" // clears the screen
    // prints the login screen
    screen.innerHTML += `
      <h1 style="color:red;">No hay nada que cancelar ! </h1>
      
      `

    // wait for 2 seconds then reloads the page
    setTimeout(() => {
      location.reload();
    }, "2000");
  } else {

    login = '';// sets login status to ''
    accountNumber.value = '' // sets account number value to ''
    screen.innerHTML = "" // clears the screen
    // prints the login screen
    screen.innerHTML += `
      <h1 style="color:green;" >Has cancelado la transaccion con exito! </h1>
      
      `
    // wait for 2 seconds then reloads the page
    setTimeout(() => {
      location.reload();
    }, "2000");
  }

}
