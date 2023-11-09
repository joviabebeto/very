const products=document.querySelector(".product");
products.style.display = "none";
fetch("https://gorgeous-jacket-bat.cyclic.app/api/v1/product")
.then((response)=>{
    return response.json();
    
}).then((data)=>{
    data.data.map((products))
    products.style.display = "none";
    products.innerHTML+=`
    <div class="product-container"
    <img src="${products.image-containe}"
    `

})
