const BASE_URL = 'https://quantumcapital.com'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Quantum Capital',
    legalName: 'Patriot Advisory Group LLC',
    alternateName: 'Patriot Advisory Group LLC dba Quantum Capital',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    description:
      'Quantum Capital is a state-registered RIA (New Hampshire) offering Ethereum-focused managed account services. Founded by Mark Berube, ChFC, with 22+ years of advisory experience and ~$54M AUM.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 New Hampshire Avenue, Suite 125',
      addressLocality: 'Portsmouth',
      addressRegion: 'NH',
      postalCode: '03801',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Mark Berube',
      jobTitle: 'Founder, President',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Chartered Financial Consultant (ChFC)',
      },
    },
    sameAs: ['https://thequantumletter.com'],
    knowsAbout: [
      'Ethereum',
      'Cryptocurrency Investment',
      'Registered Investment Adviser',
      "Metcalfe's Law",
      'Digital Asset Management',
      'EIP-1559',
      'Ethereum Virtual Machine',
      'Staking',
    ],
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mark Berube',
    jobTitle: 'Founder, President, Chartered Financial Consultant',
    worksFor: {
      '@type': 'FinancialService',
      name: 'Quantum Capital',
      url: BASE_URL,
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'Chartered Financial Consultant (ChFC)',
    },
    description:
      'Mark Berube is a Chartered Financial Consultant (ChFC) with 22+ years of experience as a financial advisor. He is the founder of Quantum Capital and the author of The Quantum Letter, a research publication applying Metcalfe\'s Law to Ethereum valuation.',
    knowsAbout: [
      'Ethereum',
      "Metcalfe's Law Valuation",
      'Cryptocurrency Investment Management',
      'Registered Investment Advisory',
      'Digital Asset Strategy',
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Quantum Capital',
    url: BASE_URL,
    description:
      'Institutional-grade Ethereum research and managed account services for crypto-curious investors. Powered by Metcalfe\'s Law valuation methodology.',
    publisher: {
      '@type': 'FinancialService',
      name: 'Patriot Advisory Group LLC dba Quantum Capital',
    },
  }
}
