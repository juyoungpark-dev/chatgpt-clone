"use client";
import { Toaster } from "react-hot-toast";

function ClientProvider() {
  return (
    <>
      <Toaster position="top-right" />
      {/* add more client libraries as needed... */}
    </>
  );
}

export default ClientProvider;