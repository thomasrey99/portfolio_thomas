import Swal from "sweetalert2";
import { useEffect } from "react";

const MessageNotification = ({ title, type, setStatus }) => {
  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        toast.style.marginTop = "6rem";
      },
      didClose: () => {
        setStatus("");
      },
    });

    Toast.fire({
      icon: type,
      title: title,
    });
  }, [title, type, setStatus]);

  return null;
};

export default MessageNotification;
