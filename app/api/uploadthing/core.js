import { createUploadthing } from "uploadthing/next";
 
const f = createUploadthing();
 
const auth = (req) => ({ id: "fakeId" });
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "8MB" } })
    .middleware(async ({ req }) => {
      const user = await auth(req);
 
      if (!user) throw new Error("Unauthorized");
 
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
 
      return { uploadedBy: metadata.userId };
    }),
};
 
