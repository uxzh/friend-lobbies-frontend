import { Button, Card, Input, Row, Spacer } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import { CloseSquare } from "react-iconly";
import { useState } from "react";



function LobbyCreation(){
    const [lobbyName, setLobbyName] = useState('');
    const [activity, setActivity] = useState('');
    const [categories, setCategories] = useState([]);
    const [location, setLocation] = useState('');
    const [size, setSize] = useState();
    const [time, setTime] = useState();

    return(
        <>
            <header>
                <TopNavbar/>
            </header>
            <main>
                <Card>
                    <Card.Header>
                        <Row  align="center">
                            <Button bordered size='xs'>
                                <CloseSquare set="curved" primaryColor="grey" secondaryColor="lightgrey"/>
                            </Button>
                            <Input
                                clearable
                                underlined
                                labelPlaceholder="Lobby Name"
                                size='xl'
                                width="360px"
                                animated={false}
                                value={lobbyName}
                                onChange={(e)=>{setLobbyName(e.target.value)}}
                            />
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Input
                                clearable
                                bordered
                                label="Activity"
                                size='lg'
                                
                                value={activity}
                                onChange={(e)=>{setActivity(e.target.value)}}
                            />
                            <Spacer x={0.5}/>
                            <Input
                                clearable
                                bordered
                                label="Location"
                                size='lg'

                                value={location}
                                onChange={(e)=>{setLocation(e.target.value)}}
                            />
                        </Row>
                        <Spacer y={0.5}/>
                        <Row>
                            <Input
                            clearable
                            bordered
                            label="Lobby Size"
                            size='lg'
                            type="number"
                            value={size}
                            onChange={(e)=>{setSize(e.target.value)}}
                            />
                            <Spacer x={0.5}/>
                            <Input
                                clearable
                                bordered
                                label="Time"
                                size="lg"
                                type="time"
                                value={time}
                                onChange={(e)=>{setTime(e.target.value)}}
                            />
                        </Row>

                    </Card.Body>
                    <Card.Footer>
                        <Row justify="center">
                            <Button color='gradient'>
                                Create Lobby
                            </Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </main>
        </>
    )
}

export default LobbyCreation;