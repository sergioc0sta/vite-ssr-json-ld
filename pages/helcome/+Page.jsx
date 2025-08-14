export default function Page() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Helcome Page",
    "description": "Page render from server"
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdData).replace(/</g, '\\u003c')
        }}
      />
      <h1>Helcome - SSR com JSON-LD</h1>
      <p>Page render from server</p>
    </div>
  )
}
