import BaseLayout from "@/layouts/base/layout";

export default function RootLayout({children}: {children: React.ReactNode; }) {
  return (
    <BaseLayout title="teste" icon="/icons/favicon.ico">{children}</BaseLayout>
  );
}
