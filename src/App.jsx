import NavbarStandardTemplate from "../src/components/Navbar/templates/NavbarStandardTemplate"
import Text from "./components/Texts";
import { Container } from "./components/Container";
import { Card } from "../src/components/Card/index"
import { Button } from "./components/Button";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer"

import imageTest from "./assets/images/addc.jpg"

function App() {
  return (
    <>
      <NavbarStandardTemplate />
      <Container.Root>
        <Container.Alternative>
          <Card.Home>
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Home>
          <Card.Home>
            <Card.Content>
              <Text.Heading>
                SLIDE
              </Text.Heading>
            </Card.Content>
          </Card.Home>
        </Container.Alternative>
      </Container.Root>
      <Container.Second style={{ backgroundColor: "lightgrey", flexDirection: "column", padding: "30px", gap: "25px", justifyContent: "space-around" }} >
        <Text.Heading>
          Lorem ipsum dolor sit amet
        </Text.Heading>
        <Hero.RootBackground src={imageTest} />
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
      </Container.Second>
      <Container.Root style={{ flexDirection: "column", padding: "30px", gap: "25px", minHeight: "750px", maxHeight: "750px" }} >
        <Text.Heading>
          Lorem ipsum dolor sit amet
        </Text.Heading>
        <Container.Alternative style={{ width: "100%", justifyContent: "space-between" }} >
          <Card.Mid>
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Mid>
          <Card.Mid>
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Mid>
          <Card.Mid>
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Mid>
        </Container.Alternative>
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
      </Container.Root>
      <Container.Root style={{ backgroundColor: "lightgrey", flexDirection: "column", padding: "30px", gap: "25px"}} >
        <Text.Heading>
          Lorem ipsum dolor sit amet
        </Text.Heading>
        <Hero.Root>
          <Hero.Content>
            <Text.Heading>
              Lorem ipsum dolor sit amet das xa ds Port
            </Text.Heading>
            <Text.Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, minus dolor ducimus maiores fugiat explicabo
            </Text.Paragraph>
          </Hero.Content>
          <Container.Alternative style={{ padding: "0" }}>
            <Hero.RootBackground src={imageTest} />
          </Container.Alternative>
        </Hero.Root>
       <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
        <Container.Alternative style={{ height: "100%", margin: "0", justifyContent: "space-around" }}>
          <div style={{ width: "100%", height: "140px", backgroundColor: "grey" }}></div>
          <div style={{ width: "100%", height: "140px", backgroundColor: "grey" }}></div>
          <div style={{ width: "100%", height: "140px", backgroundColor: "grey" }}></div>
        </Container.Alternative>
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
        <Text.SmallText style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium recusandae distinctio ab doloremque inventore iste quaerat quidem optio, quia minus ipsa, placeat libero aperiam mollitia iure dol
        </Text.SmallText>
      </Container.Root>
      <Footer.Root>
        <Text.BigText>
          Logo
        </Text.BigText>
        <Text.Paragraph style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit
        </Text.Paragraph>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Text.Paragraph>
            Informações
          </Text.Paragraph>
          <Text.Paragraph>
            Informações
          </Text.Paragraph>

        </div>
      </Footer.Root>
    </>
  );
}

export default App;

