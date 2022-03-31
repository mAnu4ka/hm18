import get_arr from './js/send_arr.js';
import get_year from './js/newyear.js'
import get_sord_arr_minuse from './js/sordplus.js'
import getRandomInRange from './js/randomnum.js'
import search_arr from './js/search.js'

get_arr(100, 10, 1200, 'https://api.instantwebtools.net/v1/airlines/').then(results => createarr(results, 'notfake'));
let zar
let zar21
let main = document.querySelector('main')
let filter = document.querySelector('#filter')
let course_modal = document.querySelector('.course-modal')
let bg_modal = document.querySelector('.bg-modal')
let body = document.querySelector('body')
let form = document.querySelector('form')
let input = document.querySelector('.search')
let div = document.querySelector('.div')
let el = div.children
filter.onclick = () => {
    if (filter.getAttribute('class') == 'yes') {
        filter.classList.add('no')
        filter.classList.remove('yes')
        div.classList.add('none')
        div.classList.remove('bloke')
    } else if (filter.getAttribute('class') == 'no') {
        filter.classList.remove('no')
        filter.classList.add('yes')
        div.classList.add('bloke')
        div.classList.remove('none')

        createarr(search_arr(zar, el[0], 'established'))
    }
}

let concorn = 0

input.onkeyup = () => {
    createarr(search_arr(zar, input, 'name'))
}

const createarr = (arr, notfake) => {
    main.innerHTML = ' '

    if (notfake == 'notfake') {
        zar21 = arr.filter(n => n !== '')
    } else {
        zar = arr.filter(n => n !== '')
    }

    if (arr.length == 0) {
        zar = zar21
    } else if (notfake == 'notfake') {
        zar = zar21
    } else if (input.value.length == 0 && el[0].value.length == 0) {
        zar = zar21
    }

    for (const item of zar) {
        main.innerHTML += `<a data-input="6" data-but data-with='691px' data-haight='691px' class="item" id='${item.id}' href="./indexid.html#${item.id}"> <img src="./img/454-68x68.jpg">
        <div class="text">
        <p>${item.name}</p>
        <p>${item.established}-${get_year()}</p>
        <span>${item.country}</span>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </a>`
    }
    let items = document.querySelectorAll('.item')
    for (const item of items) {
        item.onclick = () => {
            let id = item.getAttribute('id')
            let find = zar21.find(item => item.id == id)
            anim('cenche', find)
        }
    }
}

//////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


let arr_plesholder_for_inp = ['Название', 'Страна', 'Ссылка но фото', 'Слоган', 'Откуда - Куда', 'Веб-сайт', 'Когда было создано (год)']
let arr_name_for_inp = ['name', 'country', 'logo', 'slogan', 'head_quaters', 'website', 'established']

const createmobile = (input, text = 'изменить', cen, finde) => {
    form.innerHTML = ' '
    let arr_sad = [finde.name, finde.country, finde.logo, finde.slogan, finde.head_quaters, finde.website, finde.established]
    let inputmobail
    let h1mobil = document.createElement('h3')
    let buton = document.createElement('button')
    h1mobil.innerText = text
    buton.classList.add('create')
    buton.innerText = text
    form.append(h1mobil)
    for (let i = 0; i < input; i++) {
        inputmobail = document.createElement('input')
        inputmobail.setAttribute('type', 'text')
        inputmobail.setAttribute('placeholder', arr_plesholder_for_inp[i])
        inputmobail.setAttribute('name', arr_name_for_inp[i])
        
        if (cen = 'cenche') {
            inputmobail.value = arr_sad[i]
        }

        form.append(inputmobail)
    }
    form.append(buton)
    REGEX()
}

const closeModal = () => {
    bg_modal.style.opacity = "0"
    course_modal.style.opacity = "0"
    course_modal.style.width = "0px"
    course_modal.style.height = '0px'
    body.style.overflow = 'scroll'

    setTimeout(() => {
        bg_modal.style.display = "none"
        course_modal.style.display = "none"
    }, 100);
}

const showModal = (width, haight, input, text, finde) => {
    bg_modal.style.display = "block"
    course_modal.style.display = "flex"
    body.style.overflow = 'hidden'
    course_modal.style.width = width
    course_modal.style.height = haight
    setTimeout(() => {
        bg_modal.style.opacity = "1"
        course_modal.style.opacity = "1"
    }, 100);

    createmobile(input, text, cen, finde)
}

const anim = (cen, finde) => {
    let butns = document.querySelectorAll('button[data-but]')
    for (const but of butns) {
        but.onclick = () => {
            let valueinnrTEXT = but.innerText
            let width = but.getAttribute('data-with')
            let haight = but.getAttribute('data-haight')
            let input = but.getAttribute('data-input')
            showModal(width, haight, input, valueinnrTEXT, cen, finde)
        }
    }
}

const REGEX = () => {
    form.onsubmit = () => {
        event.preventDefault()
        let fm = new FormData(form)
        let Create_New_Task = {
            id: getRandomInRange(1, 10000000),
        }
        fm.forEach((a, b) => {
            Create_New_Task[b] = a
        })
        let butensclose = document.querySelectorAll('.create')
        for (const but of butensclose) {
            but.onclick = () => {
                closeModal()
                axios.post('', Create_New_Task)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
}


anim([])