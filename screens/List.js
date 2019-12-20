import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ImageBackground, Image } from 'react-native';
const { width, height } = Dimensions.get('screen');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    rating: 4.3,
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ]
  }, {
    id: 2,
    user: {
      name: 'Lelia Chavez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    saved: true,
    location: 'Santorini, Greece',
    temperature: 34,
    title: 'Santorini',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    rating: 4.3,
    reviews: 3212,
    preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    ]
  }
]
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 36,
    paddingHorizontal: 36,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  articles: {

  },
  destinations: {},
  destination: {
    width: width - (36 * 2),
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 24,
    borderRadius: 12,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 24,
    bottom: -36,
    right: 36,
    left: 36,
    paddingHorizontal: 36,
    paddingVertical: 24,


  },
  recommended: {
    padding: 36,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  rating: {
    fontSize: 24,
    color: 'white'
  },
  shadow:{
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:6
    },
    shadowOpacity:0.1,
    shadowRadius:4,
    elevation:8
  }

});
class Articles extends Component {
  static navigationOptions = (navigator) => {
    return {
      header: (
        < View style={[styles.row, styles.header,
        ]} >
          <View>
            <Text>Search for place</Text>
            <Text style={{ fontSize: 24 }}>Destination</Text>
          </View>
          <View>
            <Text>Avatar</Text>
          </View>
        </View>
      )
    }
  }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => this.renderDestination(item)}
        />

      </View>
    )
  }
  renderDestination = item => {
    return (
      <ImageBackground
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: item.preview }}
        style={[styles.flex, styles.destination]}>
        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <View style={{ flex: 0 }}>
            <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          </View>
          <View style={[styles.column, { flex: 2, paddingHorizontal: 18 }]}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.user.name}</Text>
            <Text style={{ color: 'white' }}>{item.location}</Text>
          </View>
          <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>

        </View>
        <View style={[styles.column, styles.destinationInfo,styles.shadow]}>
          <Text>{item.title}</Text>
          <Text>Greece Description</Text>
        </View>
      </ImageBackground>
    )
  }
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <Text>Recommended</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={[styles.flex, styles.articles]}>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </View>
    );
  }
}
Articles.defaultProps = {
  destinations: mocks
};
export default Articles;