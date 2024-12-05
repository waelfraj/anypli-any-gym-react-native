import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { EditProfilRequest } from '../../../../../models/Staff';

export interface EditProfilProps {
  control: Control<EditProfilRequest, EditProfilRequest>;
  handleSubmit: UseFormHandleSubmit<EditProfilRequest, EditProfilRequest>;
  errors: FieldErrors<EditProfilRequest>;
  onSubmit: (formData: EditProfilRequest) => Promise<void>;
  isSubmitted: boolean;
}
