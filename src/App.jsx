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
      <Container.Root style={{ minHeight: "750px", maxHeight: "750px"  }}>
        <Container.Alternative>
          <Card.Container style={{ backgroundColor: "lightgrey", minHeight: "650px", maxHeight: "650px" }} >
          <Card.Content>
            <Text.Heading>
              Lorem ipsum dolor
            </Text.Heading>
            <Text.Heading style={{ color: "grey" }}>
              Lorem ipsum dolor
            </Text.Heading>
          </Card.Content>
        </Card.Container>
        <Card.Container style={{ backgroundColor: "lightgrey", minHeight: "650px", maxHeight: "650px" }} >
          <Card.Content>
            <Text.Heading>
              SLIDE
            </Text.Heading>
          </Card.Content>
        </Card.Container>
        </Container.Alternative>
      </Container.Root>
      <Container.Root style={{ backgroundColor: "lightgrey", flexDirection: "column", padding: "30px", gap: "25px" }} >
        <Text.Heading>
          Lorem ipsum dolor sit amet
        </Text.Heading>
        <Card.Content style={{ backgroundImage: `url(${imageTest})`, width: "100%"}}>
        </Card.Content>
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
      </Container.Root>
      <Container.Root style={{ flexDirection: "column", padding: "30px", gap: "25px", minHeight: "750px", maxHeight: "750px" }} >
        <Text.Heading>
          Lorem ipsum dolor sit amet
        </Text.Heading>
        <Container.Alternative style={{ width: "100%", justifyContent: "space-between", paddingLeft: "0", paddingRight: "0" }} >
          <Card.Container style={{ backgroundColor: "lightgrey", minHeight: "550px", maxHeight: "550px" }} >
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Container>
          <Card.Container style={{ backgroundColor: "lightgrey", minHeight: "550px", maxHeight: "550px" }} >
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Container>
          <Card.Container style={{ backgroundColor: "lightgrey", minHeight: "550px", maxHeight: "550px" }} >
            <Card.Content>
              <Text.Heading>
                Lorem ipsum dolor
              </Text.Heading>
              <Text.Heading style={{ color: "grey" }}>
                Lorem ipsum dolor
              </Text.Heading>
            </Card.Content>
          </Card.Container>
        </Container.Alternative>
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
      </Container.Root>
      <Container.Root style={{ backgroundColor: "lightgrey", flexDirection: "column", padding: "30px", gap: "25px" }} >
        <Text.Heading>
          Lorem ipsum dolor sit amet
        </Text.Heading>
        <Hero.Root>
          <Hero.Content>
            <Text.BigText>
              Lorem ipsum dolor sit amet das xa ds Port
            </Text.BigText>
            <Text.Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, minus dolor ducimus maiores fugiat explicabo
            </Text.Paragraph>
          </Hero.Content>
          <Hero.RootBackground src={imageTest} />
        </Hero.Root>
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
        <Container.Alternative style={{ height: "100%", padding: "0", gap: "15px", margin: "0", justifyContent: "space-between" }}>
          <div style={{ width: "385px", height: "140px", backgroundColor: "grey" }}></div>
          <div style={{ width: "385px", height: "140px", backgroundColor: "grey" }}></div>
          <div style={{ width: "385px", height: "140px", backgroundColor: "grey" }}></div>
        </Container.Alternative>
        <Button.Content>
          Lorem ipsum, dolor sit
        </Button.Content>
        <Text.SmallText style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium recusandae distinctio ab doloremque inventore iste quaerat quidem optio, quia minus ipsa, placeat libero aperiam mollitia iure dolor, qui alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae voluptate magnam, totam neque fugit beatae ipsa numquam id dolore laboriosam odit, praese.
        </Text.SmallText>
      </Container.Root>
      <Footer.Root>
        <Text.BigText>
          Logo
        </Text.BigText>
        <Text.Paragraph>
          Lorem ipsum dolor sit
        </Text.Paragraph>
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
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

