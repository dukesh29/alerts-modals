import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren{
  type: string;
  onDismiss: React.MouseEventHandler;
  noDismiss: React.MouseEventHandler;
  close: boolean;
}

const Alerts: React.FC<Props> = ({type, onDismiss, close, noDismiss, children}) => {

  const typeName = "alert alert-" + type + " text-center gap-1 align-items-center p-2";
  const displayState = {display: close ? "flex" : "none"};
  const onClickType = type !== "warning"? onDismiss : noDismiss;
  const btn = type === 'warning' ?
    <button type="button" className={"btn fs-6 btn-" + type} onClick={onDismiss}>X</button> : '';

  return (
    <div className={typeName} style={displayState} onClick={onClickType}>
      {children}
      {btn}
    </div>
  );
};

export default Alerts;