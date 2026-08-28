import { type LegalSection, list, paragraph, table } from '@/lib/legal-blocks'

/** Sections 2 and 3: what each piece of information is used for, and consent. */
export const USAGE_SECTIONS: readonly LegalSection[] = [
  {
    id: 'how-we-use-information',
    heading: '2. How we use information',
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
    id: 'consent',
    heading: '3. Consent',
    blocks: [
      paragraph(
        'Location is the only sensitive information the app asks for, and it is optional. Before requesting the operating system’s location permission, the app shows a disclosure explaining that your coordinates are used to find nearby stores and build routes, that they are processed on servers hosted in the United States, that maps are supplied by Google or Apple depending on your platform, and that you may decline and type an address instead.',
      ),
      paragraph(
        'Your choice is recorded on your device only. We do not keep a server-side record of it, because we have no account to attach it to.',
      ),
      paragraph('You may withdraw location consent at any time:'),
      list([
        {
          lead: 'In GoCerise:',
          text: 'Settings → Withdraw Location Consent. The app immediately stops using your device location and reverts to the default location.',
        },
        {
          lead: 'In your device settings:',
          text: 'revoke the location permission for GoCerise.',
        },
      ]),
      paragraph(
        'The mailing list works on express consent: nothing is collected unless you deliberately enter your name and email and submit the form, and we tell you at that point what you are signing up for. Consent is not permanent and you never lose the right to take it back. You can withdraw it whenever you like, through the unsubscribe link in any email we send or by emailing help@gocerise.com. We act on withdrawal within 10 business days at the outside, and normally far sooner. The full set of commitments we make about email is in section 1.6.',
      ),
      paragraph(
        'We use your address only for the purpose you gave it to us for. If we ever wanted to use it for something materially different, we would ask you first rather than assume the original sign-up covered it.',
      ),
      paragraph(
        'For everything else in the app, using a feature is what triggers the request that supports it. Searching sends a search term, and planning a trip sends the item names on the list you are pricing.',
      ),
    ],
  },
]
