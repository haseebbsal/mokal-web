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
      "areaServed": ["CA", "US"],
      "availableLanguage": ["en", "fr"]
    },
    "sameAs": socialLinks
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MGC Freight",
    "image": "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEiNQD0IWeskhUganOYwZXYdhsDL9tK23mTmz626A2KVxzGTD-RiDveeSwbqj_b6tmu-ftYhZGKZHvkjBu7xJ93_oN6lr0oVJ5m7mWrrVsac7zmGGPcc5isa1rcXPs3T69fUDHzWfGps1Us=s1360-w1360-h1020-rw",
    "url": "https://www.mgcfreight.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2275 Upper Middle Rd E Suite 101",
      "addressLocality": "Oakville",
      "addressRegion": "ON",
      "postalCode": "L6H0C3",
      "addressCountry": "CA"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.9,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": "Cindy"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.761293,
      "longitude": -73.982294
    },
    "telephone": "+14379956320",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "8:00",
        "closes": "17:00"
      },
    ],
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
