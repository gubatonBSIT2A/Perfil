const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')

form.addEventListener('submit', (e) => {
    let messages = []
    if(fname.value === '' || fname.value == null ){
        messages.push('First Name is required')
    }
    if(lname.value === '' || lname.value == null){
        messages.push('Last Name is required')
    }
    if(mobile.value === '' || mobile.value == null){
        messages.push('Need mobile')
    }
    if(mobile.value.length >= 11){
        messages.push('Mobile Number needs to be less than 11 numbers')
    }
    if(email.value === '' || email.value == null){
        messages.push('Email is required')
    }
    if(password.value === '' || password.value == null){
        messages.push('Password is required')
    }
    if(password.value.length <= 8){
        messages.push('Password must be longer than 8 characters')
    }
    if(cpassword.value === '' || password.value == null){
        messages.push('Confirm Password is required')
    }
    if(password != cpassword){
        alert('Password did not match')
    }else{
        alert('Password is created successfully')
    }
})