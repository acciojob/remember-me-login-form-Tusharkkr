//your JS code here. If required.
let btn = document.querySelector('#submit')
        let form = document.querySelector('form')
        let username = document.querySelector('#username')
        let password = document.querySelector('#password')
        let checkbox = document.querySelector('#checkbox')

        let flag = false
        checkbox.addEventListener('click', () => {
            flag = true
            console.log(flag)
        })
        if(localStorage.getItem('key')!==null){
            let btns = document.createElement('input')
            btns.setAttribute('type','submit')
            btns.setAttribute('value','Login as existing user')
            btns.setAttribute('id','existing')
            form.append(btns)

            btns.addEventListener('click',()=>{
                 let data = JSON.parse(localStorage.getItem('key'))
                 alert(`Logged in as ${data[0]}`)
            })
        }
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('start')
            if (flag == true) {
                console.log('Add to LocalStorage')
                localStorage.setItem('key', JSON.stringify([username.value,password.value]))
            }else{
                localStorage.clear()
            }
            if(username.value!=''){
                alert(`Logged in as ${username.value}`);
            }
        })
        