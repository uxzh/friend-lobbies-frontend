import { Avatar, Card, Row, Spacer, Text } from "@nextui-org/react";
import { MoreCircle } from "react-iconly";



function WaitlistData(props){
    const {id, name, imgSrc} = props.props;

    return(
        <>
            <Spacer y={0.5}/>
            <Row align="center" justify='space-between'>
                <Row align="center">
                    <Avatar size='xl' src={imgSrc} color="secondary" squared/>
                    <Text style={{marginLeft: "1rem", lineHeight: 1.2, marginTop: 8}}>
                        <strong>{name}</strong>
                    </Text>
                </Row>
                <MoreCircle set="light" color='lightgrey'/>
            </Row>
            <Spacer y={0.5}/>
            <Card.Divider/>    
        </>
    )
}

export default WaitlistData;