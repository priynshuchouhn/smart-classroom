'use client'

import { ourFileRouter } from "@/app/api/uploadthing/core"
import { UploadDropzone } from "@/lib/uploadthing"
import toast from "react-hot-toast";

interface FileUploadProps {
    onChange: (url: any) => void,
    endpoint: keyof typeof ourFileRouter;
}

function FileUpload({onChange, endpoint}: FileUploadProps) {
  return (
    <UploadDropzone 
        endpoint={endpoint}
        onClientUploadComplete={(res)=>{
            console.log("[Payload]",res?.[0])
            onChange(res?.[0])
        }}
        onUploadError={(error: Error)=> {
            toast.error(`${error?.message}`)
        }}
    />
  )
}

export default FileUpload
