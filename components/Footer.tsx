'use client'

export default function Footer() {
  return (
    <footer
      id="about"
      style={{ width: '100%', background: '#9AC04D' }}
    >
      <div
        className="footer-inner"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '128px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
        }}
      >
        <div className="footer-main" style={{ display: 'flex', flexDirection: 'row', gap: 64 }}>
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: 288 }}>
            <div style={{ fontWeight: 700, fontSize: 30, color: '#343434' }}>GoCerise</div>
            <div style={{ fontSize: 20, color: '#343434' }}>Cherry pick your grocery price</div>
          </div>

          {/* Links */}
          <div className="footer-links" style={{ flex: 1, display: 'flex', gap: 64, marginLeft: 'auto', flexWrap: 'wrap' }}>
            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#343434' }}>Contact</div>
              <div className="footer-contact-cols" style={{ display: 'flex', gap: 64 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'Email', href: 'mailto:help@gocerise.com' },
                    { label: 'Instagram', href: '#' },
                    { label: 'LinkedIn', href: '#' },
                  ].map(link => (
                    <a key={link.label} href={link.href}
                      style={{ fontSize: 15, color: '#343434', textDecoration: 'none', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >{link.label}</a>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'TikTok', href: '#' },
                    { label: 'Twitter', href: '#' },
                    { label: 'Facebook', href: '#' },
                  ].map(link => (
                    <a key={link.label} href={link.href}
                      style={{ fontSize: 15, color: '#343434', textDecoration: 'none', transition: 'opacity 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                    >{link.label}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal & Support */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginLeft: 'auto' }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#343434' }}>Legal &amp; Support</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'help@gocerise.com', href: 'mailto:help@gocerise.com' },
                ].map(link => (
                  <a key={link.label} href={link.href}
                    style={{ fontSize: 15, color: '#343434', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >{link.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: 20, color: '#343434', textAlign: 'center' }}>
          © 2026 GoCerise. All rights reserved.
        </div>
      </div>
    </footer>
  )
}