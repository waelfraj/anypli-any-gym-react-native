export interface Popup {
  isVisible: boolean;
  title: string;
  message: string;
  cancelText: string;
  cancelCallback?: any;
  confirmText?: string | null;
  confirmCallback?: any;
  type?: string | null;
}
