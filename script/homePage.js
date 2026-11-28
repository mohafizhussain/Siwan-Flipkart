
const products_detail = [
    {
        id: 1,
        image: "https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/FEBRUARY/17/mjNF6Ijl_3f30232b1117447b8b7ab5fb48a8007e.jpg",
        brand: "Vastramay",
        name: "Kurta",
        discount_price: 4919,
        original_price: 12299,
        discount: "60% off",
        category: "Clothing"
    },
    {
        id: 2,
        image: "https://assets.ajio.com/medias/sys_master/root/20250506/0Ygv/681a165955340d4b4f1c8ddc/-473Wx593H-701543268-cream-MODEL.jpg",
        brand: "Rare Rabbit",
        name: "Shirt",
        discount_price: 1567,
        original_price: 2799,
        discount: "44% off",
        category: "Clothing"
    },
    {
        id: 3,
        image: "https://freakins.com/cdn/shop/files/E2.2_5ef518fe-5313-4260-9a1b-144467b1b9d9.jpg?v=1782461952",
        brand: "Jack & Jones",
        name: "Jeans",
        discount_price: 1679,
        original_price: 2799,
        discount: "40% off",
        category: "Clothing"
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/81UAOPVo0yL._AC_UY1100_.jpg",
        brand: "Levis",
        name: "Tshirt",
        discount_price: 389,
        original_price: 649,
        discount: "40% off",
        category: "Clothing"
    },
    {
        id: 5,
        image: "https://m.media-amazon.com/images/I/61SGEwPRxqL._AC_UY1100_.jpg",
        brand: "Van-Heusen",
        name: "Women Tshirt",
        discount_price: 499,
        original_price: 499,
        discount: "0% off",
        category: "Clothing"
    },
    {
        id: 6,
        image: "https://shop.teamsg.in/cdn/shop/files/Untitled_design_2_157ec40c-e193-4846-8adf-0732d4518864.png?v=1764582630",
        brand: "SG",
        name: "Mens Shoes",
        discount_price: 851,
        original_price: 1199,
        discount: "29% off",
        category: "Footwear"
    },
    {
        id: 7,
        image: "https://rukminim3.flixcart.com/image/480/640/xif0q/shoe/t/b/y/8-9244-brown-41-0-roadster-brown-watermarked-original-imahdq7ehtzjy3sp.jpeg?q=90",
        brand: "Roadster",
        name: "Women Shoes",
        discount_price: 849,
        original_price: 2299,
        discount: "63% off",
        category: "Footwear"
    },
    {
        id: 8,
        image: "https://assets.ajio.com/medias/sys_master/root/20230922/TRPP/650d7c9fddf7791519f41249/-1117Wx1400H-469496448-grey-MODEL.jpg",
        brand: "ADIDAS",
        name: "Mens Slipper",
        discount_price: 389,
        original_price: 649,
        discount: "40% off",
        category: "Footwear"
    },
    {
        id: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGH7KJV4Idh4HSnY-6Kfkzb0QuSqxgzMuuAHpkMotS_CY0QacttK5PPRw&s=10",
        brand: "Flite",
        name: "Women Slipper",
        discount_price: 586,
        original_price: 2399,
        discount: "76% off",
        category: "Footwear"
    },
    {
        id: 10,
        image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-resized-original-imag6vpyghayhhrh.jpeg?q=70",
        brand: "Apple",
        name: "iPhone 13",
        discount_price: 45000,
        original_price: 49999,
        discount: "10% off",
        category: "Mobiles"
    },
    {
        id: 11,
        image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
        brand: "Apple",
        name: "iPhone 14",
        discount_price: 50000,
        original_price: 100000,
        discount: "50% off",
        category: "Mobiles"
    },
    {
        id: 12,
        image: "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/300749_0_hyore5.png",
        brand: "Apple",
        name: "iPhone 15 Pro",
        discount_price: 134000,
        original_price: 169000,
        discount: "22% off",
        category: "Mobiles"
    },
    {
        id: 13,
        image: "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/321194_0_JUnDsuBew.png?updatedAt=1770992567618",
        brand: "Vivo",
        name: "Vivo",
        discount_price: 66000,
        original_price: 100000,
        discount: "34% off",
        category: "Mobiles"
    },
    {
        id: 14,
        image: "https://m.media-amazon.com/images/I/71HReMsMPrL._AC_UF1000,1000_QL80_.jpg",
        brand: "Samsung",
        name: "Samsung S25",
        discount_price: 114000,
        original_price: 145000,
        discount: "21% off",
        category: "Mobiles"
    },
    {

        id: 15,
        image: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/251026/2022/7/18/ef58f3b6-ecdb-481b-b5c8-0de7f8361bf81658123343401-Casio-Youth-Digital-Men-Silver-Digital-watch-D099-AE-1200WHD-11.jpg",
        brand: "Casio",
        name: "Watch Casio",
        discount_price: 3900,
        original_price: 5000,
        discount: "22% off",
        category: "Watches"
    }
];

