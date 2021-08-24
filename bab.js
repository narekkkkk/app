let imax = document.querySelector("#icon_prefix");
let imin = document.querySelector("#icon_telephone");
let btn = document.querySelector("#btn");




  
const min = document.querySelector('.imin')
const max = document.querySelector('.imax')
const btn = document.querySelector('.btn')
const sp = document.querySelector('.links')

btn.addEventListener('click',() => {
    sp.innerHTML = ''
    const app = {
        minvalue:min.value,
        maxvalue:max.value,
        random: (Math.random() * (max.value - min.value)) + min.value
    }
    if(app.minvalue > app.maxvalue || app.minvalue === app.maxvalue || (app.minvalue && app.maxvalue) < 0){
        alert('this is error for you')
    }else{
        for (const key in app) {
            const data = app[key]
            if (key === 'minvalue') {
                sp.innerHTML += <li>minimum number: ${data}</li>
            }else if (key === 'maxvalue') {
                sp.innerHTML += <li>maxmum number: ${data}</li>
            }else{
                sp.innerHTML += <li>random number: ${data}</li>

            }
        }
    }
})
