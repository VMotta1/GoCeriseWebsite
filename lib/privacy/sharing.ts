import { type LegalSection, paragraph, table } from '@/lib/legal-blocks'

/** Sections 4 to 6: recipients, cross-border processing, and retention. */
export const SHARING_SECTIONS: readonly LegalSection[] = [
  {
    id: 'who-we-share-with',
    heading: '4. Who we share information with',
    blocks: [
      paragraph(
        'We do not sell your information, and we do not share it with data brokers or advertisers. This is the complete list of everyone who receives anything.',
      ),
      table(
        ['Who', 'What they receive', 'Why', 'Relationship'],
        [
          [
            'Railway',
            'Everything our app servers process: coordinates and search terms in request logs, trip-planning snapshots, database contents',
            'Hosts our application servers and database',
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
      paragraph('Three of these deserve more explanation.'),
      paragraph(
        'The routing provider is deliberately shielded from you. Your app never contacts it. The request goes to our server, which calls the routing service on your behalf and forwards no headers from your device, so it receives coordinates and our server’s IP address, never your IP, your device details, or anything identifying you. Our current routing service is the OSRM routing instance operated by FOSSGIS e.V., a non-profit association registered in Germany and therefore subject to European data protection law, running on servers located in Zurich, Switzerland.',
      ),
      paragraph(
        'Maps are rendered by your platform’s own provider, Google on Android and Apple on iOS, which means those companies receive location signals directly from your device, outside our control, under their own policies. See the Google Privacy Policy and the Apple Privacy Policy.',
      ),
      paragraph(
        'Product photos load from the retailers themselves (Loblaws, Walmart, Metro, Sobeys, IGA, Avril, T&T, Pharmaprix, Supermarché PA and others) rather than from our servers, so those retailers see your device’s IP address and which product images you viewed. Their handling of that is governed by their own privacy policies.',
      ),
      paragraph(
        'We may also disclose information if required by law, court order, or other legal process, or to protect the rights, safety, and security of GoCerise, our users, or the public.',
      ),
      paragraph(
        'Business transfers. If GoCerise is involved in a merger, acquisition, financing, reorganization, or sale of all or part of its assets, information held by us may be transferred as part of that transaction. We will ensure the receiving party is bound by obligations consistent with this policy, and we will notify users of any change in ownership or in the use of personal information, as required by applicable law.',
      ),
    ],
  },
  {
    id: 'international-processing',
    heading: '5. International processing and transfers',
    blocks: [
      paragraph(
        'Our application servers and our database run on Railway infrastructure in Ashburn, Virginia, United States (us-east4). The information described in sections 1.3 and 1.4 (coordinates, search terms, temporary trip-planning snapshots, and server logs) is therefore processed and, where applicable, briefly stored outside Quebec and outside Canada, and is subject to the laws of that jurisdiction.',
      ),
      paragraph(
        'The mailing list stays in Canada. Our Supabase database is hosted in Supabase’s Canadian region, so if you subscribe, the name and email address you gave us are stored in Canada and are not transferred out of the country by us. We chose that region deliberately: contact details are the most directly identifying information we hold, so they are the information we were least willing to send abroad.',
      ),
      paragraph(
        'Our website itself is served by Vercel from a global edge network, so the page you are reading may be delivered from a server outside Canada, and Vercel keeps standard web request logs including IP addresses under its own retention arrangements. No personal information you give us is stored there. The mailing list lives in Canada, as described above.',
      ),
      paragraph(
        'Route coordinates are additionally sent to the routing service named in section 4, which processes them on servers in Switzerland, a jurisdiction recognized as providing a level of data protection comparable to Quebec’s, and is operated by an organization based in Germany, subject to European data protection law.',
      ),
      paragraph(
        'Before selecting these providers we assessed the protection the information would receive, taking into account its sensitivity, the purposes for which it is used, the retention periods that apply, the absence of any account identity attached to the app data, and the safeguards available with each provider. The map, geocoding, exchange-rate, and product-image services named in section 4 may also process requests outside Canada.',
      ),
      paragraph('The information stored on your own device is not transferred anywhere by us.'),
    ],
  },
  {
    id: 'retention',
    heading: '6. How long information is kept',
    blocks: [
      table(
        ['Information', 'Retention'],
        [
          [
            'Grocery lists, trip history, spending insights, settings',
            'On your device only, until you delete them or uninstall the app (trip history keeps the 500 most recent trips)',
          ],
          [
            'Coordinates and search terms sent for a store or product search',
            'Not stored in our database; processed for the request and discarded, apart from server logs',
          ],
          [
            'Trip-planning snapshot (coordinates, item names, candidate prices)',
            '15 minutes, then deleted automatically',
          ],
          [
            'Coordinates sent to the routing service',
            'Governed by that provider’s own retention practices; we send no identifier with them',
          ],
          [
            'Mailing list name and email address',
            'Until you unsubscribe, after which they are removed from the list',
          ],
          [
            'Record that you unsubscribed (email address only)',
            'Kept on a suppression list so you are not emailed again, until you ask us to erase it',
          ],
          [
            'Record of your consent (sign-up date and what the form said)',
            'Kept while you are subscribed and for 3 years afterwards, so we can demonstrate that you asked to hear from us if we are ever required to',
          ],
          [
            'Application server logs, including URLs with search terms and coordinates',
            'No more than 30 days, then deleted automatically by our hosting provider',
          ],
          [
            'Hosting provider’s platform request logs, including originating IP addresses',
            'No more than 30 days, then deleted automatically',
          ],
          ['Website server logs, including IP addresses', 'Held by Vercel under its own retention arrangements'],
          [
            'Emails you send to help@gocerise.com',
            'Kept for as long as needed to handle your request, then deleted',
          ],
        ],
      ),
    ],
  },
]
