export function getOrganizationSchema(config: any) {
  const socialLinks = config?.socialLinks
    ? Object.values(config.socialLinks).filter((link) => typeof link === "string" && link.length > 0)
    : [];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MGC Freight",
    "url": "https://www.mgcfreight.com",
    "logo": config?.imageUrl || "https://www.mgcfreight.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": config?.phoneNumber || "+1 (289) 295-1640",
      "contactType": "customer service",
      "email": config?.email || "info@mgcfreight.com",
      "areaServed": ["CA", "US", "MX"],
      "availableLanguage": ["en", "fr"]
    },
    "sameAs": socialLinks
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MGC Freight",
    "url": "https://www.mgcfreight.com"
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "MGC Freight",
      "url": "https://www.mgcfreight.com",
      "logo": "https://www.mgcfreight.com/images/logo.png"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Canada" },
      { "@type": "AdministrativeArea", "name": "USA" },
      { "@type": "AdministrativeArea", "name": "Mexico" }
    ],
    "url": url
  };
}

export function getFAQSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((q) => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
}

export function getBlogPostingSchema(blog: any, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": blog.imageUrl ? [blog.imageUrl] : ["https://www.mgcfreight.com/images/logo.png"],
    "datePublished": blog.publishedAt,
    "dateModified": blog.publishedAt,
    "author": {
      "@type": "Person",
      "name": blog.authorName || "MGC Freight Editor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MGC Freight",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mgcfreight.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}
