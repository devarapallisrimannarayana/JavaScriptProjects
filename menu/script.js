let menu = [{
        id: 1,
        category: 'breakfast',
        image: './images/butter_pancake_double.png',
        dish: 'Butter Pancake Double',
        price: '1,200/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 2,
        category: 'lunch',
        image: './images/chicken_shahi_biriyani.png',
        dish: 'Chicken Shahi Biriyani',
        price: '900/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 3,
        category: 'dinner',
        image: './images/pannier_shahi_rice.png',
        dish: 'Pannier Shahi Rice',
        price: '860/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 4,
        category: 'starter',
        image: './images/chicken_kebab.png',
        dish: 'Chicken Kebab',
        price: '920/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 5,
        category: 'starter',
        image: './images/pannier_kofta.png',
        dish: 'Pannier Koftha',
        price: '560/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 6,
        category: 'starter',
        image: './images/pannier_kebab.png',
        dish: 'Pannier Kabab',
        price: '680/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 7,
        category: 'breakfast',
        image: './images/french_pancake.png',
        dish: 'French Pancake',
        price: '1,600/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 8,
        category: 'breakfast',
        image: './images/french_sandwich.png',
        dish: 'French Sandwich',
        price: '960/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 9,
        category: 'lunch',
        image: './images/classic_burger_fries.png',
        dish: 'Classic Burger/Fries',
        price: '1,800/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 10,
        category: 'lunch',
        image: './images/ratoutille_cake.png',
        dish: 'Ratoutille cake',
        price: '900/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 11,
        category: 'starter',
        image: './images/frost_gaint_icecream.png',
        dish: 'Frost Gaint Icecream',
        price: '500/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 12,
        category: 'breakfast',
        image: './images/becan_classic_pancake.png',
        dish: 'Becan Classic pancake',
        price: '1,300/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 13,
        category: 'starter',
        image: './images/venela_forest.png',
        dish: 'Venela Forest',
        price: '600/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

    {
        id: 14,
        category: 'dinner',
        image: './images/honey_comb_cake.png',
        dish: 'Honey Comb Cake',
        price: '800/-',
        description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies, Nam sagittis.'
    },

]

let btnSection = document.getElementById('buttons');
let menuSection = document.querySelector('.menu_section');

window.addEventListener('DOMContentLoaded', function () {
    allmenu(menu);

    // create an array with category list
    let catList = menu.map(function (item) {
        return item.category
    });

    // remove the duplicates (we need to add 'all')
    let unique = [...new Set(catList)];
    unique.unshift('all');

    // send it to HTML
    let uniqueBtns = unique.map(function (item) {
        return `<button class="filter_btn" data-food="${item}">${item}</button>`
    })
    uniqueBtns = uniqueBtns.join('');
    //console.log(uniqueBtns)
    
    btnSection.innerHTML = uniqueBtns;


    // add filter functionality to buttons
    let btns = document.querySelectorAll('.filter_btn');

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let category = e.currentTarget.dataset.food;
            let filterItems = menu.filter(function (item) {
                if (item.category == category) {
                    return item;
                };
            });
            if (category === 'all') {
                allmenu(menu);
            } else {
                allmenu(filterItems)
            }
        });
    });


});


function allmenu(array) {
    let menuItems = array.map(function (item) {
        return `<div class="item">
                <img class="item_image" src="${item.image}" alt="">
                <div class="item_info">
                    <div class="item_info_head">
                        <p class="dish">${item.dish}</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <div class="line"></div>
                    <p class="description">${item.description}</p>
                </div>
            </div>`
    })
    menuItems = menuItems.join('');
    menuSection.innerHTML = menuItems;
}
var inputBtn = document.querySelector("#input_btn");
var addInput= ()=>{
    var htmlTemplate =`<section class="input">
    <p>category: <input type="text" placeholder="Enter category"></p>
    <p>dish: <input type="text" placeholder="Enter dish"></p>
    <p>price: <input type="text" placeholder="Enter Price"></p>
    <p>Description: </p>
    <textarea name="" id="description" cols="30" rows="5"></textarea>
    <p>uploadImg: </p>
    <img src="" alt="">
 </section>`
 inputBtn.innerHTML = htmlTemplate;
    
}