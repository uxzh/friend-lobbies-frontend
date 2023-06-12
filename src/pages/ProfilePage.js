import { Button, Card, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import UserDetails from "../components/ProfilePage/UserDetails";
import '../styles/Main.css';
import UserBio from "../components/ProfilePage/UserBio";
import InterestButton from "../components/InterestSelection/InterestButton";



function ProfilePage(){
    const examplesInterests = [
        {
            interest: "Reading"
        },
        {
            interest: "Games"
        },
        {
            interest: "Cinema"
        }   
    ]
    return(
        <>
            <header>
                <TopNavbar />
            </header>
            <main>
                <Container sm>
                    <Card css={{ $$cardColor: "white" }}>
                        <Card.Header>
                            <UserDetails
                                imgSrc={
                                    "https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-512"
                                  }
                                username={"Aviad the King"}
                            />
                        </Card.Header>
                        <Card.Body>
                            <UserBio bio={`This is the user's bio. Here you can see a small section of text that the user decided on for friends and lobby members to see.`}/>
                            <Spacer y={1}/>
                            <Row>
                                <Spacer x={1}/>
                                <Button 
                                    size='xs'
                                    color="success"
                                    >
                                        + Connect
                                </Button>
                                <Spacer x={1}/>
                                <Button 
                                    size='xs'
                                    color='secondary'
                                    ghost
                                    >
                                        Message
                                </Button>
                            </Row>
                            <Spacer y={1}/>
                            <Card.Divider/>
                            <Spacer y={1}/>
                            <Row>
                                <Text h4 size="$xl" style={{ marginTop: 8}}>
                                    Interests:
                                </Text>
                            </Row>
                            <Grid.Container justify="center" gap={1} wrap="wrap">
                                {
                                    examplesInterests.map((item, index)=>{
                                        return (
                                        <Grid xs alignItems="center" alignContent="center">
                                            <InterestButton key={index} props={item}/>
                                        </Grid>
                                        )})
                                }
                            </Grid.Container>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </>
    )
}

export default ProfilePage;