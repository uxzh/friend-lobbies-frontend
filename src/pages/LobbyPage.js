import { Button, Card, Image, Row, Spacer, Text } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import LobbyTitle from "../components/LobbyPage/LobbyTitle";
import LobbyDetails from "../components/LobbyPage/LobbyDetails";
import LobbyMessage from "../components/LobbyPage/LobbyMessage";



function LobbyPage(){
    const lobby={
        name: 'example lobby',
        lobbyCreator: 'billybobjuniorseniorjunior',
        imgUrl: 'https://d248k8q1c80cf8.cloudfront.net/WK_Mitsui_New_York_USA_0002_3_2_0a7bdc467e.jpg',
        summary: 'This is the lobby experience. We should probably limit the amount of words/letters we can use for this section',
        categories: [
            '#example', '#lobby', '#stock', '#testing'
        ]
    }
    const messages = [
        {
            user: 'billybobjunior',
            imgSrc: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            message: 'Heyo Everybody. We are the lobby checking group and we are here to check lobbies. Anyone interested?'
        },
        {
            user: "mysterym111",
            imgSrc: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            message: "Dude, we are only an example! No one is going to see this!"
        },
        {
            user: "ExampleBro",
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/37/37943.png',
            message: "Yeah man! Its cool and all that you're excited, but chillax man. We are a temporary example only."
        }
    ]
    
    return(
        <>
            <header>
                <TopNavbar/>
            </header>
            <main>
                <Card>
                    <Card.Header>
                        <LobbyTitle lobbyName={lobby.name}/>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <LobbyDetails imgUrl={lobby.imgUrl} summary={lobby.summary} categories={lobby.categories}/>
                        <Spacer y={1}/>
                        <Card.Divider/>
                        <Spacer y={1}/>
                        {
                            messages.map((item) => {
                                return <LobbyMessage props={item}/>
                            })
                        }
                    </Card.Body>
                    <Card.Footer>
                        <Button ghost color='secondary'>Message</Button>
                        <Spacer x={0.5}/>
                        <Button color='gradient'>+ Join Lobby</Button>
                    </Card.Footer>
                </Card>
            </main>
            <footer>
                <Spacer y={2}/>
            </footer>
        </>
    )
}

export default LobbyPage;