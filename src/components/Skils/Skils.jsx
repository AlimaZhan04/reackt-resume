import Carousel from "react-bootstrap/Carousel";

function Skils() {
  return (
    <div>
      <center>
        <h1>My skils</h1>
      </center>
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ borderRadius: "50px" }}
              className="d-block w-75"
              src="https://media.proglib.io/wp-uploads/2019/03/html-output.jpg"
              alt="First slide"
            />
          </div>{" "}
          <Carousel.Caption>
            <h3>MY FIRST SKILL AT PROGRAMMING</h3>
            <p>
              HTML IS A REALLY ONE OF THE POPULAR COMPONENT IN A PROGRAMMING{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ borderRadius: "50px" }}
              className="d-block w-75"
              src="https://gbcdn.mrgcdn.ru/uploads/geekbrains/public/ckeditor_assets/pictures/8975/retina-5df8bc110901350173f8be719ce2ea1d.png"
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Ny second skill</h3>
            <p>
              I'M REALY HAPPY TO KNOW ABOUT CSS, BECOUSE THIS SKILL GIVE TO MY
              MOOD COLOR
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ borderRadius: "50px" }}
              className="d-block w-75"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqakebtmHYGcKoJxtM4BdnxOGAeyUP-dycCwgw3Ww4cRmSeZoOiOXX9m9j5czz6kEY7OE&usqp=CAU"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              AND ONE OF THE THE MOST COMLPECATED AND REALY PERFECT PROGRAMMING
              LANGUAGE JAVASCRIPT
            </h3>
            <p style={{ color: "black" }}>
              WITH THE HELP OF THIS LANGUAGE I CAN CREATE A COOL DYNAMYC SITE
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ borderRadius: "50px" }}
              className="d-block w-75"
              src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"
              alt="First slide"
            />
          </div>{" "}
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ borderRadius: "50px" }}
              className="d-block w-75"
              src="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/fbcd33859f5566908eabadc6cfb27228_hero.jpeg"
              alt="First slide"
            />
          </div>{" "}
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Skils;
