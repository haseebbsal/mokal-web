import { translate } from "./locale";

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

export function getServiceSchema(name: any, description: any, url: string, lang: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": translate(name, lang),
    "description": translate(description, lang),
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

export function getFAQSchema(questions: Array<{ question: any; answer: any }>, lang: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((q) => ({
      "@type": "Question",
      "name": translate(q.question, lang),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": translate(q.answer, lang)
      }
    }))
  };
}

export function getBlogPostingSchema(blog: any, url: string, lang: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": translate(blog.title, lang),
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
