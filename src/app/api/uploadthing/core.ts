import {createUploadthing, type FileRouter } from 'uploadthing/next'
const f = createUploadthing();

const handleAuth = () => {
    //TODO: User id, replace it
    const {userId} = {userId : "Hello world"}
    if(!userId) throw new Error("Unauthorised");
    return {userId};
}
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  moduleAttachment: f(["text", "video", "image", "pdf"]).
  middleware(()=> handleAuth()).
  onUploadComplete(()=>{}),
  profileImage: f(["image"]).
  middleware(()=> handleAuth()).
  onUploadComplete(()=>{}),
  moduleAssignment: f(["text", "pdf"]).
  middleware(()=> handleAuth()).
  onUploadComplete(()=>{}),
  studentSubmission: f(["text", "pdf", "image"]).
  middleware(()=> handleAuth()).
  onUploadComplete(()=>{}),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
