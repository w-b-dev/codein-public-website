import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ maxWidth: "36rem", padding: "0 1rem", margin: "3rem auto 6rem" }}
    >
      {children}
    </div>
  );
}
