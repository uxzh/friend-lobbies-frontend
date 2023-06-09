import { Card, Container, Row } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";

import UserInfo from "../components/Main/UserInfo";
import DisplayCategory from "../components/Main/DisplayCategory";
import CategoryName from "../components/Main/CategoryName";
import CategoryCardsBig from "../components/Main/CategoryCardsBig";
import CategoryCardsSmall from "../components/Main/CategoryCardsSmall";

import catCardBig from '../data/category_cards_big.json';
import catCardSmall from '../data/category_cards_small.json';

export default function Main() {

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Container sm>
          <Card css={{ $$cardColor: "white" }}>
            <Card.Body>
              <UserInfo
                imgSrc={
                  "https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-512"
                }
                username={"Aviad the King"}
              />
              <DisplayCategory />
              <CategoryName name={"Sports ⚽"} amount={4} />
              <Row className="horizontal-scroll-container">
                {
                  catCardBig.map((item, index)=>{
                    return <CategoryCardsBig key={index} props={item}/>})
                }
              </Row>
              <CategoryName name={"Cooking 🧑‍🍳"} amount={12} />
              <Row className="horizontal-scroll-container">
                {
                  catCardSmall.map((item, index)=>{
                    return <CategoryCardsSmall key={index} props={item}/>})
                }
              </Row>
              
            </Card.Body>
          </Card>
        </Container>
      </main>
    </>
  );
}
