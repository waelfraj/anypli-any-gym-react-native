import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Member } from '../../../../../../models/Member';
import { styles } from './detailsAppointmentStyles';

interface DetailsAppointmentProps {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  event: any;
}

const DetailsAppointment: React.FC<DetailsAppointmentProps> = ({
  isVisible,
  setVisible,
  event
}) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>Details Appointment</Text>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Title</Text>
              <Text>{event?.title}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Category</Text>
              <Text>{event?.summary}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Room</Text>
              <Text>{event?.room}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Coach</Text>
              <Text>{event?.coach}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Heure</Text>
              <View style={styles.row}>
                <Text>
                  {event?.start.getHours()}:{event?.start.getMinutes()}
                </Text>
                <Text style={styles.dateSeparator}>{'===>'}</Text>
                <Text>
                  {event?.end.getHours()}:{event?.end.getMinutes()}
                </Text>
              </View>
            </View>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Max participants</Text>
              <Text>{event?.nbrP}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.subTitle}>Members Inscrits</Text>
              {event?.member && event.member.length > 0 ? (
                event.member.map((element: Member, index: number) => (
                  <Text key={index}>{element.user.username}</Text>
                ))
              ) : (
                <Text>Aucun membre inscrit</Text>
              )}
            </View>
            {
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setVisible(false)}>
                <Text style={styles.textStyle}>Fermer</Text>
              </TouchableOpacity>
            }
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default DetailsAppointment;
