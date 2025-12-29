export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const updateMetaTags = (metadata: SEOMetadata) => {
  document.title = metadata.title;

  const updateOrCreateMetaTag = (selector: string, content: string) => {
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      const attr = selector.match(/\[(.*?)="(.*?)"\]/);
      if (attr) {
        tag.setAttribute(attr[1], attr[2]);
      }
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  updateOrCreateMetaTag('meta[name="description"]', metadata.description);
  updateOrCreateMetaTag('meta[name="keywords"]', metadata.keywords.join(', '));

  updateOrCreateMetaTag('meta[property="og:title"]', metadata.title);
  updateOrCreateMetaTag('meta[property="og:description"]', metadata.description);

  if (metadata.ogType) {
    updateOrCreateMetaTag('meta[property="og:type"]', metadata.ogType);
  }

  if (metadata.ogImage) {
    updateOrCreateMetaTag('meta[property="og:image"]', metadata.ogImage);
  }

  if (metadata.canonicalUrl) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = metadata.canonicalUrl;
  }

  updateOrCreateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
  updateOrCreateMetaTag('meta[name="twitter:title"]', metadata.title);
  updateOrCreateMetaTag('meta[name="twitter:description"]', metadata.description);

  if (metadata.ogImage) {
    updateOrCreateMetaTag('meta[name="twitter:image"]', metadata.ogImage);
  }
};

export const createStructuredData = (data: Record<string, unknown>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);

  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  document.head.appendChild(script);
};
