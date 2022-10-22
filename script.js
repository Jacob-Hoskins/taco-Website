const Menu = [
  {
    id: 0,
    FoodName: "Blazing Burrito",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non eius at qui magni sint facere molestias ad ratione voluptatem libero, voluptas explicabo omnis iusto laudantium laborum quaerat. Voluptas, libero.",
    Price: "$4.59",
    MenuCatagory: "Burritos",
    ImageLink:
      "https://theorion.com/wp-content/uploads/2016/08/tacos-ramirez-supreme-burrito.jpg",
  },

  {
    id: 1,
    FoodName: "Tuscan Taco",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non eius at qui magni sint facere molestias ad ratione voluptatem libero, voluptas explicabo omnis iusto laudantium laborum quaerat. Voluptas, libero.",
    Price: "$5.35",
    MenuCatagory: "Tacos",
    ImageLink:
      "https://ca-times.brightspotcdn.com/dims4/default/1af0b53/2147483647/strip/true/crop/2048x1338+0+0/resize/1440x941!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5a%2F7f%2F7c1ae72adb26aead6d131e31067b%2Flat-la-fo-taco-6-la0010543698-20130721",
  },

  {
    id: 2,
    FoodName: "Diablo Taco",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non eius at qui magni sint facere molestias ad ratione voluptatem libero, voluptas explicabo omnis iusto laudantium laborum quaerat. Voluptas, libero.",
    Price: "$6.35",
    MenuCatagory: "Tacos",
    ImageLink:
      "https://external-preview.redd.it/YTkb40mzH3508oS05YZfiXXBRhAGETaLrHBpSmfiuYQ.jpg?width=640&crop=smart&auto=webp&s=a0e8dfb5ec46599283bd764cd658d7bc659cba09",
  },

  {
    id: 3,
    FoodName: "Crazy Queso Chips",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non eius at qui magni sint facere molestias ad ratione voluptatem libero, voluptas explicabo omnis iusto laudantium laborum quaerat. Voluptas, libero.",
    Price: "$2.35",
    MenuCatagory: "Sides",
  },

  {
    id: 4,
    FoodName: "Spitifire Salsla chips",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non eius at qui magni sint facere molestias ad ratione voluptatem libero, voluptas explicabo omnis iusto laudantium laborum quaerat. Voluptas, libero.",
    Price: "$2.35",
    MenuCatagory: "Sides",
  },

  {
    id: 5,
    FoodName: "Tazmanian Taco",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non eius at qui magni sint facere molestias ad ratione voluptatem libero, voluptas explicabo omnis iusto laudantium laborum quaerat. Voluptas, libero.",
    Price: "$4.35",
    MenuCatagory: "Tacos",
    ImageLink:
      "https://thumbor.bigedition.com/best-taco-trucks/IuCuByvQXit1fDPGxbJa4DSplMo=/800x599/filters:quality(80)/granite-web-prod/31/69/31692ffd801c452a9b6cbc139d081277.jpeg",
  },
];

const Users = [
  {
    id: 0,
    Email: "FakeReviewEmail@fake.com",
    Password: "FakePassword123.",
    FirstName: "Alex",
    LastName: "Ruppert",
  },
  {
    id: 1,
    Email: "RealReviewEmail@fake.com",
    Password: "Rea;Password123.",
    FirstName: "Turner",
    LastName: "Tucker",
  },
  {
    id: 2,
    Email: "MaybeAFajeReviewEmail@fake.com",
    Password: "123798.",
    FirstName: "Rich",
    LastName: "Tucker",
  },
];

const Reviews = [
  { id: 0, FoodReviewed: 0, Review: "Lorem Epsum Text", UserWhoReviewed: 2 },
];

const foodParentID = document.getElementById("FOOD-ITEM-PARENT");

function removeItems() {
  //number of child elements to remove
  const x = foodParentID.childElementCount;

  foodParentID.textContent = "";
  console.log(x);
  while (foodParentID.lastChild) {
    foodParentID.lastChild.remove();
  }
}

