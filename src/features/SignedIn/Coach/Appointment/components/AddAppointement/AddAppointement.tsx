import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import CustomTimePicker from '../CustomTimePicker/CustomTimePicker';
import { styles } from './addAppointementStyles';

interface AddAppointementProps {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  selectedDate: string;
}

const AddAppointement: React.FC<AddAppointementProps> = ({
  isVisible,
  setVisible,
  selectedDate
}) => {
  const [startTime, setStartTime] = useState({ hour: 0, minute: 0 });
  const [endTime, setEndTime] = useState({ hour: 0, minute: 0 });
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [room, setRoom] = useState('');

  const handleStartTimeChange = (time: { hour: number; minute: number }) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time: { hour: number; minute: number }) => {
    setEndTime(time);
  };

  const handleSave = () => {
    if (
      endTime.hour < startTime.hour ||
      (endTime.hour === startTime.hour && endTime.minute <= startTime.minute)
    ) {
      Alert.alert('Invalid Time', 'End time must be greater than start time.');
      return;
    }

    console.log(`Category: ${category}`);
    console.log(`Title: ${title}`);
    console.log(`Room: ${room}`);
    console.log(`Appointment Date: ${selectedDate}`);
    console.log(`Start Time: ${startTime.hour}:${startTime.minute}`);
    console.log(`End Time: ${endTime.hour}:${endTime.minute}`);
    setVisible(false);
  };

  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Add Appointment</Text>
          <View style={styles.input}>
            <Text>Title</Text>
            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.input}>
            <Text>Category</Text>
            <TextInput
              placeholder="Category"
              value={category}
              onChangeText={setCategory}
            />
          </View>
          <View style={styles.input}>
            <Text>Room</Text>
            <TextInput placeholder="Room" value={room} onChangeText={setRoom} />
          </View>

          <View style={styles.timeContainer}>
            <CustomTimePicker
              title="Start Time"
              handleTimeChange={handleStartTimeChange}
            />
            <CustomTimePicker
              title="End Time"
              handleTimeChange={handleEndTimeChange}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setVisible(false)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.textStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddAppointement;
