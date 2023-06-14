import { Button, Card, Row, Spacer, Text } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import { useState } from "react";
import MemberData from "../components/LobbyDetailsPage/MemberData";
import WaitlistData from "../components/LobbyDetailsPage/WaitlistData";
import { Search } from "react-iconly";


function LobbyDetailsPage(){
    const [memberSelected, isMembersSelected] = useState(true);
    const [waitlistSelected, isWaitlistSelected] = useState(false);

    function memberBtnClick(){
        isMembersSelected(true);
        isWaitlistSelected(false);
    }
    function waitlistBtnClick(){
        isMembersSelected(false);
        isWaitlistSelected(true);
    }
    const lobby = {
        name: 'example lobby'
    }
    const members = [
        {
            id: 1,
            name: 'Bob',
            imgSrc: 'https://randomuser.me/api/portraits/women/63.jpg'
        },
        {
            id: 24,
            name: "BillyBobJunior",
            imgSrc: 'https://randomuser.me/api/portraits/women/60.jpg'
        },
        {
            id: 193,
            name: "BillyBobJuniorSeniorJunior",
            imgSrc: 'https://cdn-icons-png.flaticon.com/512/37/37943.png'
        }
    ]
    const waitlist = [
        {
            id: 36,
            name: 'Chaim',
            imgSrc: 'https://randomuser.me/api/portraits/men/28.jpg'
        },
        {
            id: 501,
            name: "Vader's Fist",
            imgSrc: 'https://static.wikia.nocookie.net/boba-fett-open-seasons/images/d/df/Vader%27s_right_hand_fist.jpg/revision/latest?cb=20190218050609'
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
                        <Row justify="center">
                            <Text h2>
                                {lobby.name}
                            </Text>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row justify="center">
                            <Button size='sm' color='gradient' ghost onClick={memberBtnClick}>Members</Button>
                            <Spacer x={1}/>
                            <Button size='sm' color='primary' bordered onClick={waitlistBtnClick}>Waitlist</Button>
                        </Row>
                        {memberSelected ? (
                            members.map(item => {
                                return <MemberData props={item}/>
                            })
                        ) : (waitlistSelected ? (waitlist.map(item=>{
                            return <WaitlistData props={item}/>
                        })) : (<></>)) }
                    </Card.Body>
                    <Card.Footer>
                        <Row align="center">
                            <Button size='sm' color='success' ghost>Chat</Button>
                            <Spacer x={0.25}/>
                            <Button size='xs' color='secondary' bordered>Home</Button>
                            <Spacer x={0.25}/>
                            <Button size='xs' color='secondary' bordered>+</Button>
                            <Spacer x={0.25}/>
                            <Button size='xs' color='secondary' bordered><Search set="light"/></Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </main>
        </>
    )
}

export default LobbyDetailsPage;