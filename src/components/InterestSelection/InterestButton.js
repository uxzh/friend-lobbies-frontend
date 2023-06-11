import { Card, Row, Text } from "@nextui-org/react";


function InterestButton(props){
    const {interest} = props.props
    return(
        <Card 
            variant="flat"
            isPressable
            // css={{width: 78, height: 78}}
        >
            <Card.Body>
                <Row justify="center" align="center">
                    <Text h6>
                            {interest}
                    </Text>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default InterestButton;