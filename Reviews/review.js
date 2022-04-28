let reviewList = [{
        id: 1,
        image: "./images/profile_img_01.png",
        name: 'Jack Sparrow',
        designation: 'CEO of Black Pearl',
        review: '“Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.”'
    },

    {
        id: 2,
        image: "./images/profile_img_02.png",
        name: 'Chandler Bing',
        designation: 'Transponster',
        review: '“Vitae accumsan lectus gravida elementum. Donec quis fermentum lorem. Nulla sed maximus enim, at blandit elit. Donec interdum nulla nec metus feugiat, at tristique elit viverra.”'
    },

    {
        id: 3,
        image: "./images/profile_img_03.png",
        name: 'Monica Geller',
        designation: 'Chef',
        review: '“Proin feugiat, tellus ac fermentum dignissim, felis sapien commodo augue, tempor vehicula ex mi eget neque. Aenean commodo libero eget turpis consectetur maximus.”'
    },

    {
        id: 4,
        image: "./images/profile_img_04.png",
        name: 'Ross Geller',
        designation: 'Paleontologist',
        review: '“Etiam venenatis mi sit amet lacus gravida, eu eleifend nulla tincidunt. Etiam tempor tincidunt lacinia. Nulla in enim sit amet lectus mattis vehicula. Aliquam id laoreet nibh. ”'
    },

    {
        id: 5,
        image: "./images/profile_img_05.png",
        name: 'Rachel Green',
        designation: 'Waitress at Central Park',
        review: '“Aliquam pharetra tristique interdum. Duis varius mattis lacinia. Nunc ut urna ut sem viverra auctor vitae id urna. Morbi tellus ante, rutrum eget neque a, hendrerit viverra purus. Fusce at consequat est.”'
    },

    {
        id: 6,
        image: "./images/profile_img_06.png",
        name: 'Phoebe Buffey',
        designation: 'Masseuse',
        review: '“Suspendisse a pulvinar turpis, a sagittis urna. Aenean libero massa, pretium vitae efficitur eu, posuere in nisi. Etiam sit amet lectus magna. Sed varius justo non commodo porta.”'
    },

    {
        id: 7,
        image: "./images/profile_img_07.png",
        name: 'Joey Tribiani',
        designation: 'Aspiring Actor',
        review: '“Pellentesque ullamcorper lorem eros, in scelerisque turpis facilisis quis. In hac habitasse platea dictumst. Suspendisse dignissim leo quis est bibendum, id venenatis elit convallis.”'
    },
]

// getting all the required id's into js
let profileImg = document.getElementById('profile_img')
let author = document.getElementById('author')
let designation = document.getElementById('designation')
let review = document.getElementById('review')

let previous = document.getElementById('previous_btn')
let surprise = document.getElementById('surprise_btn')
let next = document.getElementById('next_btn')

//initializing the value to 0
currentItem = 0;

//adding default person object when ever the site reloads

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem)
})



//function to change content according to the input

function showPerson(person) {
    let item = reviewList[person];
    profileImg.src = item.image;
    author.textContent = item.name;
    designation.textContent = item.designation;
    review.textContent = item.review;
}


//adding button functionalities

previous.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviewList.length - 1;
    }
    showPerson(currentItem);
});

next.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviewList.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

surprise.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviewList.length);
    showPerson(currentItem);
});