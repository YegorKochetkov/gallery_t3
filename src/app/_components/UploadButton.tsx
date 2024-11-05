"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

import { useUploadThing } from "~/lib/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

const UploadButtonSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
  );
}

const IsUploadingSVG = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  );
}

export const UploadButton = () => {
  const router = useRouter();
  const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      router.refresh();
    }
  });

  return (
    <div>
      <label
        htmlFor="upload-button"
        className={`cursor-pointer ${isUploading ? "pointer-events-none cursor-wait" : ""}`}
      >
        {isUploading ? <IsUploadingSVG /> : <UploadButtonSVG />}
      </label>
      <input
        id="upload-button"
        name="upload-button"
        type="file"
        className="cursor-pointer sr-only"
        {...inputProps}
      />
    </div >
  )
}
