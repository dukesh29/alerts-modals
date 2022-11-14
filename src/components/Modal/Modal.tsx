import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, title, onClose, children}) => {
  const displayFeatures:{} = {cursor: 'pointer', textAlign:'center', width:'25px', height:'25px', borderRadius: "50%"};

  return (
    <>
      <Backdrop show={show}/>
      <div className="modal show" style={{display: show ? "block" : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <span onClick={onClose}
                    style={displayFeatures}>X
              </span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;