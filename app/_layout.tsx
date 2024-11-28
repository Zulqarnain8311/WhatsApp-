import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';


export default function RootLayout() {
  const DataFlat = [
    {
      id: '1',
      name: 'John Doe',
      message: 'Hey, how are you?',
      time: '10:30 AM',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      name: 'Jane Smith',
      message: 'Let\'s meet up later.',
      time: '09:15 AM',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: '3',
      name: 'Michael Brown',
      message: 'Don\'t forget the meeting.',
      time: '08:45 AM',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: '4',
      name: 'Emily Davis',
      message: 'Thanks for the help!',
      time: 'Yesterday',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: '5',
      name: 'Chris Johnson',
      message: 'Good morning!',
      time: 'Yesterday',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '6',
      name: 'Sarah Wilson',
      message: 'Where are we going?',
      time: 'Last week',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: '7',
      name: 'David Lee',
      message: 'Can you send the file?',
      time: 'Last week',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: '8',
      name: 'Laura Martinez',
      message: 'Let\'s catch up soon!',
      time: 'Last month',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: '9',
      name: 'James Taylor',
      message: 'What time are we meeting?',
      time: 'Last month',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: '10',
      name: 'Rachel Green',
      message: 'I will be there in 10 minutes.',
      time: '2 hours ago',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logobox}>
        <View style={styles.textbox}>
          <Text style={styles.logo}>WhatsApp</Text>
        </View>
        <View style={styles.iconbox}>
          <AntDesign name="camerao" size={20} color="black" />
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </View>
      </View>

      <View style={styles.ai}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ACYITFRHQ2E2ChSSP9amPBgYzNH5HsAmJA&s',
          }}
          style={styles.aiimage}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Ask Meta AI or Search"
          placeholderTextColor="gray"
        />
      </View>

      <FlatList
  data={DataFlat}
  renderItem={({ item }) => (
    <View style={styles.contactItem}>
      <Image source={{ uri: item.image}} style={styles.contactImage} />
      <View style={styles.textContainer}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactMessage}>{item.message}</Text>
      </View>
      <Text style={styles.contactTime}>{item.time}</Text>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logobox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 12,
  },
  textbox: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    color: 'rgb(49, 186, 15)',
    fontWeight: '600',
  },
  iconbox: {
    flexDirection: 'row',
    gap: 8,
  },
  ai: {
    height: 40,
    marginHorizontal: 12,
    borderRadius: 45,
    backgroundColor: 'rgb(237, 229, 227 )',
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  aiimage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  textinput: {
    flex: 1,
    fontSize: 15,
    height: 40,
    borderRadius: 45,
  },
  contactItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactMessage: {
    color: '#777',
  },
  contactTime: {
    color: '#aaa',
    fontSize: 12,
  },
});
