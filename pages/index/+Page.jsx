import { Counter } from '../../components/Counter'

export default function Page() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home Page",
    "description": "SSR page with JSON-LD using Vike"
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData).replace(/</g, '\\u003c')
        }}
      />
      <h1>Vite + React + Vike SSR</h1>
      <p>PAge with SSR and JSON+Ld</p>
    </div>
  )
}
