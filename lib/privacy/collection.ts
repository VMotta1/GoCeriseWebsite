import { type LegalSection, list, paragraph } from '@/lib/legal-blocks'

/** Preamble and the four "what we collect" clauses. */
export const COLLECTION_SECTIONS: readonly LegalSection[] = [
  {
    id: 'preamble',
    tocLabel: 'Introduction',
    blocks: [
      paragraph(
        '17695969 Canada Inc., doing business as GoCerise, (“GoCerise,” “gocerise,” “we,” “us,” or “our”) operates the GoCerise mobile application and website (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our Service.',
      ),
      paragraph(
        'Protecting your privacy is important to us. Therefore, the GoCerise mobile application has no accounts and no sign-in. There is no registration screen, no password, and no social login. Your lists and your shopping history are stored on your phone, not on our servers.',
      ),
      paragraph(
        'Please read this Privacy Policy carefully. By accessing or using the Service, you consent to the practices described in this policy. If you do not consent, do not use the Service.',
      ),
    ],
  },
  {
    id: 'no-account-required',
    heading: 'No Account Required',
    blocks: [
      paragraph(
        'We do not create user accounts or intentionally associate app activity with a named individual. However, our service providers may process technical information, such as IP addresses, request paths, and timestamps, as described below. The app does not intentionally send an account ID, advertising ID, device ID, or installation ID with its requests.',
      ),
    ],
  },
  {
    id: 'information-you-provide',
    heading: 'Information You Provide or Choose to Record',
    blocks: [
      list([
        {
          lead: 'Shopping information:',
          text: 'grocery lists, list names, products, quantities, prices, shopping-trip history, and savings information that you choose to enter or save.',
        },
        {
          lead: 'Location information:',
          text: 'GPS coordinates when you grant location permission, or coordinates derived from an address or postal code that you enter.',
        },
        {
          lead: 'Search and planning information:',
          text: 'product searches, store searches, selected store preferences, search radius, language, and the items and quantities used for trip planning.',
        },
        {
          lead: 'Settings:',
          text: 'language, currency, tutorial progress, location-consent choice, and other app preferences.',
        },
        {
          lead: 'Feedback and correspondence:',
          text: 'messages or other information you send to us, including information contained in support emails.',
        },
        {
          lead: 'Mailing-list information:',
          text: 'your name and email address if you subscribe through our website.',
        },
      ]),
    ],
  },
  {
    id: 'information-collected-automatically',
    heading: 'Information Collected Automatically or by Service Providers',
    blocks: [
      list([
        {
          lead: 'Technical information:',
          text: 'IP address, request date and time, request path, response status, response time, browser or app information, and other information recorded by our hosting and infrastructure providers.',
        },
        {
          lead: 'Security and diagnostic information:',
          text: 'information used to prevent abuse, enforce rate limits, troubleshoot errors, and protect the app and website.',
        },
        {
          lead: 'Website information:',
          text: 'technical information about visits to our website, including information processed by the website hosting provider.',
        },
        {
          lead: 'Third-party service information:',
          text: 'information sent to mapping, geocoding, routing, exchange-rate, product-image, email, hosting, and other providers when needed to provide the requested feature.',
        },
      ]),
    ],
  },
  {
    id: 'information-stored-locally',
    heading: 'Information Stored Locally on Your Device',
    blocks: [
      paragraph(
        'The app stores certain information locally, including grocery lists, shopping-trip history, spending calculations, address or postal-code searches, store preferences, settings, and exchange-rate data. This information is not stored on our application servers unless specifically described in this policy. Device backups, operating-system services, and other apps may handle locally stored information according to their own settings and policies.',
      ),
    ],
  },
]
