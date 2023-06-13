import { Row, Text } from "@nextui-org/react";
import { ChevronLeftCircle } from "react-iconly";


function LobbyTitle({lobbyName, returnFunction}){
    
    return(
        <Row >
            <ChevronLeftCircle set="bold" primaryColor="lightgrey"/>
            <Row justify="center">
                <Text h3>
                    {lobbyName}
                </Text>
            </Row>
        </Row>
    )
}

export default LobbyTitle;