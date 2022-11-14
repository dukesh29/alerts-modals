import React from 'react';

interface Props {
  type:string;
  label:string;
  makeBtn:React.MouseEventHandler;
}

const Buttons:React.FC<Props> = ({type,label,makeBtn}) => {
  const btnClassName = `btn btn-${type}`;
  return (
    <>
      <button type="button" className={btnClassName} onClick={makeBtn}>{label}</button>
    </>
  );
};

export default Buttons;