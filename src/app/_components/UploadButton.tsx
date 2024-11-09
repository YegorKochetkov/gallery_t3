"use client";
import { Upload, ClockArrowUp, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useUploadThing } from "~/lib/uploadthing";
import { buttonVariants } from '~/components/ui/button';
import { toast } from 'sonner';

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

export const UploadButton = () => {
  const router = useRouter();
  const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
    onUploadBegin(fileName) {
      toast(
        <p className="flex items-center gap-2"><Loader className="animate-spinner" />Uploading <b>{fileName}</b></p>, {
        id: "upload-begin",
        duration: 100000,
      })
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin");
      toast("Upload complete!", { id: "upload-complete" });
      router.refresh();
    }
  });

  return (
    <div>
      <label
        htmlFor="upload-button"
        className={`cursor-pointer ${isUploading ? "pointer-events-none cursor-wait" : ""} ${buttonVariants({ variant: "outline" })}`}
      >
        {isUploading ? <ClockArrowUp /> : <Upload />}
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
