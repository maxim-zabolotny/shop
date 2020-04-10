import React, {useState} from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';
const { Meta } = CardComponent;


export const Card = ({ el }) => {

    const [isFlipped, changeFlipped] = useState(false);
    const onChangeFlipped = () => {
        changeFlipped(!isFlipped) 
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={el.image} />}
                onClick = {onChangeFlipped}
            >
                <Meta title={el.name} />
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={'https://24tv.ua/resources/photos/news/640x360_DIR/201909/1210737.jpg?201909124619'} />}
                onClick = {onChangeFlipped}

            >
                <Meta title={'back side'} />
            </CardComponent>
        </ReactCardFlip>

    )
}


