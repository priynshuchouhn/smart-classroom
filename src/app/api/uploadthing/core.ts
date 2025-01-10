import {createUploadthing, type FileRouter } from 'uploadthing/next'
const f = createUploadthing();

const handleAuth = () => {
    //TODO: User id, replace it
    const {user_id} = {user_id : "Hello world"}
    if(!user_id) throw new Error("Unauthorised");
    return {user_id};
}
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseAttachment: f(["text", "video", "image", "pdf"]).
  middleware(()=> handleAuth()).
  onUploadComplete(()=>{}),
  profileImage: f(["image"]).
  middleware(()=> handleAuth()).
  onUploadComplete(()=>{})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
