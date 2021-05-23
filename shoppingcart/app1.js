const category = document.querySelector('#category-display');
const product = document.querySelector('#prod-container');
const price = document.querySelector('#price');
const addToCart = document.querySelector('#add-to-cart');
const priceEl = document.querySelector('#price');
const searchEl=document.querySelector('.search-box');
//const getFilter = null;

const renderProducts = (products) => {
  category.innerHTML = products
    .map((product) => {
      return `
        <div class="item">
           <a href="" id="category-select" >${product.category}</a>
        </div>
		
				`;

    })
    .join('');
	
	
  category.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.id == 'category-select') {
      if (document.querySelector('#prod-container').length != 0) {
        /* document.querySelector('#prod-container').innerHTML = ''; */

        const getResult = (items) => {
          product.innerHTML = items
            .map((item) => {
              return `

               <div class="columns">
		<div class="card">
			<img src="${item.image}" alt="${item.image} height="150" width="150"/>
			<h1>${item.title}</h1>
			<p class="price" id="price-select">Rs${item.price}</p>
			<p>${item.description}</p>
			<p>
			<button id="add-to-cart"> Add to Cart</button></p>
			</div>
			</div>
`;
            })
            .join('');
        };
		
	
 const a1 = async () => {
          const response1 = await fetch('https://fakestoreapi.com/products');
          const result1 = await response1.json();
          console.log(result1);

          const selecteditem = event.target.text;
          localStorage.setItem('category', selecteditem);

          console.log(selecteditem);
          const filtered = result1.filter(
            (item) => item.category === selecteditem
          );
          console.log(filtered);
          getResult(filtered);
        };
        a1();
      }
    }
	
	
	price.addEventListener('click', (event) => {
      event.preventDefault();

      if (event.target.id == 'price-select') {
        if (document.querySelector('#prod-container').length != 0) {
          /* document.querySelector('#prod-container').innerHTML = ''; */

          const show = (items) => {
            product.innerHTML = items
              .map((product) => {
                return `
                
               <div class="columns">
		<div class="card">
			<img src="${product.image}" alt="${product.image} height="150" width="150"/>
			<h1>${product.title}</h1>
			<p class="price" id="price-select">Rs${product.price}</p>
			<p>${product.description}</p>
			<p>
			<button id="add-to-cart"> Add to Cart</button></p>
			</div>
			</div>
                  
		`;
              })
              .join('');
          };
		  
		  
		    const d1 = async () => {
            const response1 = await fetch('https://fakestoreapi.com/products');
            const result1 = await response1.json();
            console.log(result1);

            const selectedPrice = event.target.text;
            console.log(selectedPrice);

            const localData = localStorage.getItem('category');

            const filtered = result1.filter(
              (item) =>
                item.category === localData && item.price < selectedPrice
            );
            console.log(filtered);
            show(filtered);
          };
          d1();
        }
      }
    });
  });
  
  
   price.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.id == 'price-select') {
      if (document.querySelector('#prod-container').length != 0) {
        const show = (items) => {
          product.innerHTML = items
            .map((product) => {
              return `
               
               <div class="columns">
		<div class="card">
			<img src="${product.image}" alt="${product.image} height="150" width="150"/>
			<h1>${product.title}</h1>
			<p class="price" id="price-select">Rs${product.price}</p>
			<p>${product.description}</p>
			<p>
			<button id="add-to-cart"> Add to Cart</button></p>
			</div>
			</div>
                  `;
            })
            .join('');
        };

const e1 = async () => {
          const response1 = await fetch('https://fakestoreapi.com/products');
          const result1 = await response1.json();
          console.log(result1);

          const selectedPrice = event.target.text;
          console.log(selectedPrice);

          const filtered = result1.filter((item) => item.price < selectedPrice);
          console.log(filtered);
          show(filtered);
        };
        e1();
      }
    }
  });
};


const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const result = await response.json();

  let newArray = [];

  // Declare an empty object
  let uniqueObject = {};

  // Loop for the array elements
  for (let i in result) {
    // Extract the title
    let objTitle = result[i]['category'];

    // Use the category as the index
    uniqueObject[objTitle] = result[i];
  }

  // Loop to push unique object into array
  for (var i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }

  // Display the unique objects
  renderProducts(newArray);
  //displayProducts(result);
};

fetchProducts();

/* search function */
document.getElementById('search-box')
  search__input.addEventListener('keyup', mySearchFunction);

function mySearchFunction() {
  const x = document.getElementById('search__input');
  const y = x.value;

  const search = (items) => {
    product.innerHTML = items
      .map((product) => {
        return ` <div class="columns">
		<div class="card">
			<img src="${product.image}" alt="${product.image} height="150" width="150"/>
			<h1>${product.title}</h1>
			<p class="price" id="price-select">Rs${product.price}</p>
			<p>${product.description}</p>
			<p>
			<button id="add-to-cart"> Add to Cart</button></p>
			</div>
			</div>
         
            `;
      })
      .join('');
  };
  
  
   const c1 = async () => {
    const response1 = await fetch('https://fakestoreapi.com/products');
    const result2 = await response1.json();

    const selectitem = y;
    console.log(selectitem);

    const filtered = result2.filter((item) =>
      item.title.toLocaleLowerCase().includes(selectitem)
    );
    search(filtered);
  };
  c1();
}


  
  