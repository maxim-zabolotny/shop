import React from 'react';
import { Layout, Row, Col} from 'antd';
import {Card} from './Blocks'
const { Header, Footer, Sider, Content } = Layout;

const data = [
    {
        id: 1,
        name: 'Elon',
        image: 'https://24tv.ua/resources/photos/news/640x360_DIR/201909/1210737.jpg?201909124619'
    },


    {
        id: 4,
        name: 'Elon',
        image: 'https://i.guim.co.uk/img/media/13c0866968852ef980da67a40d377ce598970c5b/0_124_4800_2879/master/4800.jpg?width=620&quality=85&auto=format&fit=max&s=76f4a9e31294ca79d7b426dfd8487172'
    },
    {
        id: 5,
        name: 'Elon',
        image: 'https://cdn.mos.cms.futurecdn.net/8KCJoRXFAkWkRhBhZBHNpP-650-80.jpg'
    },
    {
        id: 6,
        name: 'Elon',
        image: 'https://regmedia.co.uk/2018/09/07/screenshot_musk_spliff.jpg?x=442&y=293&crop=1'
    },
]




export const ProductList = () => {
    const renderCard = (element) => {
        return (
            <Col span={4}>
                <Card el={element}/>
            </Col>

        )
    }

    return (
        <Layout style={styles.layOut}>
            <Header>Header</Header>
            <Content>
                <Row justify="space-around">
                    {data.map(el => renderCard(el))}
                </Row >
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

const styles = {
    layOut: {
        minHeigth: '600vh'
    }
}


