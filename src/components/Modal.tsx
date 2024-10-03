"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      data-modal
      className="relative place-items-center grid bg-zinc-900/70 p-12 w-screen h-screen text-gray-200 overflow-clip"
      onClose={onDismiss}
    >
      {/* <div className="relative text-gray-200"> */}
      {/* <div className="relative flex lg:flex-row flex-col gap-6 bg-green-900/70 m-12 lg:max-h-[80vh] text-gray-200"> */}
      {children}
      <button onClick={onDismiss} className="top-4 right-4 absolute bg-gray-300 hover:bg-gray-200 px-2 py-1 rounded text-black">
        Close
      </button>
      {/* </div> */}
    </dialog >,
    document.getElementById("modal-root")!
  )
}
