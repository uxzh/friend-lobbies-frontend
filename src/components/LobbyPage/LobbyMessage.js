import { Avatar, Card, Col, Row, Spacer, Text } from "@nextui-org/react";



function LobbyMessage(props){
    const { user, imgSrc, message } = props.props

    return(
        <Col>
            <Spacer y={0.5}/>
            <Row>
                <Avatar size='xl' src={imgSrc} color="secondary" squared/>
                <Text style={{marginLeft: "1rem", lineHeight: 1.2, marginTop: 8}}>
                    <strong>{user}</strong>
                    <br />
                    {message}
                </Text>
            </Row>
            <Spacer y={0.5}/>
            <Card.Divider/>
        </Col>
    )
}

export default LobbyMessage;