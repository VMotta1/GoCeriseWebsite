import { type LegalSection, list, paragraph } from '@/lib/legal-blocks'

/** Sections 7 to 13: rights, Discover, hand-offs, security, minors, changes, contact. */
export const RIGHTS_SECTIONS: readonly LegalSection[] = [
  {
    id: 'your-rights',
    heading: '7. Your rights',
    blocks: [
      paragraph(
        'You have the right to access the personal information we hold about you, to have it corrected, to have it deleted, to withdraw consent to its use, and to receive a copy of the computerized personal information you provided to us, in a structured and commonly used format.',
      ),
      paragraph(
        'How easily we can act on that depends on which part of GoCerise is involved, and we would rather be straightforward about the difference.',
      ),
      paragraph(
        'If you are on the mailing list, we can find you, because we hold your email address. Write to privacy@gocerise.com from that address and we can show you what we have, correct it, or delete it.',
      ),
      paragraph('For the app, most of your information is already in your hands. You can:'),
      list([
        {
          lead: 'Delete everything.',
          text: 'Uninstall GoCerise. This removes every list, trip, preference, and cached value described in section 1.2. You may also delete individual lists and trips inside the app.',
        },
        {
          lead: 'Withdraw consent to location use.',
          text: 'Settings → Withdraw Location Consent, or revoke the permission in your device settings.',
        },
        {
          lead: 'Choose not to send location at all.',
          text: 'Decline the consent screen and type an address or postal code instead.',
        },
      ]),
      paragraph(
        'For the limited app information that reaches our servers, there is a real limitation. Those records carry no identifier, so we cannot look up “your” data by name, email, or account, because there is nothing to match you against. To attempt to locate anything we would need details from you, such as an approximate date, time, and the address or area used, and in most cases the retention periods in section 6 mean nothing remains by the time a request arrives. This is a consequence of collecting as little as possible, not a refusal to help.',
      ),
      paragraph(
        'To exercise any of these rights, or to ask a question about this policy, email privacy@gocerise.com. We will respond within 30 days.',
      ),
      paragraph(
        'If you are not satisfied with our response, you may file a complaint with the Commission d’accès à l’information du Québec or the Office of the Privacy Commissioner of Canada.',
      ),
      paragraph(
        'Do-Not-Track signals. Because no uniform standard for responding to browser or device Do-Not-Track signals has been adopted, we do not respond to them. Neither the app nor the website contains advertising or analytics trackers, so we do not track you across apps or websites in the first place.',
      ),
    ],
  },
  {
    id: 'discover-screen',
    heading: '8. The Discover screen',
    blocks: [
      paragraph(
        'The Discover screen suggests products drawn from our grocery catalogue. Where it shows a ranking of popular products, that ranking is an aggregate computed in our database over a rolling 90-day window, and a product appears only if it was purchased on at least five separate occasions. The ranking contains no names, no identifiers, and nothing that could single out any one person’s shopping.',
      ),
      paragraph(
        'The app does not let you publish your grocery lists, and it does not show you other people’s lists. Everything you create stays on your device. If we ever add a way to share a list publicly, we will update this policy first and explain exactly what would become visible to others.',
      ),
    ],
  },
  {
    id: 'links-and-hand-offs',
    heading: '9. Links and hand-offs to other services',
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
        {
          lead: 'You open a link out of the app,',
          text: 'which opens in your device’s browser.',
        },
      ]),
      paragraph(
        'Product images shown inside the app are loaded from the grocery retailers’ own servers, as described in section 4. We do not own, operate, or control any of these services, and we are not responsible for how they handle your information. We encourage you to review their privacy policies, and to contact them directly with any concerns about their practices.',
      ),
    ],
  },
  {
    id: 'security',
    heading: '10. Security',
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
        {
          lead: 'No device backup of app data on Android,',
          text: 'so the app’s stored data cannot be extracted from a device or cloud backup.',
        },
        {
          lead: 'Restricted production access.',
          text: 'Administrative endpoints are protected by a separate key, and access to production systems and to the mailing list is limited to authorized team members.',
        },
      ]),
      paragraph(
        'No method of transmission or storage is completely secure, but we work to protect information using industry-standard practices, and you provide information to us with that understanding.',
      ),
      paragraph(
        'If something goes wrong. If a confidentiality incident involving personal information occurs and presents a risk of serious injury, we will report it to the Commission d’accès à l’information du Québec and notify the affected individuals promptly and without undue delay, as Law 25 requires. We will also keep a register of confidentiality incidents, as required. We can email mailing list subscribers directly; for app users, whose contact details we do not have, we would give notice in the app and on our website.',
      ),
    ],
  },
  {
    id: 'children',
    heading: '11. Children and young people',
    blocks: [
      paragraph(
        'GoCerise is a general-audience grocery price app. It is not directed at children, contains no content aimed at them, and creates no account for anyone.',
      ),
      paragraph(
        'Under 14. Under Quebec law, personal information about a minor under 14 may generally only be collected with the consent of the person having parental authority, unless collecting it is clearly for the minor’s benefit. GoCerise is not intended for children under 14, and we ask that they not use it, or sign up for the mailing list, without a parent or guardian’s involvement. We do not knowingly collect personal information from a child under 14.',
      ),
      paragraph(
        '14 and over. If you are 14 or older, you may use GoCerise. We still suggest reading this policy with a parent or guardian, particularly the part about location, so that you understand what the app sends when you let it use your position.',
      ),
      paragraph(
        'For parents and guardians. The app collects no account information from anyone, so there is no profile of your child for us to hold, show you, or delete. The lists and shopping history in the app are stored on the device itself. You can review them by opening the app on that device, and remove them by deleting them in the app or uninstalling it. The location permission can be revoked at any time in the device settings, or through Settings → Withdraw Location Consent inside the app.',
      ),
      paragraph(
        'If you believe a child has sent us personal information, or has been signed up to our mailing list, and you would like it removed, contact us at privacy@gocerise.com and we will delete it.',
      ),
    ],
  },
  {
    id: 'changes',
    heading: '12. Changes to this policy',
    blocks: [
      paragraph(
        'We may update this policy from time to time. If we make material changes, we will notify you through the app and on our website before the changes take effect, and we will tell mailing list subscribers by email. We will also update the dates at the top of this page. Continued use of GoCerise after changes take effect constitutes acceptance of the updated policy.',
      ),
    ],
  },
  {
    id: 'contact-us',
    heading: '13. Contact us',
    blocks: [
      paragraph('17695969 Canada Inc.'),
      paragraph('6-4475 Saint Dominique'),
      paragraph('Montreal, Quebec H2W 2B4, Canada'),
      paragraph('Privacy Officer: Jon Barlas'),
      paragraph('Privacy requests: privacy@gocerise.com'),
      paragraph('General support: help@gocerise.com'),
    ],
  },
]
