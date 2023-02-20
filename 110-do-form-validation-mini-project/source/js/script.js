let userInvalid = document.querySelector('.invalid-username')
let passInvalid = document.querySelector('.invalid-password')


let userNameInput = document.querySelector('.username')
let userPassInput = document.querySelector('.password')
let modalError =  document.querySelector('.modal')


function arianUserName() {
    if(userNameInput.value.length < 8){
        userInvalid.style.display = 'block'
        userInvalid.style.color = 'red'

    }else{
        userInvalid.style.color = 'green'
        userInvalid.innerHTML = 'یزرنیم وارد شده صحیح می باشد'
    }
}

function arianUserPass() {
    if(userPassInput.value.length < 4){
        passInvalid.style.display = 'block'
        passInvalid.style.color = 'red'

    }else{
        passInvalid.style.color = 'green'
        passInvalid.innerHTML = 'پسوورد وارد شده صحیح می باشد'
    }
}
function arian() {
    let userValue = userNameInput.value
    let passvalue = userPassInput.value
    if(userValue.length < 8 || passvalue.length < 4){
        modalError.style.display = 'block'
    }else{
        modalError.style.display = 'block'
        modalError.style.background = 'green'
        modalError.innerHTML = 'ورود شما با موفقیت انجام شد '
    }
    

    setTimeout(function(){
        modalError.style.display = 'none'
    }, 3000)
}