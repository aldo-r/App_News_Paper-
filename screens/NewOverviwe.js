import { StyleSheet, Text, View } from 'react-native'
import { Appbar,} from 'react-native-paper';
import React from 'react'

const NewOverviwe = () =>  {
    return (
        <View>
            <Appbar.Header >
                <Appbar.Content title="NewOverviws" />
            </Appbar.Header>
        </View>
    )
}

export default NewOverviwe;

const styles = StyleSheet.create({
    continue: {
        flex: 1,
    },
    filterContener:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginVertical:10,
    }
});