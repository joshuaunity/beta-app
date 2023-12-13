import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';

export default function CurrentWeather() {
    return (
        <SafeAreaView style={styles.container}>


            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground source={require('../../assets/logo.jpg')} style={styles.Image}>



                </ImageBackground>
                
                <Feather name="sun" size={24} color="black" />
                <Text>Current Weather</Text>
                <Text>Temprature: 7</Text>
                <Text>Wind: 5</Text>
            </View>


            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 200,
        height: 200,
    }
});
