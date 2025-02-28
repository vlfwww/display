const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
    { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
    { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
    { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
    { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
    { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
];

const fruits = document.querySelector('.fruits')
const veg = document.querySelector('.veg')
const berry = document.querySelector('.berry');
const list = document.querySelector('.list');
const modal = document.querySelector('.modal');
const name_ = document.querySelector('.modal h2');
const desc = document.querySelector('.modal .description');
const category = document.querySelector('.modal .category');

let flag = false;

function events(current_category){
    const newarr = items.filter(el => (el.category == current_category))
    list.innerHTML = ''
    newarr.forEach(el => {
        list.innerHTML += `<div class='item'>
        <h2>${el.category}</h2>
        <p>${el.name}</p>
        </div>`
    })

    document.querySelectorAll('.item').forEach(el => el.addEventListener('click', () =>{
        const newarr = items.filter(elem => (elem.name == el.children[1].textContent))
        modal.style.display = 'block';
        name_.textContent = newarr[0].name
        desc.textContent = newarr[0].description
        category.textContent = newarr[0].category
        flag = true;
        document.querySelector('body').addEventListener('click', (event) => {
            if( modal && event.target!=modal){
                modal.style.display = 'none';
                flag = false;
            }
        })
    }))

    document.querySelector('.close').addEventListener('click', () =>{
        modal.style.display = 'none';
        flag = false;
    })
}

fruits.addEventListener('click', () =>{
    events('Фрукты')
})

veg.addEventListener('click', () =>{
    events('Овощи')
})

berry.addEventListener('click', () =>{
    events('Ягоды')
})

