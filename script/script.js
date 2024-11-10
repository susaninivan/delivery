const modalFunct = function () {
    const modal = document.querySelector(".card-modal__overlay")
    const cartBtn = document.getElementById('cart-button')

    // const closeBtn = document.querySelector(".card-modal__header-close")

    cartBtn.addEventListener("click", function () {
        openModal()
    })


    const openModal = function () {
        modal.classList.add("open")
    }
    const closeModal = function () {
        modal.classList.remove("open")
    }

    // closeBtn.addEventListener("click", function() {
    //     closeModal()
    // })

    modal.addEventListener("click", function (event) {
        console.log(event.target)
        if (event.target.classList.contains("card-modal__overlay") || event.target.closest(".card-modal__header-close")) {
            closeModal()
        }
    })
}

const restFunct = function () {
    const container = document.getElementById("rests-container")

const restArray = [

    {
        id:0,
        titel: "Пицца плюс",
        time: 50, 
        rating: 4.5,
        price: 900,
        type: "Пицца",
        img:"rest1.jpg"
    },
    {
        id:1,
        titel: "Тануки ",
        time: 50, 
        rating: 4.4,
        price: 1000,
        type: "Роллы",
        img:"rest2.jpg"
    },
    {
        id:2,
        titel: "Тануки ",
        time: 50, 
        rating: 4.4,
        price: 1000,
        type: "Роллы",
        img:"rest2.jpg"
    },
    {
        id:3,
        titel: "Тануки ",
        time: 50, 
        rating: 4.4,
        price: 1000,
        type: "Роллы",
        img:"rest2.jpg"
    },
    {
        id:4,
        titel: "Тануки ",
        time: 50, 
        rating: 4.4,
        price: 1000,
        type: "Роллы",
        img:"rest2.jpg"
    },
    {
        id:5,
        titel: "Тануки ",
        time: 50, 
        rating: 4.4,
        price: 1000,
        type: "Роллы",
        img:"rest2.jpg"
    }
]

    const loading = function() {
        container.innerHTML = '<p style="width:100%; text-align: center;" >Загрузка</p>' 
    }  
    

    const renderRests = function(array) {
        
        container.innerHTML=""
        array.forEach(function(card) {
           
container.insertAdjacentHTML('beforeend', `

<a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__img">
                                <img src="./img/rests/${card.img}" alt="${card.img}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-car__description-row">
                                    <h4 class="products-car__description-title">
                                        ${card.titel}
                                    </h4>
                                    <div class="products-car__description-bage">
                                    ${card.time}
                                    </div>
                                </div>
                                <div class="products-car__description-row">
                                    <div class="products-car__description-info">
                                        <div class="products-car__description-info-rat">
                                             <img src="./img/icons/star.svg" alt="star">
                                             ${card.rating}
                                        </div>
                                        <div class="products-car__description-info-price">
                                            От ${card.price} ₽
                                        </div>
                                        <div class="products-car__description-info-group">
                                        ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </a>
`)


        });
    }
    if(container) {

        loading ();

        setTimeout( function() {
            renderRests(restArray)
        }, 1000)
    }
}


restFunct()
modalFunct()