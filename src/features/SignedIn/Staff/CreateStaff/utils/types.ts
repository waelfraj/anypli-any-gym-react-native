import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface CreateStaffProps {
  control: Control<
    {
      username: string;
      email?: string;
      phone?: string;
      address?: string;
      password?: string;
    },
    {
      username: string;
      email?: string;
      phone?: string;
      address?: string;
      password?: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      username: string;
      email?: string;
      phone?: string;
      address?: string;
      password?: string;
    },
    {
      username: string;
      email?: string;
      phone?: string;
      address?: string;
      password?: string;
    }
  >;
  errors: FieldErrors<{
    username: string;
    email?: string;
    phone?: string;
    address?: string;
    password?: string;
  }>;
  onSubmit: (formData: {
    username: string;
    email?: string;
    phone?: string;
    address?: string;
    password?: string;
  }) => Promise<void>;
  isSubmitted: boolean;
}
