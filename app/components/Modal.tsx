
interface ModalProps{
    modalOpen: boolean;
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <label
          onClick={() => setModalOpen(false)}>
          </label>
          {children}
 
      </div>
    </div>
    );
};

export default Modal;