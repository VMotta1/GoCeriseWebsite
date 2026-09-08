import Image from 'next/image'

/**
 * Store badges, Apple above Android.
 *
 * Google ships its badge with required clear space baked into the canvas: only
 * 168 of its 250px height is the badge itself. Sizing both to the same height
 * would render Google a third smaller, so the CSS scales its canvas to 77px
 * (52 / 0.672) and cancels the ~13px of padding it then carries, leaving both
 * badges 52px tall with an even gap. Its padding is symmetric, so centring the
 * column lines the two up without any horizontal correction.
 */
export default function StoreBadges() {
  return (
    <div className="footer-badges">
      <Image
        className="footer-badge-apple"
        src="/assets/app-store-badge.svg"
        alt="Download on the App Store"
        width={156}
        height={52}
      />
      <Image
        className="footer-badge-google"
        src="/assets/google-play-badge.png"
        alt="Get it on Google Play"
        width={199}
        height={77}
      />
    </div>
  )
}
