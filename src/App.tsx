import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Buttons from "./components/Buttons/Buttons";
import Alerts from "./components/Alerts/Alerts";

function App() {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {
    setShowModal(false);
  };

  const Continue = () => {
    return alert('This is continue button!');
  };

  const buttons = [
    {type: 'primary', label: 'Continue', onClick: Continue, id: '1'},
    {type: 'danger', label: 'Close', onClick: cancel, id: '2'},
  ];

  const [alerts, setAlerts] = useState([
    {type: 'warning', id: '1', state: true},
    {type: 'success', id: '2', state: true},
    {type: 'danger', id: '3', state: true},
    {type: 'dark', id: '4', state: true},
    {type: 'primary', id: '5', state: true},
  ]);


  const showButtons = buttons.map(button => {
    return (<Buttons type={button.type} label={button.label} makeBtn={button.onClick} key={button.id}/>)
  });

  const onClose = (id: string) => {
    setAlerts(prevState => prevState.map(item => {
      return item.id === id ? {
        ...item,
        state: false,
      } : item
    }));
  };

  const showAllAlerts = () => {
    setAlerts(prevState => prevState.map(item => {
      return {
        ...item,
        state: true,
      }
    }));
  };

  const noDismiss = () => {
    return console.log('click on the button!');
  };

  const showAlerts = alerts.map(alert => {
    return (<Alerts noDismiss={noDismiss} type={alert.type} onDismiss={() => onClose(alert.id)} close={alert.state}
                    key={alert.id}><p className="m-0">This is a {alert.type} type alert!</p></Alerts>)
  });

  return (
    <div className="d-flex flex-column my-3 align-items-center">
      <Modal show={showModal} title={"Some kinda modal title"} onClose={cancel}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
        <div className="modal-footer">
          {showButtons}
        </div>
      </Modal>
      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show modal</button>
        <button className="btn btn-info" onClick={showAllAlerts}>Show alerts</button>
      </div>
      {showAlerts}
    </div>
  );
}

export default App;
