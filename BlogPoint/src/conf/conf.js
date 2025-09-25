// why is this create bcz when you use env configuration , and use explicitly then most of the time app will be crash . so play the safe mode we have to use this folder

const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_BUCKET_ID),
}
export default conf