import { bootstrapCameraKit, CameraKit } from "@snap/camera-kit";

export const intializeSnapChatSDK = (): Promise<CameraKit> => {
  try {
    return bootstrapCameraKit({
      apiToken:
        "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzA3MTE0OTY4LCJzdWIiOiJiM2YwZGIwYS1mNmRlLTQ5ZTYtOGI4My1jY2Q0Y2Y0MzBhOWJ-U1RBR0lOR35kZjI2ZDVkMi0zNmMwLTQ1Y2UtYTUxZi0yY2IwMDExNWJjODgifQ.BB0FCpG3DrfNYzqHUv0IKaYYkRtTZzElXX3_cN9mR3w",
    });
  } catch (error) {
    console.log(`Error in intializing snapchat SDK - `, error);
    throw error;
  }
};