//create function for each element with corresponding menu item to be inserted into html
function updateFoodItemHolder(foodName, foodPrice, foodDescription, img) {
  //CREATE ELEMENTS
  const divParent = document.createElement("div");
  const foodNameElement = document.createElement("p");
  const foodPriceElement = document.createElement("p");
  const foodDescriptionElement = document.createElement("p");
  const foodImageElement = document.createElement("img");
  const mainFoodFlex = document.createElement("div");
  const foodNameAndDescFlex = document.createElement("div");
  const foodNamePriceFlex = document.createElement("div");

  //SET ELEMENT ATTRIBUTES
  divParent.setAttribute("id", "FOOD-ITEM-HOLDER");
  divParent.setAttribute("class", "food-item-holder");
  foodImageElement.setAttribute("src", img);
  foodImageElement.setAttribute("class", "food-item-image");
  mainFoodFlex.setAttribute("class", "mainFoodFlex");
  foodNameAndDescFlex.setAttribute("class", "foodNameAndDescFlex");
  foodNamePriceFlex.setAttribute("class", "foodNamePriceFlex");
  foodDescriptionElement.setAttribute("class", "foodDescription");

  //APPEND/ADD ELEMENTS TO divParent/middlechild

  foodNameElement.innerText = foodName;
  foodPriceElement.innerText = foodPrice;
  foodDescriptionElement.innerText = foodDescription;

  foodNamePriceFlex.appendChild(foodNameElement);
  foodNamePriceFlex.appendChild(foodPriceElement);

  foodNameAndDescFlex.appendChild(foodNamePriceFlex);
  foodNameAndDescFlex.appendChild(foodDescriptionElement);

  mainFoodFlex.appendChild(foodImageElement);
  mainFoodFlex.appendChild(foodNameAndDescFlex);
  divParent.appendChild(mainFoodFlex);

  // divParent.appendChild(foodImageElement);

  // foodNameElement.innerText = foodName;
  // divParent.appendChild(foodNameElement);

  // foodPriceElement.innerText = foodPrice;
  // divParent.appendChild(foodPriceElement);

  // foodDescriptionElement.innerText = foodDescription;
  // divParent.appendChild(foodDescriptionElement);

  //append final element to page
  foodParentID.appendChild(divParent);
}

function addFoodMenuItem(category) {
  //gets matching items
  for (x = 0; x != Menu.length; x++) {
    data = Menu[x];
    if (data.MenuCatagory === category) {
      const name = Menu[x].FoodName;
      const price = Menu[x].Price;
      const description = Menu[x].Description;
      const foodImage = Menu[x].ImageLink;

      updateFoodItemHolder(name, price, description, foodImage);
    }
  }
}

function clickedMenuItem(item) {
  for (x = 0; x != Menu.length; x++) {
    data = Menu[x];
    if (data.MenuCatagory === item) {
      //console.log(data.FoodName);
    } else if (data.MenuCatagory === item) {
      //console.log(data.FoodName);
    }
  }
  addFoodMenuItem(item);
}

const taco = document.getElementById("TACOMENU");

taco.addEventListener("click", () => {
  burrito.style.fontSize = "24px";
  sides.style.fontSize = "24px";
  taco.style.fontSize = "30px";
  removeItems();
  clickedMenuItem("Tacos");
});

const burrito = document.getElementById("BURRITOMENU");

burrito.addEventListener("click", () => {
  taco.style.fontSize = "24x";
  sides.style.fontSize = "24px";
  burrito.style.fontSize = "30px";
  removeItems();
  clickedMenuItem("Burritos");
});

const sides = document.getElementById("SIDESMENU");

sides.addEventListener("click", () => {
  taco.style.fontSize = "24px";
  burrito.style.fontSize = "24px";
  sides.style.fontSize = "30px";
  removeItems();
  clickedMenuItem("Sides");
});
