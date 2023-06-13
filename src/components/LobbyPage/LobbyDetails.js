import { Image, Row, Spacer, Text } from "@nextui-org/react"


function LobbyDetails({imgUrl, categories, summary}){

    return(
        <>
            <Image src={imgUrl}/>
            <Spacer y={0.5}/>
            <Text>
                {summary}
            </Text>
            <Row>
                {
                    categories.map((category)=>{
                        return <Text>{category}</Text>
                    })
                }
            </Row>
        </>
    )
}

export default LobbyDetails