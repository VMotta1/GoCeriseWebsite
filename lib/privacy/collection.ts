import { type LegalSection, list, paragraph, table } from '@/lib/legal-blocks'

/** Section 1: everything we do and do not collect, in the app and on the website. */
export const COLLECTION_SECTION: LegalSection = {
  id: 'information-we-collect',
  heading: '1. Information we collect',
  blocks: [],
  subsections: [
    {
      id: 'app-account-information',
      heading: '1.1 The app does not collect account information',
      blocks: [
        paragraph(
          'The GoCerise app has no sign-up and no sign-in. We do not collect or store your name, your email address, a password, or a social sign-in identity, and the app contains no code to do so. No user record is ever created for you in our database, and nothing you do in the app can be traced back to you by us.',
        ),
        paragraph(
          'The app also sends no persistent identifier of any kind: no account ID, no device ID, no installation ID, no session cookie, and no advertising identifier. Two requests from your phone are, to our servers, indistinguishable from two requests by different people.',
        ),
        paragraph(
          'The one exception anywhere in GoCerise is the mailing list on our website, which is described in section 1.6. It is entirely separate from the app: subscribing does not create an app account, and the app never sends us anything that could be linked to a subscriber.',
        ),
      ],
    },
    {
      id: 'stored-only-on-your-device',
      heading: '1.2 Information stored only on your device',
      blocks: [
        paragraph(
          'The following stays in the GoCerise app’s storage on your phone. It is never uploaded to our servers, and we cannot see it:',
        ),
        table(
          ['What', 'Details'],
          [
            ['Grocery lists', 'List names, emoji, and the products you add, with quantities'],
            [
              'Shopping trip history',
              'For each trip you choose to log: the date, the store or stores, the items, quantities, prices paid, total, and estimated savings (up to the 500 most recent trips)',
            ],
            [
              'Spending insights',
              'Your monthly, weekly, and per-category spending and savings figures, calculated on the device from your own trip history',
            ],
            ['Location consent choice', 'Whether you accepted or declined location use'],
            ['Last typed address', 'The address or postal code you last searched, so the app can restore it'],
            ['Store preferences', 'Which grocery banners you want included, and your search radius'],
            ['Settings', 'Language (English/French), currency (CAD/USD), tutorial progress'],
            ['Exchange rate cache', 'The most recent CAD→USD rate, refreshed daily'],
          ],
        ),
        paragraph(
          'Logging a shopping trip is entirely optional. You can delete individual lists and trips inside the app. Uninstalling the app removes all of the above.',
        ),
      ],
    },
    {
      id: 'sent-to-our-servers',
      heading: '1.3 Information the app sends to our servers',
      blocks: [
        paragraph(
          'The app contacts our servers to answer questions about stores and prices. These requests carry no account identifier and no device identifier. They include:',
        ),
        list([
          {
            lead: 'Store searches.',
            text: 'Your coordinates (or the coordinates of the address you typed) and a search radius, so we can return the grocery stores around you.',
          },
          {
            lead: 'Product searches and browsing.',
            text: 'The text you type in the search box, the category you are browsing, your language, and your coordinates, so we can return matching products with prices at nearby stores.',
          },
          {
            lead: 'Trip planning.',
            text: 'The item names on the list you are pricing, the quantities, your coordinates, your search radius, and your store-banner preferences, so we can compute the cheapest combination of stores.',
          },
          {
            lead: 'Driving directions.',
            text: 'The coordinates of your starting point and of the stores on your route, so we can draw the driving route on the map.',
          },
          {
            lead: 'Trending products.',
            text: 'A request for the aggregated list of popular products described in section 8. It carries no information about you.',
          },
        ]),
        paragraph(
          'Of this, only one thing is written to our database: a trip-planning snapshot. When you plan a trip, we save the coordinates you sent, the item names being priced, and the candidate store prices under a randomly generated identifier, so that the prices you were shown do not change while you pick your route. Each snapshot expires 15 minutes after it is created and is then deleted automatically. It contains no account, device, or contact identifier and cannot be traced back to you by us.',
        ),
        paragraph(
          'Everything else in this section is processed to answer the request and then discarded, apart from what appears in the server logs described below.',
        ),
      ],
    },
    {
      id: 'collected-automatically',
      heading: '1.4 Information the app collects automatically',
      blocks: [
        list([
          {
            lead: 'Location.',
            text: 'With your permission, the app reads your device’s location to find grocery stores near you and to plan routes. Before the operating system’s permission prompt appears, GoCerise shows its own screen explaining what location is used for, that coordinates are processed on servers hosted in the United States, that maps are supplied by Google or Apple depending on your platform, and that you may decline. If you decline, or if you later withdraw consent in Settings, the app falls back to a default Montreal location and remains fully usable, and you can type an address or postal code instead.',
          },
          {
            lead: 'Address lookup.',
            text: 'When you type an address, or when the app labels your position with a city name, the conversion between address and coordinates is performed by your device’s operating system, using Apple’s location services on iOS and Google’s on Android. The address text is handled by that platform service under its own privacy policy. The result is cached only on your device.',
          },
          {
            lead: 'Server logs.',
            text: 'Like most online services, our servers record technical information about each request: the URL (which, for store and product searches, includes the search text and the coordinates in the query string), the HTTP method, a per-request identifier, the response status, and the response time. Error responses may include the error message returned. Request bodies are not logged, so the coordinates and item names sent to the trip-planning and directions endpoints do not appear in the request log. Some internal diagnostic entries include product names while prices are being calculated.',
          },
          {
            lead: 'IP addresses.',
            text: 'Our own application logs record the network address of the connection reaching our server, which in our hosting setup is our provider’s internal proxy rather than your device. Separately, our hosting provider keeps its own platform-level record of each request that does include the originating IP address, along with the path requested and the browser or app identifier. We do not combine these records or use them to build a history of any individual, but we want you to know the provider holds them.',
          },
          {
            lead: 'How long logs live.',
            text: 'All of the above is kept for security, abuse prevention, and debugging, and is deleted automatically by our hosting provider after a fixed window of no more than 30 days. We cannot extend it and we do not copy logs anywhere else, so nothing in this category survives beyond that window.',
          },
          {
            lead: 'Rate limiting.',
            text: 'Several endpoints limit how many requests one IP address may make per minute, to prevent abuse. This uses the IP address in memory only and stores nothing.',
          },
        ]),
      ],
    },
    {
      id: 'what-we-do-not-collect',
      heading: '1.5 Information we do NOT collect',
      blocks: [
        paragraph(
          'We do not collect: accounts or passwords; payment or banking information; your contacts, photos, calendar, microphone, or camera; health data; device advertising identifiers; push notification tokens; or analytics about how you use the app or the website. The app requests no microphone or storage permissions, and neither the app nor the site contains advertising, analytics, attribution, or crash-reporting software, or tracks you across other apps or websites.',
        ),
        paragraph(
          'Because this is an area where grocery and shopping apps commonly do more than users expect, we want to be specific about what GoCerise does not do:',
        ),
        list([
          {
            lead: 'No cookies, web beacons, or tracking pixels.',
            text: 'The app is native software, not a website wrapped in one. The website sets no cookies and stores nothing in your browser. Neither embeds tracking technologies.',
          },
          {
            lead: 'No advertising of any kind.',
            text: 'No ads, no ad exchanges, no ad-serving partners, and no behavioural or targeted advertising. Nothing you search for or buy is used to select advertising for you, here or anywhere else.',
          },
          {
            lead: 'No advertising or tracking identifiers.',
            text: 'We do not collect the Advertising ID on Android or the IDFA on iOS, and we do not build a cross-app or cross-site profile of you.',
          },
          {
            lead: 'No browsing or purchase surveillance.',
            text: 'GoCerise does not observe your web browsing, your search engine history, your email, or your purchases at retailers. It cannot see what you buy, only what you choose to record in the app, which stays on your phone.',
          },
          {
            lead: 'No selling or renting of personal information,',
            text: 'and no sharing with data brokers.',
          },
          {
            lead: 'No AI training on your data.',
            text: 'We do not use your searches, your lists, your shopping history, or your location to train, fine-tune, or evaluate artificial intelligence models, neither our own nor anyone else’s. The app contains no AI assistant and no chat feature, so there are no conversations for us to hold or learn from.',
          },
          {
            lead: 'No audience segments or interest profiling.',
            text: 'We do not sort you into marketing categories, we do not build interest-based segments from your shopping, and we do not use your behaviour to select sponsored products or deals. Nothing in the app is sponsored.',
          },
          {
            lead: 'No aggregate insights sold to partners.',
            text: 'Some companies package “anonymized” shopping trends and sell them to retailers, brands, or market researchers. We do not do this, in identifiable or aggregate form.',
          },
          {
            lead: 'No purchases, no payment processor.',
            text: 'GoCerise is free. There is no subscription, no in-app purchase, and no payment provider involved, so no billing identity exists for you anywhere.',
          },
          {
            lead: 'No marketing email unless you ask for it.',
            text: 'We do not email app users, because we do not have their addresses. The only people we email are those who signed up for the mailing list on our website, and only until they unsubscribe.',
          },
        ]),
        paragraph(
          'If you use the in-app feedback option, your message is composed in your own email app and sent to help@gocerise.com. It is not transmitted through or stored by our application servers. If you write to us, we will hold whatever you choose to put in that email, including your email address.',
        ),
      ],
    },
    {
      id: 'the-website',
      heading: '1.6 The GoCerise website',
      blocks: [
        paragraph(
          'Our website at gocerise.com is a small set of informational pages plus a mailing list sign-up form.',
        ),
        paragraph(
          'The mailing list. If you enter your name and email address and submit the form, we store those two pieces of information so that we can send you the emails you signed up for: product news and updates about GoCerise. That is the only purpose. We do not use your address for advertising, we do not add you to any other list, and we do not share or sell it. Your submission is sent from your browser directly to Supabase, the database service that stores the list, which also sees the IP address your browser connects from.',
        ),
        paragraph(
          'Signing up is entirely optional; nothing on the site or in the app requires it, and you are never added to the list by any means other than filling in that form yourself.',
        ),
        paragraph(
          'Our commitments when we email you. Canada’s Anti-Spam Legislation (CASL) governs commercial email sent to Canadian addresses, and we hold ourselves to it:',
        ),
        list([
          {
            text: 'We email you only because you asked us to. Filling in the sign-up form is express consent. We do not buy, rent, scrape, or import addresses, and we do not add app users to the list, because we do not have their addresses.',
          },
          {
            text: 'Every message identifies us. Each email states who is sending it, gives our postal mailing address, and provides a way to reach us.',
          },
          {
            text: 'Every message has a working unsubscribe link, presented clearly and prominently. It stays functional for at least 60 days after the message is sent.',
          },
          {
            text: 'We act on unsubscribes within 10 business days, and in practice as quickly as we can process them.',
          },
          {
            text: 'You can also unsubscribe by writing to help@gocerise.com, and we will treat that exactly like clicking the link.',
          },
          {
            text: 'We keep proof of consent. So that we can demonstrate you did ask to hear from us, we record when you signed up and what the form told you at the time.',
          },
        ]),
        paragraph(
          'What happens when you unsubscribe. We remove your name and email address from the mailing list itself. We keep a minimal record (your email address and the fact that you opted out) on a suppression list, for the sole purpose of making sure you are not added back or emailed again by mistake. It is never used to contact you. If you would rather we erase that record too, tell us and we will, though we then lose the ability to guarantee you are not re-added if you or someone else enters your address again.',
        ),
        paragraph(
          'No analytics and no cookies. The website runs no analytics software of any kind: no Google Analytics, no PostHog, no Plausible, no Meta Pixel, and no other third-party measurement or advertising tags. Every script it loads is our own, served from our own domain. It sets no cookies and writes nothing to your browser’s local or session storage, which is why you will not see a cookie consent banner: there is nothing to consent to. Web fonts are bundled into the site at build time and served from our domain, so displaying a page makes no request to Google or any other font provider.',
        ),
        paragraph(
          'Server logs. The website is hosted by Vercel, which records standard web-server request logs including IP addresses, for security and operational purposes, under the retention window described in section 6.',
        ),
      ],
    },
  ],
}
