import type { Metadata } from "next";

export const metadata: Metadata = {
    description: "Menu cacaofood",
  };

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
