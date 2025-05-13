import BaseLayout from "@/layouts/base/baseLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseLayout title="teste" icon="/images/teste.png">
      {children}
    </BaseLayout>
  );
}