const sendingData = JSON.stringify(products_detail);
const dataSending = localStorage.setItem("productDetailList" , sendingData);

function gettingData(addtocartDetail) {

    const gettingDataFromLocal = JSON.parse(
        localStorage.getItem("addtocartProduct")
    );
    let saveallData = [];
    if (!gettingDataFromLocal) {

        saveallData.push(addtocartDetail);
    } else {

        for (let i = 0; i < gettingDataFromLocal.length; i++) {
            saveallData.push(gettingDataFromLocal[i]);
        }
        saveallData.push(addtocartDetail);
    }
    const saveallDataSend = JSON.stringify(saveallData);

    localStorage.setItem("addtocartProduct", saveallDataSend);
}

function creatingelement(arr){
    const appendingDiv = document.createElement("div");
    const imageAppendElement  =  document.createElement("img");
    imageAppendElement.src = arr.image;

    // styling image
    imageAppendElement.style.borderRadius = "50px";

    const brandAppendElement  =  document.createElement("p");
    brandAppendElement.textContent = arr.brand;
    // brand styling
    brandAppendElement.style.color = "red";
    brandAppendElement.style.fontWeight = "bold";
    const nameAppendElement  =  document.createElement("p");
    nameAppendElement.textContent = arr.name;
    //Name styling
    nameAppendElement.style.color = "black";
    nameAppendElement.style.fontWeight = "bold";

    const discount_priceAppendElement  =  document.createElement("p");
    discount_priceAppendElement.textContent = arr.discount_price;
    const Original_priceElement  =  document.createElement("p");
    Original_priceElement.textContent = arr.Original_price;
    const discountAppendElement  =  document.createElement("p");
    discountAppendElement.textContent = arr.discount;

    const buttonAppendElement  =  document.createElement("button");
    buttonAppendElement.textContent = "Add to Cart";
    buttonAppendElement.onclick = function(){
        gettingData(arr);

    };
    // style
    buttonAppendElement.textContent = "Add to Cart";

    buttonAppendElement.style.backgroundColor = "orange";
    buttonAppendElement.style.color = "black";
    buttonAppendElement.style.padding = "10px 20px";
    buttonAppendElement.style.border = "1px solid blue";
    buttonAppendElement.style.borderRadius = "5px";
    buttonAppendElement.style.cursor = "pointer";
    buttonAppendElement.style.fontSize = "16px";
    buttonAppendElement.style.fontWeight = "bold";

     buttonAppendElement.onclick = function () {
    gettingData(arr);
};
  
    appendingDiv.appendChild(imageAppendElement);
    appendingDiv.appendChild(brandAppendElement);
    appendingDiv.appendChild(nameAppendElement);
    appendingDiv.appendChild(discount_priceAppendElement);
    appendingDiv.appendChild(Original_priceElement);
    appendingDiv.appendChild(discountAppendElement);
    appendingDiv.appendChild(buttonAppendElement);

    return appendingDiv;
}


const Maindiv = document.getElementById("middle_content");

function populateDataList() {
    const receiveData = JSON.parse(localStorage.getItem("productDetailList"));

    for (let i = 0; i < receiveData.length; i++) {
        Maindiv.appendChild(creatingelement(receiveData[i]));
    }
}

populateDataList();

