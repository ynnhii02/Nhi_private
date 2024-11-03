// Load Best Seller items

let arrBestSellers = JSON.parse(localStorage.getItem('BestSellers'));
let bestSellersElement = document.querySelector('.best-sellers');
let btnLogout = document.getElementById('btnLogout');
let cartNotice = document.querySelector('.cart-notice');

for(item of arrBestSellers){
    let itemElement = document.createElement('section');
    itemElement.setAttribute('item_id', item.id);
    itemElement.setAttribute('array', 'arrBestSellers');
    itemElement.classList.add('item')
    bestSellersElement.appendChild(itemElement);

    let imgElement = document.createElement('section');
    imgElement.classList.add('item-img');
    imgElement.style.backgroundImage = `url(${item.img})`;
    itemElement.appendChild(imgElement);

    let nameElement = document.createElement('span');
    nameElement.classList.add('item-name');
    nameElement.innerText = item.name;
    itemElement.appendChild(nameElement);

    let btnWrap = document.createElement('section');
    btnWrap.classList.add('item-btn-wrap');

    let priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.innerText = Number(item.price).toLocaleString() + 'đ';
    btnWrap.appendChild(priceElement);

    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btn', 'btn-add-cart');

    btnAdd.onclick = addToCart;

    let iconAdd = document.createElement('i');
    iconAdd.classList.add('fas', 'fa-cart-plus');
    btnAdd.appendChild(iconAdd);
    var t = document.createTextNode('Thêm vào giỏ');
    btnAdd.appendChild(t);
    btnWrap.appendChild(btnAdd);

    itemElement.appendChild(btnWrap);

    //item onclick
    itemElement.onclick = function() {
        if(this.getAttribute('array') == 'arrBestSellers') {
            for(item of arrBestSellers){
                if(item.id == this.getAttribute('item_id')){
                    var a = {
                        id: item.id,
                        img: item.img,
                        name: item.name,
                        brand: item.brand,
                        price: item.price,
                        desc: item.desc,
                        warranty : item.warranty
                    };
                    console.log(a);
                    localStorage.setItem('currentItem', JSON.stringify(a));
                    window.open('sanpham.html', "_self");
                }
            }
        }
    }
}

function addToCart(e) {
    e.stopPropagation()
    if(currentUser){
        //mảng arrBestSellers
        if(this.parentNode.parentNode.getAttribute('array') == 'arrBestSellers'){
            for(item of arrBestSellers){
                if(item.id == this.parentNode.parentNode.getAttribute('item_id')){
                     //thêm sản phẩm vào cart của current User
                    currentUser.cart.push(item);
                    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                    cartNotice.innerText = currentUser.cart.length;
                }
            }
        }
        if(this.parentNode.parentNode.getAttribute('array') == 'arrFeatureProduct'){
            for(item of arrFeatureProduct){
                if(item.id == this.parentNode.parentNode.getAttribute('item_id')){
                     //thêm sản phẩm vào cart của current User
                    currentUser.cart.push(item);
                    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                    cartNotice.innerText = currentUser.cart.length;
                }
            }
        }

    } else {
        //mở trang đăng nhập/đăng ký
        window.open('auth_form.html', "_self");
    }
}

function searchProduct() {
    let arrFeatureProduct = JSON.parse(localStorage.getItem('FeatureProduct'));
    let productElement = document.querySelector('.content-product');
    var dataSearch = document.getElementById("searchProduct").value;

    // arrFeatureProduct.forEach(element => {
    //     if(element.name )
    // });
    var a = arrFeatureProduct.filter(data => data.name.toLowerCase().includes(dataSearch.toLowerCase()));
    arrFeatureProduct = a;
    // bestsellerElement.innerHTML = ""
    productElement.innerHTML = "";
    for (item of arrFeatureProduct) {
        let itemElement = document.createElement('section');
        itemElement.classList.add('item')
        productElement.appendChild(itemElement);

        let imgElement = document.createElement('section');
        imgElement.classList.add('item-img');
        imgElement.style.backgroundImage = `url(${item.img})`;
        itemElement.appendChild(imgElement);

        let nameElement = document.createElement('span');
        nameElement.classList.add('item-name');
        nameElement.innerText = item.name;
        itemElement.appendChild(nameElement);

        let btnWrap = document.createElement('section');
        btnWrap.classList.add('item-btn-wrap');

        let priceElement = document.createElement('span');
        priceElement.classList.add('item-price');
        priceElement.innerText = Number(item.price).toLocaleString() + 'đ';
        btnWrap.appendChild(priceElement);

        let btnAdd = document.createElement('button');
        btnAdd.classList.add('btn', 'btn-add-cart');
        let iconAdd = document.createElement('i');
        iconAdd.classList.add('fas', 'fa-cart-plus');
        btnAdd.appendChild(iconAdd);
        var t = document.createTextNode('Thêm vào giỏ');
        btnAdd.appendChild(t);
        btnWrap.appendChild(btnAdd);

        itemElement.appendChild(btnWrap);
    }
}

let arrFeatureProduct = JSON.parse(localStorage.getItem('FeatureProduct'))
let productElement = document.querySelector('.content-product');

for(item of arrFeatureProduct){
    let itemElement = document.createElement('section');
    itemElement.setAttribute('item_id', item.id);
    itemElement.setAttribute('array', 'arrFeatureProduct');
    itemElement.classList.add('item');
    productElement.appendChild(itemElement);

    let imgElement = document.createElement('section');
    imgElement.classList.add('item-img');
    imgElement.style.backgroundImage = `url(${item.img})`;
    itemElement.appendChild(imgElement);

    let nameElement = document.createElement('span');
    nameElement.classList.add('item-name');
    nameElement.innerText = item.name;
    itemElement.appendChild(nameElement);

    let btnWrap = document.createElement('section');
    btnWrap.classList.add('item-btn-wrap');

    let priceElement = document.createElement('span');
    priceElement.classList.add('item-price');
    priceElement.innerText = Number(item.price).toLocaleString() + 'đ';
    btnWrap.appendChild(priceElement);

    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btn', 'btn-add-cart');
    btnAdd.onclick = addToCart;
    let iconAdd = document.createElement('i');
    iconAdd.classList.add('fas', 'fa-cart-plus');
    btnAdd.appendChild(iconAdd);
    var t = document.createTextNode('Thêm vào giỏ');
    btnAdd.appendChild(t);
    btnWrap.appendChild(btnAdd);
    
    itemElement.appendChild(btnWrap);

    //item onclick
    itemElement.onclick = function() {
        if(this.getAttribute('array') == 'arrFeatureProduct') {
            for(item of arrFeatureProduct){
                if(item.id == this.getAttribute('item_id')){
                    var a = {
                        id: item.id,
                        img: item.img,
                        name: item.name,
                        brand: item.brand,
                        price: item.price,
                        desc: item.desc,
                        warranty : item.warranty
                    };
                    console.log(a);
                    localStorage.setItem('currentItem', JSON.stringify(a));
                    window.open('sanpham.html', "_self");
                }
            }
        }
    }
}


