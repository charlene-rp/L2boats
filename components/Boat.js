import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ icon_name, name, description, image }) => {
    return (
        <View style={{ padding: 10 }}>
            {/* Row for icon and name */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Icon */}
                <Icon name={icon_name} size={24} color="#B23B23" style={{ marginRight: 10 }} />

                {/* Name of the boat */}
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {name}
                </Text>
            </View>

            {/* Description of the boat */}
            <Text>
                {description}
            </Text>

            {/* Boat image */}
            <Image
                source={image}
                style={{ width: 400, height: 500 }}
            />
        </View>
    );
};

export default Boat;
