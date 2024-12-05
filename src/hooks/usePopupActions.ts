import { strings } from '../locales/i18n';
import { useLogoutMutation } from '../store/api/authApi';
import { logout } from '../store/slices/authSlice';
import { resetMemberSlice } from '../store/slices/memberSlice';
import { closePopup, openPopup, resetPopup } from '../store/slices/popupSlice';
import {
  retrieveToken,
  setRefreshToken,
  setTokenType
} from '../utils/helpers/useSensitiveInfo';
import { useAppDispatch } from './hooks';

type Callback = () => void;

export const usePopupActions = () => {
  const dispatch = useAppDispatch();
  const [logoutMutation] = useLogoutMutation();

  const showToManyAttemptsErrorPopup = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.authFailed'),
        message: strings('errors.tooManyAttempts'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showInvalidCredentialPopup = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.authFailed'),
        message: strings('errors.invalidCredentials'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showInvalidEmailPopup = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.email_title'),
        message: strings('errors.email_message'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showNetworkErrorPopup = (retryCallback: Callback) => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.connexionFailed'),
        message: strings('errors.serverErrorTimeout'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        },
        confirmText: strings('actions.retry'),
        confirmCallback: () => {
          retryCallback();
          dispatch(closePopup());
        }
      })
    );
  };

  const showPasswordSuccessPopup = (retryCallback: Callback) => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('forgetPassword.changePassword'),
        message: strings('forgetPassword.passwordChangedsuccessfully'),
        confirmText: strings('actions.login'),
        confirmCallback: () => {
          retryCallback();
          dispatch(closePopup());
        },
        type: 'success',
        cancelText: strings('actions.cancel')
      })
    );
  };

  const showLoadingError = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.loading_title'),
        message: strings('errors.loading_message'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showInternalServerError = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.internal_server_title'),
        message: strings('errors.internal_server_message'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showCreatedSuccess = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.createdSuccessfully'),
        message: strings('success.staffCreated'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const logoutAndClosePopup = async () => {
    const token = await retrieveToken();
    dispatch(closePopup());
    if (token) {
      await logoutMutation(token);
      setRefreshToken('');
      setTokenType('');
      dispatch(logout());
      dispatch(resetMemberSlice());
      dispatch(resetPopup());
    }
    dispatch(closePopup());
  };

  const showUnauthenticatedError = async () => {
    dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.unauthenticated_title'),
        message: strings('errors.unauthenticated_message'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        },
        confirmText: strings('actions.logout'),
        confirmCallback: logoutAndClosePopup
      })
    );
  };

  const showActivateSuccess = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.activateTitle'),
        message: strings('success.activateDescription'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showDesactivatedSuccess = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.desactivateTitle'),
        message: strings('success.desactivateDescription'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showAddedSuccess = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.addTitle'),
        message: strings('success.addDescription'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showUpdatedSuccess = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.updatedTitle'),
        message: strings('success.updatedDescription'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showParticipatedSuccessfully = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.participateTitle'),
        message: strings('success.participateDescription'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showDeletedSuccessfully = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('success.deleteTitleSuccess'),
        message: strings('success.deleteDescriptionSuccess'),
        cancelText: strings('success.ok'),
        type: 'success',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showImpossibleDeleteAdminPopup = () => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('errors.impossibleDeleteAdminTitle'),
        message: strings('errors.impossibleDeleteAdminDescription'),
        cancelText: strings('success.ok'),
        type: 'error',
        cancelCallback: () => {
          dispatch(closePopup());
        }
      })
    );
  };

  const showDeleteConfirmationPopup = (
    confirmCallback: (id: string | undefined) => Promise<void>
  ) => {
    return dispatch(
      openPopup({
        isVisible: true,
        title: strings('warning.deleteTitle'),
        message: strings('warning.deleteDescription'),
        cancelText: strings('actions.cancel'),
        cancelCallback: () => {
          dispatch(closePopup());
        },
        confirmText: strings('Delete'),
        confirmCallback: confirmCallback,
        type: 'warning'
      })
    );
  };

  return {
    showToManyAttemptsErrorPopup,
    showInvalidCredentialPopup,
    showNetworkErrorPopup,
    showPasswordSuccessPopup,
    showLoadingError,
    showCreatedSuccess,
    showUnauthenticatedError,
    showInternalServerError,
    showInvalidEmailPopup,
    showActivateSuccess,
    showDesactivatedSuccess,
    showDeletedSuccessfully,
    showDeleteConfirmationPopup,
    showImpossibleDeleteAdminPopup,
    showAddedSuccess,
    showUpdatedSuccess,
    showParticipatedSuccessfully
  };
};
