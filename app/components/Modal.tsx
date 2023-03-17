import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export function Modal({ children, isVisible, onClose }: Props) {
  const handleClose = () => {
    onClose();
  };

  const content = (
    <div
      onClick={handleClose}
      className="fixed left-0 bottom-0 right-0 z-10 flex h-full w-full items-center justify-center bg-black/25"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative">
        <button
          className="absolute -top-4 -right-4 z-20 flex h-4 w-4 items-center justify-center rounded-full bg-white p-4 text-xl text-violet-900 hover:bg-violet-900/75 hover:text-white"
          onClick={handleClose}
        >
          &#x2715;
        </button>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
  if (isVisible) return ReactDOM.createPortal(content, document.body);
  return null;
}
