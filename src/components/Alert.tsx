interface Props {
  state: string;
  onClick: () => void;
}

const Alert = ({ state, onClick }: Props) => {
  return (
    <div className={state} role="alert">
      <strong>Warning!</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Alert;
