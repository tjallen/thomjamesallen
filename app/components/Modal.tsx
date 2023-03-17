import ReactDOM from "react-dom";

interface Props {
  children: React.ReactElement;
  isVisible: boolean;
  onClose: () => void;
}

export function Modal({ children, isVisible, onClose }: Props) {
  const handleClose = () => {
    onClose();
  };
  const content = (
    <div className="absolute top-0 left-0 bottom-0 right-0 h-full w-full">
      <button onClick={handleClose}>close</button>
      {children}
    </div>
  );
  if (isVisible) return ReactDOM.createPortal(content, document.body);
  return null;
}
