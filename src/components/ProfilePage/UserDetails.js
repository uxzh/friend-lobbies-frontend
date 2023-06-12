import { Avatar, Row, Text } from "@nextui-org/react";


function UserDetails({ username, imgSrc }){
    
    return(
        <>
            <Row justify="space-around" align="center">
                <Avatar size="xl" src={imgSrc} color="secondary"/>
                <Text style={{marginLeft:"1rem", marginTop: 8}}>
                    <strong className="profile-username">{username}</strong>
                </Text>
            </Row>
        </>
    )
}

export default UserDetails;


