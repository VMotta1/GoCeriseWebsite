export type FaqItem = {
  /** Stable anchor id, so a single question can be linked to directly. */
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'nationwide',
    question: 'Will this work nationwide?',
    answer:
      'It is our goal to roll out GoCerise nationwide eventually, but right now the app only works in Quebec. We will update you on our socials as our coverage area expands!',
  },
  {
    id: 'independent-stores',
    question: 'Does it work with smaller and independent grocery stores?',
    answer:
      'Currently we are trying to cater to as wide of an audience as possible, meaning many smaller grocers are not on our platform yet. This is because regardless of size, onboarding price data takes up a considerable amount of work and we want to add the big stores first. However, as we expand our reach, we do plan on adding small and independent grocery stores onto our platform as well! As usual, you can tune into our socials for any updates on store coverage.',
  },
  {
    id: 'how-the-app-works',
    question: 'How does the app work?',
    answer:
      'The GoCerise platform lets users create their own shopping list and then compare this list across all the grocery stores in their desired area. This full-basket comparison lets users have a better understanding of prices in their environment.',
  },
  {
    id: 'brands-and-allergies',
    question: 'What information does GoCerise provides about brands and allergies?',
    answer: 'GoCerise currently mainly provides pricing information for grocery items.',
  },
  {
    id: 'spending-tracking',
    question: 'Does GoCerise track spending?',
    answer:
      'Yes! Within the app, the users can see how much they’ve spent on their trips over a customizable period of time, as well as see how much money they saved',
  },
  {
    id: 'versus-flipp',
    question: 'How is GoCerise different than Flipp?',
    answer:
      'While Flipp is a digital flyer viewing application, GoCerise works with you and your needs in the center: you create your basket based on what you want to buy, you choose how far you want to travel for your groceries and GoCerise gives you the most optimized route.',
  },
  {
    id: 'brand-preferences',
    question:
      'I like a certain brand more than others when it comes to certain products, how does GoCerise handle this?',
    answer:
      'GoCerise lets you pick brands so you can simply pick the brand you want and let us find the best prices for the brand you love in your area!',
  },
  {
    id: 'specialty-items',
    question: 'Does GoCerise do specialty items like deli meat or cheese?',
    answer:
      'Yes! GoCerise has price data on almost all grocery items, whether that be deli meats, produce, frozen foods, drinks, or more!',
  },
]
