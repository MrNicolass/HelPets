// components/PageTitle.tsx
import Head from "next/head";

interface TitleProps {
  title: string;
}

export default function PageTitle({ title }: TitleProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <header className="max-w-4xl mx-auto p-8 border-gray-600 dark:bg-gray-500 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          {title}
        </h1>
      </header>
    </div>
  );
}
