import { Avatar, Row, Text } from "@nextui-org/react";


function UserBio({ bio }){
    return(
            <Row>
                <Text>
                    {bio}
                </Text>
            </Row>
    )
}

export default UserBio;


