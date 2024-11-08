import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Boat from './components/Boat';

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>GetABoat - For Sale</Text>
            </View>

            <Boat
                icon_name="sailboat"
                name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                image={require('./img/sea_ray.jpg')}
                backgroundColor="#e0f7fa"   // pastel cyan
                borderColor="#00acc1"
            />
            <Boat
                icon_name="sailboat"
                name="FOUR WINNS HORIZON 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                image={require('./img/four_winns.jpg')}
                backgroundColor="#e1bee7"  // pastel purple
                borderColor="#8e24aa"
            />
            <Boat
                icon_name="sailboat"
                name="FLIPPER 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                image={require('./img/flipper.jpg')}
                backgroundColor="#ffecb3"  // pastel yellow
                borderColor="#ffb300"
            />
            <Boat
                icon_name="sailboat"
                name="PRINCESS V48"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                image={require('./img/princess.jpg')}
                backgroundColor="#ffcdd2"
                borderColor="#e57373"
            />
            <Boat
                icon_name="sailboat"
                name="BAYLINER 175 BOWRIDER"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                image={require('./img/bayliner.jpg')}
                backgroundColor="#dcedc8"
                borderColor="#9ccc65"
            />
            <Boat
                icon_name="sailboat"
                name="FAIRLINE TARGA 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                image={require('./img/fairline.jpg')}
                backgroundColor="#bbdefb"
                borderColor="#42a5f5"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    },
    header: {
        padding: 20,
        backgroundColor: '#4c6ef5',
        borderBottomWidth: 2,
        borderBottomColor: '#cccccc',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default AllBoats;


