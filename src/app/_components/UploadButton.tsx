"use client";
import { Upload, ClockArrowUp, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useUploadThing } from "~/lib/uploadthing";
import { buttonVariants } from '~/components/ui/button';
import { toast } from 'sonner';
import { usePostHog } from 'posthog-js/react';

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    await $ut.startUpload(selectedFiles);

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
  const postHog = usePostHog();

  const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
    onUploadBegin(fileName) {
      postHog.capture("upload begin");
      toast(
        <p className="flex items-center gap-2 overflow-hidden">
          <Loader className="animate-spinner" />
          <span className="min-w-max">Uploading</span>
          <b className="truncate">{fileName}</b>
        </p>, {
        id: "upload-begin",
        duration: 100000,
      })
    },
    onUploadError(e) {
      postHog.capture("upload error");
      toast.dismiss("upload-begin");
      toast.error(e.message);
    },
    onClientUploadComplete() {
      postHog.capture("upload complete");
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
