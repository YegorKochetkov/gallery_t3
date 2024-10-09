"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.closest("body")?.classList.add("overflow-hidden");
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    dialogRef.current?.closest("body")?.classList.remove("overflow-hidden");
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      data-modal
      className="bg-transparent py-14 w-screen h-screen text-gray-200 overflow-x-clip"
      onClose={onDismiss}
    >
      <button
        onClick={onDismiss}
        className="top-3 right-3 absolute bg-gray-300 hover:bg-gray-200 px-2 py-1 rounded text-black autofocus"
      >
        Close
      </button>
      {children}
    </dialog >,
    document.getElementById("modal-root")!
  )
}
