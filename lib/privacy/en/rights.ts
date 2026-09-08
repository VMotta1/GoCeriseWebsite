import { type LegalSection, list, paragraph, table } from '@/lib/legal-blocks'

/** Security, retention, user rights, hand-offs, children, changes, and contact. */
export const RIGHTS_SECTIONS: readonly LegalSection[] = [
  {
    id: 'data-security',
    heading: 'Data Security',
    blocks: [
      paragraph('We protect information using measures including:'),
      list([
        {
          lead: 'Encryption in transit.',
          text: 'All communication between the app and our servers, and between your browser and our website, uses HTTPS/TLS.',
        },
        {
          lead: 'Little to steal.',
          text: 'The app holds no passwords, tokens, or account identifiers, and our application database holds no user accounts.',
        },
        {
          lead: 'Coordinates kept out of URLs where practical.',
          text: 'Trip planning and driving directions send coordinates in the request body rather than the URL, so they do not appear in request logs.',
        },
        {
          lead: 'Short-lived server-side data.',
          text: 'Trip-planning snapshots expire after 15 minutes and are purged automatically.',
        },
        {
          lead: 'A shielded routing path.',
          text: 'The routing provider never receives your IP address or device information, only coordinates relayed by our server.',
        },
        { lead: 'Rate limiting', text: 'on public endpoints to prevent abuse.' },
      ]),
      paragraph(
        'No method of transmission or storage is completely secure, but we work to protect information using industry-standard practices, and you provide information to us with that understanding.',
      ),
    ],
  },
  {
    id: 'data-retention',
    heading: 'Data Retention',
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
          ['Mailing list name and email address', 'Until you unsubscribe, after which they are removed from the list'],
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
        ],
      ),
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your Rights',
    blocks: [
      paragraph(
        'You have the right to access the personal information we hold about you, to have it corrected, to have it deleted, to withdraw consent to its use, and to receive a copy of the computerized personal information you provided to us, in a structured and commonly used format. You can unsubscribe from our mailing list at any time by emailing us or clicking unsubscribe on one of marketing mail. You can delete all your data by deleting the GoCerise app, which stores all your data locally. You can withdraw consent to location sharing or decline all together. To exercise any of these rights, or to ask a question about this policy, email privacy@gocerise.com. We will respond within 30 days. If you believe your privacy rights have been violated, you may contact the Office of the Privacy Commissioner of Canada at www.priv.gc.ca',
      ),
    ],
  },
  {
    id: 'third-party-links',
    heading: 'Third-party Links',
    blocks: [
      paragraph(
        'GoCerise sometimes hands you off to an app or website we do not operate. When that happens, you leave our control and the other service’s own privacy policy governs what it collects. We do not receive a report back about what you do there.',
      ),
      paragraph('This happens when:'),
      list([
        {
          lead: 'You tap directions to a store.',
          text: 'GoCerise offers to open Apple Maps, Google Maps, or Waze, and passes the store’s coordinates or name to the app you pick. That app then knows where you are heading, under its own privacy policy.',
        },
        {
          lead: 'You send feedback.',
          text: 'The app opens your own email application with a message addressed to help@gocerise.com. Your email provider handles it; it does not pass through our servers.',
        },
        {
          lead: 'You share GoCerise with a friend.',
          text: 'The app opens your device’s share sheet, and whichever app you choose handles the message.',
        },
        { lead: 'You open a link out of the app,', text: 'which opens in your device’s browser.' },
      ]),
      paragraph(
        'Product images shown inside the app are loaded from the grocery retailers’ own servers, as described in the section “Who We Share Information With”. We do not own, operate, or control any of these services, and we are not responsible for how they handle your information. We encourage you to review their privacy policies, and to contact them directly with any concerns about their practices.',
      ),
    ],
  },
  {
    id: 'childrens-privacy',
    heading: 'Children’s Privacy',
    blocks: [
      paragraph(
        'GoCerise is not intended for children under 14. We do not knowingly collect personal information from children. If you believe a child has sent us personal information, or has been signed up to our mailing list, and you would like it removed, contact us immediately at privacy@gocerise.com and we will delete it.',
      ),
    ],
  },
  {
    id: 'changes-to-policy',
    heading: 'Changes to Policy',
    blocks: [
      paragraph(
        'We may update this policy from time to time. If we make material changes, we will notify you through the app and on our website before the changes take effect, and we will tell mailing list subscribers by email. We will also update the dates at the top of this page. Continued use of GoCerise after changes take effect constitutes acceptance of the updated policy.',
      ),
    ],
  },
  {
    id: 'contact-us',
    heading: 'Contact Us',
    blocks: [
      paragraph(
        'For privacy related inquiries, please contact us at privacy@gocerise.com. If you have any other questions, please contact us at: help@gocerise.com.',
      ),
      paragraph(
        'Privacy Officer: Jon Barlas, privacy@gocerise.com. Under Quebec’s Act respecting the protection of personal information in the private sector (Law 25), this person is responsible for the protection of personal information at GoCerise.',
      ),
      paragraph('17695969 Canada Inc. Montreal, Quebec, Canada.'),
    ],
  },
]
