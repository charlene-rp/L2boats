import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Boat from './components/Boat';

const AllBoats = () => {
  return (
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
            GetABoat - For Sale
          </Text>
        </View>

        <Boat
            icon_name="sailboat"
            name="SEA RAY 500 SUNDANCER"
            description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            image={require('./img/sea_ray.jpg')}
        />
        <Boat
            icon_name="sailboat"
            name="FOUR WINNS HORIZON 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            image={require('./img/four_winns.jpg')}
        />
        <Boat
            icon_name="sailboat"
            name="FLIPPER 640 ST"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            image={require('./img/flipper.jpg')}
        />
        <Boat
            icon_name="sailboat"
            name="PRINCESS V48"
            description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            image={require('./img/princess.jpg')}
        />
        <Boat
            icon_name="sailboat"
            name="BAYLINER 175 BOWRIDER"
            description="TIts outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            image={require('./img/bayliner.jpg')}
        />
        <Boat
            icon_name="sailboat"
            name="FAIRLINE TARGA 47"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            image={require('./img/fairline.jpg')}
        />
      </ScrollView>
  );
};

export default AllBoats;

