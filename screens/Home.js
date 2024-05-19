import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar, Chip, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const categories = [
    "top",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health"
];

const API_KEY = "pub_44379cba223bdc9c105c57f3f3a03248cf8ee";

const HomeScreen = () => {
    const [newsData, setNewsData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const navigation = useNavigation();

    const handleSelect = (val) => {
        setSelectedCategory((prev) =>
            prev.includes(val) ? prev.filter(cat => cat !== val) : [...prev, val]
        );
    };

    const handlePress = async () => {
        const baseUrl = 'https://newsdata.io/api/1/news';
        const apiKey = `apikey=${API_KEY}`;
        const country = 'country=id';
        const language = 'language=id';
        const categoriesParam = selectedCategory.length > 0 ? `&category=${selectedCategory.join()}` : '';

        const url = `${baseUrl}?${apiKey}&${country}&${language}${categoriesParam}`;
        console.log(url);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setNewsData(data.results || []);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Home" />
            </Appbar.Header>
            <View style={styles.filterContainer}>
                {categories.map((cat) => (
                    <Chip
                        key={cat}
                        mode='outlined'
                        style={styles.chipItem}
                        textStyle={{ fontWeight: '400', color: 'black', padding: 1 }}
                        showSelectedOverlay
                        selected={selectedCategory.includes(cat)}
                        onPress={() => handleSelect(cat)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Chip>
                ))}
                <Button
                    style={styles.button}
                    labelStyle={{ fontSize: 14, margin: 'auto' }}
                    icon={'sync'}
                    onPress={handlePress}
                >
                    Refresh
                </Button>
            </View>
            <ScrollView>
                {newsData.map((news, index) => (
                    <Card key={index} style={styles.card}>
                        <Card.Cover source={{ uri: news.image_url }} />
                        <Card.Content>
                            <Title>{news.title}</Title>
                            <Paragraph>{news.description}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('NewsDetail', { news })}>
                                Read More
                            </Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filterContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
    },
    chipItem: {
        marginHorizontal: 3,
        marginVertical: 5,
    },
    button: {
        maxWidth: 400,
        padding: 0,
        maxHeight: 40,
    },
    card: {
        margin: 10,
    },
});
