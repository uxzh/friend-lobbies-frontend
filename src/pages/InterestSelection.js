import { Card, Container, Grid, Row, Text } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import InterestButton from "../components/InterestSelection/InterestButton";

import interests from '../data/interest_selection.json'


function InterestSelection(){
    const exampleText = 'Example Text'
    return(
        <>
            <header>
                <TopNavbar />
            </header>
            <main>
                <Container sm>
                    <Card>
                        <Row justify="center">
                            <Text h4 size="$2xl" style={{ marginTop: 8}}>
                                Your Preferences
                            </Text>
                        </Row>
                        <Grid.Container justify="center" gap={1} wrap="wrap">
                            {
                                interests.map((item, index)=>{
                                    return (
                                    <Grid xs alignItems="center" alignContent="center">
                                        <InterestButton key={index} props={item}/>
                                    </Grid>
                                    )})
                            }
                        </Grid.Container>
                    </Card>
                </Container>
            </main>
        </>
    )
}

export default InterestSelection;