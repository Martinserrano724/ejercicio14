import React from "react";

const DettalleProducto = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-center"><strong>Pulpo ala Plancha</strong> </h1>
        <img
          src="https://i.blogs.es/f0476b/pulpo-a-la-plancha-pakus-futurobloguero/1366_2000.jpg"
          alt=""
          className="w-100"
        />
      </div>
      
      <div>
        <h3 className="text-center"><strong>Ingredientes</strong> </h3>
        <p>Para 3 personas</p>
        Pulpo cocido 3 tentáculos o patas Puré de patatas al gusto Dientes de
        ajo para la ajada 2 Pimentón dulce para la ajada Aceite de oliva virgen
        extra para la ajada, 4 cucharadas soperas Sal en escamas para servir
      </div>
      <div>
        <h3 className="text-center"><strong> Como hacer el pulpo ala plancha</strong></h3>
        <p>
          Tiempo total........<span><strong>10m</strong></span>
        </p>
        <p>
          Elaboracion ....... <span><strong>8m</strong></span>
        </p>
        <p>
          Coccion ........... <span><strong>2m</strong></span>
        </p>
      </div>
      <div>
        Partiendo de que tenemos un pulpo cocido, cortamos sus tentáculos y
        reservamos dos o tres para esta receta, dejando el resto para otras
        elaboraciones. Si vemos que algún tentáculo es más grueso, podemos
        cortarle por la mitad -longitudinalmente- con un cuchillo como se ve en
        la imagen. Ponemos una parrilla al fuego y dejamos que se caliente bien
        durante tres o cuatro minutos. Espolvoreamos con aceite de oliva virgen
        extra con ayuda de un spray o con una brocha de silicona. Ponemos los
        trozos de pulpo encima y dejamos que se cocinen a fuego vivo.
        Transcurridos cuatro minutos, damos la vuelta a los tentáculos, para que
        se doren también por la otra cara el mismo tiempo. Para ayudar a la
        cocción, podéis poner encima del pulpo algún peso de cocina, o un cazo,
        para que aumente la superficie de contacto con la parrilla. Con ese
        tiempo, el pulpo queda estupendo, jugoso por dentro y muy crujiente por
        fuera.
      </div>
    </div>
  );
};

export default DettalleProducto;
