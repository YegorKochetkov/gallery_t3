const mockUrls = [
  "https://utfs.io/f/6aa4f585-e058-4fd8-890a-d1da14042a8e-hst54p.jpg",
  "https://utfs.io/f/991ffbe7-ae34-45ec-b4cc-8266b91c3a67-7ef3jv.jpg",
  "https://utfs.io/f/04fa9448-955b-4c9d-997d-3e2682c684ca-oosre0.jpg",
  "https://utfs.io/f/146e7269-4c56-42b5-8bb6-827dca9d0536-sag9b7.jpg",
  "https://utfs.io/f/cc3124e5-e927-426c-a7a3-f4baa0160cae-ri04lb.jpg",
  "https://utfs.io/f/015c4e29-9195-48ed-8b4d-9e550965370d-abqj9q.jpg",
  "https://utfs.io/f/6477f13a-f8c7-4691-b037-7d83d4046305-tciqlt.jpg",
  "https://utfs.io/f/a710da7d-6ef8-4050-b76e-648534ffd1a6-gnvjn8.jpg",
  "https://utfs.io/f/3edbc1b7-74b9-48cf-8fe5-8e034cd9c41f-5s218l.jpg",
  "https://utfs.io/f/648b2be0-8013-4e69-8118-e933ddee45a9-o5xydl.jpg",
  "https://utfs.io/f/143dbeed-7b47-497c-9c1e-75b19d768d74-k2ve27.jpg",
  "https://utfs.io/f/f714a95a-b6b9-42ba-b8e7-3a649a077176-6d6xl0.jpg",
];

export const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
