import Toast from './Toast';


export const removeToast = (toast) => {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

export const createToast = (
  type = 'error',
  msg = 'Error: Fail to implement!',
) => {
  const toastList = document.querySelector('.notifications');
  if (!toastList) {
    console.error('Element with class "notifications" not found.');
    return;
  }

  const toast = document.createElement('li');
  toast.className = `toast ${type}`;
  toast.innerHTML = Toast(type, msg);

  if (toastList) {
    toastList.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), 5000);
  } else {
    console.error('Element with class "notifications" not found.');
  }
};
