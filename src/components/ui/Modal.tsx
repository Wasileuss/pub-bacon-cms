import { ReactNode } from "react";
import Button from "@/components/ui/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    editItem: string | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="modal-overlay absolute inset-0" onClick={handleClose}></div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <Button
                    variant="close"
                    className="absolute top-3 right-5 text-sm"
                    onClick={onClose}
                >
                    Close
                </Button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
