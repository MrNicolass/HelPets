'use client';

import { ReactNode } from "react";
import PageTitle from "@/components/PageTitle";

function ConfigLayout({ children }: { children: ReactNode}) {

  return (
    <main className="flex flex-col gap-8 px-6  lg:px-8">
      <PageTitle title="Configurações" />
      <section className="grid gap-10 lg:grid-cols-2">
        {children}
      </section>
    </main>
  );
}

export default ConfigLayout;