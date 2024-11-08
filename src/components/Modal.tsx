"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Minimize2 } from "lucide-react";

import { Button } from "./ui/button";

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
      className="bg-transparent px-7 py-14 w-screen h-screen text-gray-200 overflow-x-clip"
      onClose={onDismiss}
    >
      <Button
        onClick={onDismiss}
        autoFocus
        size="icon"
        className="top-3 right-3 absolute"
        title="Close"
      >
        <span className="sr-only">Close modal</span>
        <Minimize2 />
      </Button>
      {children}
    </dialog >,
    document.getElementById("modal-root")!
  )
}
