import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ icon_name, name, description, image }) => {
    return (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon_name} size={24} color="#B23B23" style={{ marginRight: 10 }} />

                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {name}
                </Text>
            </View>

            <Text>
                {description}
            </Text>

            <Image
                source={image}
                style={{ width: 400, height: 500 }}
            />
        </View>
    );
};

export default Boat;
