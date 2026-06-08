import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Joseph Ufomadu | Senior Frontend Engineer</title>

      <meta
        name="description"
        content="
        Senior Frontend Engineer with 5+ years
        experience building enterprise-grade
        applications using React, Next.js and
        TypeScript.
        "
      />

      <meta
        name="keywords"
        content="
        React Developer,
        Frontend Engineer,
        TypeScript,
        Next.js,
        Nigeria,
        Software Engineer
        "
      />
    </Helmet>
  );
}
