import { type LegalSection, list, paragraph } from '@/lib/legal-blocks'

/** Preamble, scope, plain-language summary, and the key-points list. */
export const OVERVIEW_SECTIONS: readonly LegalSection[] = [
  {
    id: 'preamble',
    tocLabel: 'Introduction',
    blocks: [
      paragraph(
        'GoCerise (“we”, “us”, “our”) is operated by 17695969 Canada Inc., a company based in Montreal, Quebec, Canada. This policy explains what information we collect, how it is used, who it is shared with, and the rights you have over it.',
      ),
      paragraph(
        'What this policy covers. It applies to the GoCerise mobile application for iOS and Android, and to our website at gocerise.com. The two are very different in what they collect: the app has no accounts and asks for no contact details, while the website has one form that asks for your name and email so we can add you to our mailing list. Both are covered below and the difference is always made clear. This policy does not cover the separate services the app or site can hand you off to, which are listed in section 9.',
      ),
      paragraph(
        'GoCerise helps you compare grocery prices and plan cheaper shopping trips. The app has no accounts and no sign-in. There is no registration screen, no password, and no social login. Your lists and your shopping history are stored on your phone, not on our servers. There is no advertising, no analytics software, no crash-reporting software, and no tracking of any kind, in the app or on the website.',
      ),
      paragraph(
        'Privacy Officer: Jon Barlas, privacy@gocerise.com. Under Quebec’s Act respecting the protection of personal information in the private sector (Law 25), this person is responsible for the protection of personal information at GoCerise.',
      ),
    ],
  },
  {
    id: 'in-plain-terms',
    heading: 'In plain terms',
    blocks: [
      paragraph('Before the detail, here is how we think about this.'),
      paragraph(
        'GoCerise exists to help you pay less for groceries. Building it that way did not require knowing who you are, so we did not build it that way. In the app there is no account to create, no email to hand over, and no profile of you sitting on a server somewhere. Your lists and your shopping history live on your phone, and we cannot read them.',
      ),
      paragraph(
        'There is exactly one place where we ask for your name and email: the mailing list sign-up on our website. That is a form you choose to fill in, we use it only to send you the emails you asked for, and you can leave at any time. If you never sign up, we never have your contact details at all.',
      ),
      paragraph(
        'We don’t sell your personal information, and we don’t rent, trade, or hand it to advertisers or data brokers. If that ever changes, it would be a material change to this policy, and we would have to tell you before it took effect.',
      ),
      paragraph(
        'What the app needs is narrow: to show you what a tomato costs near you, our servers have to know roughly where “near you” is, and what you searched for. We ask permission before using your location, the app works fine if you say no, and we keep what you send for as long as the request needs and no longer.',
      ),
      paragraph(
        'We would rather tell you exactly what happens than write something vague and reassuring. That is what the rest of this page is for.',
      ),
    ],
  },
  {
    id: 'summary-of-key-points',
    heading: 'Summary of key points',
    blocks: [
      list([
        {
          lead: 'No account, no identity in the app.',
          text: 'The app never asks for an email address, a name, or a password, and it creates no user account. Nothing you do in the app is tied to an identity on our servers. It sends no account identifier, device identifier, or advertising identifier of any kind.',
        },
        {
          lead: 'Your data stays on your phone.',
          text: 'Grocery lists, logged shopping trips, spending insights, store preferences, and settings are stored only in the app’s storage on your device. Deleting the app deletes them.',
        },
        {
          lead: 'What we do receive from the app.',
          text: 'To find stores and compare prices, it sends search terms, item names, quantities, and, with your permission, your approximate coordinates to our servers. These are processed to answer the request and are not linked to you.',
        },
        {
          lead: 'Short-lived server storage.',
          text: 'A trip-planning request creates a temporary snapshot on our server (your coordinates and the item names being priced) so that prices stay consistent while you choose a route. It is deleted automatically after there is no use for it left.',
        },
        {
          lead: 'Location is optional.',
          text: 'The app explains what location is for and asks before it ever requests permission, and it works without it: you can type an address or postal code instead, or use the default Montreal location.',
        },
        {
          lead: 'The website’s mailing list is the one place we hold contact details.',
          text: 'If you sign up, we store the name and email you enter and use them only to send you the emails you asked for. Every email includes an unsubscribe link, and we act on unsubscribes within 10 business days.',
        },
        {
          lead: 'The website has no analytics and sets no cookies.',
          text: 'No Google Analytics, no PostHog, no Meta Pixel, no third-party scripts of any kind, and no cookie banner because there is nothing to consent to.',
        },
        {
          lead: 'Who else sees anything.',
          text: 'Our hosting providers (Railway for the app’s servers, Vercel for the website, Supabase for the mailing list), the map provider on your platform, the routing service that draws driving directions, and the grocery retailers whose servers host the product images shown in the app.',
        },
        {
          lead: 'Where it is processed.',
          text: 'Our app servers and database run in the United States (Ashburn, Virginia), outside Quebec and Canada.',
        },
        {
          lead: 'Your control.',
          text: 'Withdraw location consent at any time in Settings. Unsubscribe from the mailing list at any time. Uninstalling GoCerise erases everything the app has stored about you.',
        },
      ]),
      paragraph('The sections below explain each of these points in full.'),
    ],
  },
]
