window.onload = function (){
// Our garden
  let garden = { 
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 200,

    /*grass object */
    grass: {
      // The color of the grass (background)
      grassColor: {
        r: 120,
        g: 180,
        b: 120,
      },
      //the grass element
      grassDiv: document.createElement("div"),
    },

    /*sky object */
    sky: {
      // The color of the sky (background)
      skyColor: {
        r: 83,
        g: 154,
        b: 240,
      },
      //the sky element
      skyDiv: document.createElement("div"),
    },

    /*sun object */
    sun: {
      sunColor: {
        r: 240,
        g: 206,
        b: 83,
      },
      //the sun element
      sunDiv: document.createElement("div"),
    },
  };

  function createAndRenderTheGarden(){
    // Sky
    garden.sky.skyDiv.classList.add("sky");
    garden.sky.skyDiv.style.background = `rgb(${garden.sky.skyColor.r}, ${garden.sky.skyColor.g}, ${garden.sky.skyColor.b})`;
    document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

    // Sun - IN the sky
    garden.sun.sunDiv.classList.add("sun");
    garden.sun.sunDiv.style.background = `rgb(${garden.sun.sunColor.r}, ${garden.sun.sunColor.g}, ${garden.sun.sunColor.b})`;
    garden.sky.skyDiv.appendChild(garden.sun.sunDiv);

    // Grass
    garden.grass.grassDiv.classList.add("grass");
    garden.grass.grassDiv.style.background = `rgb(${garden.grass.grassColor.r}, ${garden.grass.grassColor.g}, ${garden.grass.grassColor.b})`;
    document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);
  }

  function createFlower() {
    let flower = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * (window.innerHeight - 280) + 280,
      stemLength: 80 + Math.random() * 60,
      stemThickness: 3,
      stemColor: {
        r: 34,
        g: 139,
        b: 34,
      },
      petalColor: {
        r: 255,
        g: 192,
        b: 203,
      },
      flowerStemDiv: document.createElement("div"),
      flowerPetalDiv: document.createElement("div"),
    };
    return flower;
  }

  function renderFlower(flower) {
    // Render stem
    flower.flowerStemDiv.classList.add("flower");
    flower.flowerStemDiv.style.width = flower.stemThickness+"px";
    flower.flowerStemDiv.style.height = flower.stemLength+"px";
    flower.flowerStemDiv.style.background = `rgb(${flower.stemColor.r}, ${flower.stemColor.g}, ${flower.stemColor.b})`;
    flower.flowerStemDiv.style.left = flower.x+"px";
    flower.flowerStemDiv.style.top = flower.y-flower.stemLength+"px";
    flower.flowerStemDiv.style.position = "absolute";

    // Render petals/head
    flower.flowerPetalDiv.style.width = "30px";
    flower.flowerPetalDiv.style.height = "30px";
    flower.flowerPetalDiv.style.borderRadius = "50%";
    flower.flowerPetalDiv.style.background = `rgb(${flower.petalColor.r}, ${flower.petalColor.g}, ${flower.petalColor.b})`;
    flower.flowerPetalDiv.style.position = "absolute";
    flower.flowerPetalDiv.style.left = flower.x - 15+"px";
    flower.flowerPetalDiv.style.top = flower.y - flower.stemLength - 15+"px";

    document.getElementsByClassName("grass")[0].appendChild(flower.flowerStemDiv);
    document.getElementsByClassName("grass")[0].appendChild(flower.flowerPetalDiv);
  }

  createAndRenderTheGarden();

  let first_flower = createFlower();
  renderFlower(first_flower);
  for (let i = 0; i < garden.numFlowers; i++) {
          garden.flowers.push(createFlower());
    }
   
     for (let i =0; i< garden.flowers.length; i++){
       renderFlower(garden.flowers[i]);
  
     }
}