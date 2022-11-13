import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancel = () => setShowModal(false);

  return (
    <div className="d-flex justify-content-center my-3">
      <Modal show={showModal} title={"Some kinda modal title"} onClose={cancel}>
        <div className="modal-body">
          This is modal content
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={cancel}>
            Cancel
          </button>
        </div>
      </Modal>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show</button>
    </div>
  );
}

export default App;
