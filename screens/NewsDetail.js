import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const NewsDetail = ({ route }) => {
    const { news } = route.params;

    return (
        <View style={styles.container}>
            <Card>
                <Card.Cover source={{ uri: news.image_url }} />
                <Card.Content>
                    <Title>{news.title}</Title>
                    <Paragraph>{news.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={() => console.log(news.link)}>Read More</Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default NewsDetail;
