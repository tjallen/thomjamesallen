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
    <div className="fixed top-0 left-0 bottom-0 right-0 z-10 flex h-full w-full items-center justify-center bg-black/25">
      <div className="relative">
        <button
          className="absolute top-0 right-0 z-20 text-3xl text-white"
          onClick={handleClose}
        >
          &#10006;
        </button>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
  if (isVisible) return ReactDOM.createPortal(content, document.body);
  return null;
}
