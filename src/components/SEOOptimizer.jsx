import { useEffect } from 'react';

const SEOOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/Faded Elegance Logo Final-07.png', as: 'image' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap', as: 'style' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap', as: 'style' }
    ];

    preloadLinks.forEach(({ rel, href, as }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (as) link.as = as;
      document.head.appendChild(link);
    });

    // Add structured data for breadcrumbs
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://fadedelegance.ae"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(breadcrumbScript);

    // Add FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What furniture restoration services do you offer in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive furniture restoration services including luxury furniture repair, antique restoration, premium upholstery, and custom furniture design in Dubai."
          }
        },
        {
          "@type": "Question",
          "name": "How much does furniture restoration cost in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Furniture restoration costs vary based on the type of furniture, extent of damage, and services required. Contact us for a personalized quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide pickup and delivery services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer pickup and delivery services for furniture restoration projects in Dubai. Contact us to arrange convenient scheduling."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(faqScript);

    // Cleanup function
    return () => {
      // Remove preload links on unmount
      preloadLinks.forEach(({ href }) => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link) document.head.removeChild(link);
      });

      // Remove structured data scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent.includes('BreadcrumbList') || script.textContent.includes('FAQPage')) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;
