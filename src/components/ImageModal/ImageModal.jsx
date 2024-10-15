import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ModalImage = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
      <img src={imageUrl} alt='Large' className={styles.image} />
    </Modal>
  );
};

export default ModalImage;
