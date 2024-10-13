


fetch('data.json')
    .then(res => res.json()) // Converts the response into a useful format)
    .then(data => {
        const productsBox = document.querySelector('#products')
        
        // We need to access each product one a at a time
        // so we use a forEach loop
        data.items.forEach(product => {
           
            productsBox.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p class="price">£${product.price}</p>
                    <img src="${product.image}" alt="" />

                </div>
            `
        })

    })

console.log('The rest of our code')








    //now we can access to the data we asked for
    //within the second then block is the only place you can access the data
    //Everthing you need to do with the data you fetched must go in here. 
//     data.items.forEach((product)=>{
//         productsBox.innerHTML += `
//         <div>
//         <h3>${product.name}</h3>
//         </div>`
//     })
//   })
//   console.log('The rest of our code')