import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function OrderScreen() {
  const router = useRouter();
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');

  const handleOrder = async () => {
    const orderData = {
      sender_name: senderName,
      sender_phone: senderPhone,
      pickup_address: pickupAddress,
      receiver_name: receiverName,
      receiver_phone: receiverPhone,
      dropoff_address: dropoffAddress,
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/orders/', orderData);
      Alert.alert('Success', 'Order placed successfully!');
      router.push('/'); // Navigate back to home
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Delivery Details</Text>
      
      <TextInput style={styles.input} placeholder="Sender Name" value={senderName} onChangeText={setSenderName} />
      <TextInput style={styles.input} placeholder="Sender Phone" value={senderPhone} onChangeText={setSenderPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Pickup Address" value={pickupAddress} onChangeText={setPickupAddress} />

      <TextInput style={styles.input} placeholder="Receiver Name" value={receiverName} onChangeText={setReceiverName} />
      <TextInput style={styles.input} placeholder="Receiver Phone" value={receiverPhone} onChangeText={setReceiverPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Dropoff Address" value={dropoffAddress} onChangeText={setDropoffAddress} />

      <Button title="Confirm Order" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
