import { Modal, View } from 'react-native';
import CustomButton from '../../../../../../components/Button/CustomButton';
import { strings } from '../../../../../../locales/i18n';
import WeightPicker from '../../../components/WeightPicker/WeightPicker';
import styles from './weightModalStyles';
import { Control, UseFormHandleSubmit } from 'react-hook-form';

interface WeightModalProps {
  visible: boolean;
  onClose: () => void;
  control: Control<
    {
      weight: string;
    },
    any,
    {
      weight: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      weight: string;
    },
    {
      weight: string;
    }
  >;
  onSubmit: (formData: { weight: string }) => Promise<void>;
}
const WeightModal = ({
  visible,
  onClose,
  control,
  handleSubmit,
  onSubmit
}: WeightModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <WeightPicker control={control} />
          <View style={styles.buttonContainer}>
            <CustomButton
              title={strings('actions.cancel')}
              textStyle={styles.cancelButtonText}
              ButtonProps={styles.cancelButton}
              handlePress={onClose}
            />
            <CustomButton
              title={strings('actions.save')}
              textStyle={styles.buttonText}
              ButtonProps={styles.Button}
              handlePress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WeightModal;
