import { PreviewSection } from "@/components/src/preview";
import React, { Suspense } from "react";

const page = () => {

  return 
  <Suspense fallback={<div>Loading...</div>}>
  <PreviewSection />
  </Suspense>;
};

export default page;
