//DOC: Modal.jsx
// Description:
// The Modal component is a reusable React component that displays a modal dialog. It can be used for various purposes such as confirmation dialogs, alerts, or any other modal content. The content of the dialog, including buttons, is passed as children.

// Props:
// - isOpen: A boolean indicating whether the Modal is open.
// - children: The content to be displayed inside the dialog, including buttons.

// Usage Example:
// <Modal isOpen={isModalOpen}>
//   <p>Are you sure you want to delete this item?</p>
//   <div className="flex justify-center space-x-4">
//     <Button onClick={handleDelete} className="text-white bg-red-500">
//       Delete
//     </Button>
//     <Button onClick={() => setModalOpen(false)}>Cancel</Button>
//   </div>
// </Modal>

import React, { useRef } from 'react';
import { cn } from '../../../utils/cn';

export const Modal = ({ className, isOpen, children }) => {
  const dialogRef = useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        `p-4 text-center text-white rounded-lg shadow-lg bg-background transform transition-transform duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`,
        className
      )}
    >
      {children}
    </dialog>
  );
};
