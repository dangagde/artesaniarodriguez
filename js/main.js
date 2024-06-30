
      var countDownDate = new Date("Apr 2, 2023 00:00:00").getTime();
      
      // Update the count down every 1 second
      var x = setInterval(function() {
      
        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("day").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("min").innerHTML = minutes
        document.getElementById("sec").innerHTML = seconds
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);


      ///////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////

      const capirotes = [
        {
            name: "Capirote de cartón",
            info: "Este capirote eirgunreingaiobugPWFBN",
            photo: "assets/capirotes/CapiroteCarton.jpg",
            precio: "10 €"
        },
    
        {
            name: "Capirote de rejilla",
            info: "Este capirote eirgunreingaiobugPWFBN",
            photo: "assets/capirotes/CapiroteReja.jpg",
            precio: "10 €"
        },
    
        {
            name: "Capirote de cartón con forro en el borde",
            info: "Este capirote eirgunreingaiobugPWFBN",
            photo: "assets/capirotes/CapiroteCartonBorde.jpg",
            precio: "10 €"
        },
        {
            name: "Capirote de cartón con forro en el borde e interior",
            info: "Este capirote eirgunreingaiobugPWFBN",
            photo: "assets/capirotes/CapiroteCartonTela.jpg",
            precio: "10 €"
        },
    
        {
            name: "Capirote de reja con forro exterior",
            info: "Este capirote eirgunreingaiobugPWFBN",
            photo: "assets/capirotes/CapiroteRejaBorde.jpg",
            precio: "10 €"
        },
    
        {
            name: "Capirote de reja con forro en el borde e interior",
            info: "Este capirote eirgunreingaiobugPWFBN",
            photo: "assets/capirotes/CapiroteRejaTela.jpg",
            precio: "10 €"
        }
    
    ];

    const nazarenos = [
      {
          name: "Cingulo",
          info: "Este capirote eirgunreingaiobugPWFBN",
          photo: "assets/nazareno/cingulo.jpg",
          precio: "10 €"
      },
  
      {
          name: "Guantes",
          info: "Este capirote eirgunreingaiobugPWFBN",
          photo: "assets/nazareno/guantes.jpg",
          precio: "10 €"
      },
  
      {
          name: "Guantes",
          info: "Este capirote eirgunreingaiobugPWFBN",
          photo: "assets/nazareno/guantes1.jpg",
          precio: "10 €"
      },
  
      {
          name: "Escudos",
          info: "Este capirote eirgunreingaiobugPWFBN",
          photo: "assets/nazareno/escudos.jpg",
          precio: "10 €"
      },
      
      {
          name: "Espartos",
          info: "Este capirote eirgunreingaiobugPWFBN",
          photo: "assets/nazareno/esparto.jpg",
          precio: "10 €"
      },
  
      {
          name: "Calzado",
          info: "Este capirote eirgunreingaiobugPWFBN",
          photo: "assets/nazareno/calzado.jpg",
          precio: "10 €"
      }
  
  ];

  const costaleros = [
    {
        name: "Costales",
        info: "Este capirote eirgunreingaiobugPWFBN",
        photo: "assets/costalero/costales.jpg",
        precio: "10 €"
    },
    
    {
        name: "Fajas",
        info: "Este capirote eirgunreingaiobugPWFBN",
        photo: "assets/costalero/fajas.jpg",
        precio: "10 €"
    },

    {
        name: "Calcetines",
        info: "Este capirote eirgunreingaiobugPWFBN",
        photo: "assets/costalero/calcetines.jpg",
        precio: "10 €"
    },

    {
        name: "Calzado",
        info: "Este capirote eirgunreingaiobugPWFBN",
        photo: "assets/costalero/calzado.jpg",
        precio: "10 €"
    },

    {
        name: "Calzado",
        info: "Este capirote eirgunreingaiobugPWFBN",
        photo: "assets/costalero/calzado1.jpg",
        precio: "10 €"
    }

];

const inciensos =[
  {
      name: "Incensarios",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/inciensos/incensario.jpg",
      precio: "10 €"
  },

  {
      name: "Pack incensario carbones e incienso",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/inciensos/pack.jpg",
      precio: "10 €"
  },

];

const regalos=[
  {
      name: "Muñecos",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/regalos/muñeco.jpg",
      precio: "10 €"
  },

  {
      name: "Escuditos",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/regalos/escuditos.jpg",
      precio: "10 €"
  },

  {
      name: "Medallitas",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/regalos/medallita.jpg",
      precio: "10 €"
  },

  {
      name: "Pulseras",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/regalos/pulseras.jpg",
      precio: "10 €"
  },

  {
      name: "Recortables",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/regalos/recortables.jpg",
      precio: "10 €"
  },

  {
      name: "Taza",
      info: "Este capirote eirgunreingaiobugPWFBN",
      photo: "assets/regalos/taza.jpg",
      precio: "10 €"
  }
];

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

    function fotosTemplate(foto){
      return `
  
  
  
      <div class="col-6 col-sm-3 col-md-6 col-lg-3">
      <div class="shadow-sm mt-3 border">
      <!-- Card-->
          <div class="row  mt-0 text-center">
          <img src="${foto.photo}" alt="" class="img-fluid rounded d-block mx-auto">
          </div>
          <div class="card-body ">
          <h5> <a href="#" class="text-dark">${foto.name}</a></h5>
          <ul class="list-inline">
              <li class="list-inline-item m-0"><i class="text-success">${foto.precio}</i></li>
          </ul>
          </div>
  </div>
  </div>
             
          
  `
  }
  
  document.getElementById("render-capirotes").innerHTML=` ${capirotes.map(fotosTemplate).join('')}`
  document.getElementById("render-regalos").innerHTML=` ${regalos.map(fotosTemplate).join('')}`
  document.getElementById("render-nazarenos").innerHTML=` ${nazarenos.map(fotosTemplate).join('')}`
  document.getElementById("render-inciensos").innerHTML=` ${inciensos.map(fotosTemplate).join('')}`
  document.getElementById("render-costaleros").innerHTML=` ${costaleros.map(fotosTemplate).join('')}`
  
