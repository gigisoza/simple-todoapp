import React from "react";

interface Props {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

export default function Modal({ modalOpen, setModalOpen, children }: Props) {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          x
        </label>
        {children}
      </div>
    </div>
  );
}
