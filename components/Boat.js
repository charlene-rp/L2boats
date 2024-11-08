import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ icon_name, name, description, image, backgroundColor, borderColor }) => {
    return (
        <View style={[styles.boatContainer, { backgroundColor, borderColor }]}>
            <View style={styles.headerContainer}>
                <Icon name={icon_name} size={24} color="#B23B23" style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>

            <Text style={styles.description}>{description}</Text>

            <Image
                source={image}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        borderWidth: 2,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 8,
    },
    boatName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
        lineHeight: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});

export default Boat;


