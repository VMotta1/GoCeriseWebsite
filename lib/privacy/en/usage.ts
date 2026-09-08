import { type LegalSection, paragraph, table } from '@/lib/legal-blocks'

/** Use, disclosure, business transfers, and cross-border processing. */
export const USAGE_SECTIONS: readonly LegalSection[] = [
  {
    id: 'how-we-use-information',
    heading: 'How We Use Information',
    blocks: [
      table(
        ['Information', 'Where it comes from', 'Purpose'],
        [
          [
            'Coordinates, or the address you type',
            'App',
            'Finding grocery stores near you, pricing your list at those stores, and drawing driving routes',
          ],
          [
            'Product search terms and item names',
            'App',
            'Returning matching products and their prices at nearby stores',
          ],
          [
            'Store-banner preferences and search radius',
            'App',
            'Limiting results to the chains and distance you care about',
          ],
          [
            'Trip-planning snapshot',
            'App',
            'Keeping the prices you were shown consistent while you choose a route, for up to 15 minutes',
          ],
          [
            'Name and email address',
            'Website mailing list sign-up',
            'Sending you the mailing list emails you asked for, and nothing else',
          ],
          [
            'Server logs, including IP address',
            'App and website',
            'Security, abuse prevention, rate limiting, and debugging',
          ],
        ],
      ),
      paragraph(
        'We use this information only for the purposes above. We do not use it for advertising, profiling, or automated decision-making, and we do not sell or rent it to anyone.',
      ),
    ],
  },
  {
    id: 'who-we-share-with',
    heading: 'Who We Share Information With',
    blocks: [
      paragraph(
        'We do not sell your information, and we do not share it with data brokers or advertisers.',
      ),
      table(
        ['Who', 'What they receive', 'Why', 'Relationship'],
        [
          [
            'Railway',
            'Everything our app servers process: coordinates and search terms in request logs, trip-planning snapshots, database contents',
            'Hosts our application servers and grocery database',
            'Service provider, acting on our instructions',
          ],
          [
            'Tigris Data (via Railway)',
            'Grocery catalogue data only: product names, prices, store addresses. No user information at all',
            'Object storage for scraped price data',
            'Service provider, acting on our instructions',
          ],
          [
            'Vercel',
            'Website request logs, including IP addresses',
            'Hosts gocerise.com',
            'Service provider, acting on our instructions',
          ],
          [
            'Supabase',
            'The name and email address of mailing list subscribers, and the IP address the sign-up came from. Stored in Canada',
            'Stores the mailing list',
            'Service provider, acting on our instructions',
          ],
          [
            'DeepL',
            'Product names from our grocery catalogue only. No searches, list contents, or location, ever',
            'Pre-translating product names into French',
            'Service provider, acting on our instructions',
          ],
          [
            'Routing provider',
            'The coordinates of your route’s start point and stops, plus our server’s IP, never yours',
            'Computing driving directions',
            'Independent third party',
          ],
          [
            'Google Maps (Android)',
            'Your location, IP address, and device information, directly from your device',
            'Rendering the map',
            'Independent third party',
          ],
          [
            'Apple Maps (iOS)',
            'Location and device signals, directly from your device',
            'Rendering the map',
            'Independent third party',
          ],
          [
            'Apple / Google geocoding',
            'The address text you type',
            'Converting addresses to coordinates',
            'Independent third party',
          ],
          [
            'Grocery retailers’ image servers',
            'Your IP address and which product images were requested',
            'Serving product photos',
            'Independent third party',
          ],
          ['Frankfurter', 'Your IP address. Nothing else', 'Daily CAD→USD exchange rate', 'Independent third party'],
        ],
      ),
      paragraph(
        'We may also disclose information if required by law, court order, or other legal process, or to protect the rights, safety, and security of GoCerise, our users, or the public.',
      ),
    ],
  },
  {
    id: 'business-transfers',
    heading: 'Business Transfers',
    blocks: [
      paragraph(
        'If GoCerise is involved in a merger, acquisition, financing, reorganization, or sale of all or part of its assets, information held by us may be transferred as part of that transaction. In such event, we will endeavor to direct the transferee to information in a manner that is consistent with this policy in effect at the time such information was collected.',
      ),
    ],
  },
  {
    id: 'international-processing',
    heading: 'International Processing and Transfers',
    blocks: [
      paragraph(
        'Our application servers and our database is hosted by Railway on infrastructure in United States (us-east4). The information sent to Railway by us are disclosed in subsection “Information collected automatically or by service providers”. The active mailing-list database is configured in Supabase’s Canadian region. We do not intentionally configure that database to store mailing-list names and email addresses outside Canada. Our website is served by Vercel from a global edge network, so the page you are reading may be delivered from a server outside Canada, and Vercel keeps standard web request logs including IP addresses under its own retention arrangements. Route coordinates are additionally sent to the routing service named in section 4, which processes them on servers in Switzerland, and is operated by an organization based in Germany, subject to European data protection law. The map, geocoding, exchange-rate, and product-image services named earlier may also process requests outside Canada.',
      ),
      paragraph(
        'Before using providers that process personal information outside Canada, we assess the proposed processing, including the sensitivity of the information, the purposes, the retention periods, the provider’s security and contractual safeguards, the applicable laws in the destination locations, and whether the provider’s sub-processors create additional transfers.',
      ),
    ],
  },
]
