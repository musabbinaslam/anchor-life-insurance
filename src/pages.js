/* ═══════════════════════════════════════════════════════════
   ANCHOR LINE INSURANCE — PAGE TEMPLATES
   All page content with rich imagery from Unsplash
   ═══════════════════════════════════════════════════════════ */

// Curated high-quality images
const IMG = {
  hero: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80',
  heroOverlay: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
  homeIns: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  autoIns: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
  liabilityIns: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  lifeIns: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
  floodIns: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&q=80',
  boatIns: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80',
  motoIns: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80',
  family: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  florida1: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=600&q=80',
  florida2: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80',
  florida3: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80',
  claims: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  career: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
  review1: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  review2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  review3: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
};

// ═══════════════ HOME PAGE ═══════════════
export function homePage() {
  return `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="${IMG.hero}" alt="Beautiful Florida waterfront home" class="hero-bg-img" />
        <div class="hero-overlay"></div>
        <div class="hero-particles" id="heroParticles"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge anim">Trusted by Florida Families Since Day One</div>
        <h1 class="hero-title anim">Live Life<br /><span class="hero-highlight">Secure</span></h1>
        <p class="hero-subtitle anim">Agents standing by to give you the best quote. Comprehensive Home, Auto, Life & Business insurance tailored for Florida residents.</p>
        <div class="hero-actions anim">
          <a href="#/quote" class="btn btn-primary btn-glow"><span>Get Your Free Quote</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="tel:2395421117" class="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span>(239) 542-1117</span>
          </a>
        </div>
        <div class="hero-stats anim">
          <div class="stat"><span class="stat-number" data-target="7">0</span><span class="stat-label">Insurance Types</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-number" data-target="3">0</span><span class="stat-label">Office Locations</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-number" data-target="20" data-suffix="+">0</span><span class="stat-label">Carrier Partners</span></div>
        </div>
      </div>
      <div class="hero-scroll-indicator"><span>Scroll</span><div class="scroll-line"></div></div>
    </section>

    <!-- SERVICE PREVIEW CARDS -->
    <section class="section services-preview">
      <div class="container">
        <div class="section-header anim">
          <span class="section-tag">What We Offer</span>
          <h2 class="section-title">Comprehensive <span class="text-gradient">Insurance Solutions</span></h2>
          <p class="section-desc">From your home to your boat, we've got every aspect of your life covered.</p>
        </div>
        <div class="img-card-grid">
          <a href="#/services?s=home" class="img-card anim">
            <img src="${IMG.homeIns}" alt="Beautiful home in Florida" loading="lazy" />
            <div class="img-card-overlay">
              <h3>Home Insurance</h3>
              <p>Protect your most valuable asset</p>
            </div>
          </a>
          <a href="#/services?s=auto" class="img-card anim" data-delay="100">
            <img src="${IMG.autoIns}" alt="Modern car on road" loading="lazy" />
            <div class="img-card-overlay">
              <h3>Auto Insurance</h3>
              <p>Drive with confidence</p>
            </div>
          </a>
          <a href="#/services?s=life" class="img-card anim" data-delay="200">
            <img src="${IMG.lifeIns}" alt="Happy family together" loading="lazy" />
            <div class="img-card-overlay">
              <h3>Life Insurance</h3>
              <p>Plan for your family's future</p>
            </div>
          </a>
          <a href="#/services?s=flood" class="img-card anim" data-delay="300">
            <img src="${IMG.floodIns}" alt="Florida waterway" loading="lazy" />
            <div class="img-card-overlay">
              <h3>Flood Insurance</h3>
              <p>Stay safe from water damage</p>
            </div>
          </a>
          <a href="#/services?s=boat" class="img-card anim" data-delay="400">
            <img src="${IMG.boatIns}" alt="Boat on open water" loading="lazy" />
            <div class="img-card-overlay">
              <h3>Boat Insurance</h3>
              <p>Enjoy the water with peace of mind</p>
            </div>
          </a>
          <a href="#/services?s=motorcycle" class="img-card anim" data-delay="500">
            <img src="${IMG.motoIns}" alt="Motorcycle on highway" loading="lazy" />
            <div class="img-card-overlay">
              <h3>Motorcycle Insurance</h3>
              <p>Hit the road with security</p>
            </div>
          </a>
        </div>
        <div class="text-center anim" style="margin-top:2.5rem">
          <a href="#/services" class="btn btn-outline">View All Services →</a>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="section why-us">
      <div class="container">
        <div class="split-section">
          <div class="split-image anim">
            <img src="${IMG.family}" alt="Family feeling protected" loading="lazy" />
            <div class="img-badge">
              <span class="img-badge-number">20+</span>
              <span class="img-badge-text">Carrier Partners</span>
            </div>
          </div>
          <div class="split-content anim">
            <span class="section-tag">Why Choose Us</span>
            <h2 class="section-title">Your Trusted <span class="text-gradient">Insurance Partner</span></h2>
            <p>At Anchor Line Insurance, we specialize in providing comprehensive insurance solutions tailored to the unique needs of Florida residents.</p>
            <div class="feature-list">
              <div class="feature-item">
                <div class="feature-icon-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
                <div>
                  <strong>Effortless Claims</strong>
                  <p>Quick and hassle-free claims process so you can focus on what matters most.</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0114 0v2"/><path d="M19 8l2 2 4-4"/></svg>
                </div>
                <div>
                  <strong>Expert Guidance</strong>
                  <p>Personalized support from our knowledgeable team every step of the way.</p>
                </div>
              </div>
              <div class="feature-item">
                <div class="feature-icon-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <div>
                  <strong>Electronic Access</strong>
                  <p>Manage your policies and claims through our user-friendly online platform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <section class="section reviews-section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-tag">Testimonials</span>
          <h2 class="section-title">What Our Clients <span class="text-gradient">Say</span></h2>
        </div>
        <div class="reviews-grid">
          <div class="review-card anim">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"Christian took the time to really understand what I needed and found a policy that was perfect for me. Plus, he saved me some money in the process. Really impressed!"</p>
            <div class="review-author">
              <img src="${IMG.review1}" alt="Sarah M." class="review-avatar" loading="lazy" />
              <div><strong>Sarah M.</strong><span>Cape Coral, FL</span></div>
            </div>
          </div>
          <div class="review-card anim" data-delay="150">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"Polina explained everything in a way that made sense and didn't rush me through the process. I ended up with coverage that fits my needs perfectly."</p>
            <div class="review-author">
              <img src="${IMG.review2}" alt="David R." class="review-avatar" loading="lazy" />
              <div><strong>David R.</strong><span>Fort Myers, FL</span></div>
            </div>
          </div>
          <div class="review-card anim" data-delay="300">
            <div class="review-stars">★★★★★</div>
            <p class="review-text">"Joel was patient with all my questions and helped me feel confident about my coverage. I left feeling like I was in good hands."</p>
            <div class="review-author">
              <img src="${IMG.review3}" alt="Emily P." class="review-avatar" loading="lazy" />
              <div><strong>Emily P.</strong><span>Naples, FL</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="cta-bg">
        <img src="${IMG.florida1}" alt="Florida coastline" loading="lazy" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container cta-content anim">
        <h2>Ready to Protect What Matters Most?</h2>
        <p>Get a personalized quote from our expert agents today — no obligation, no hassle.</p>
        <div class="cta-actions">
          <a href="#/quote" class="btn btn-primary btn-glow">Get a Free Quote</a>
          <a href="tel:2395421117" class="btn btn-outline">(239) 542-1117</a>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="section newsletter-section">
      <div class="container">
        <div class="newsletter-inner anim">
          <div class="newsletter-text">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with the latest insurance tips and news.</p>
          </div>
          <form class="newsletter-form" id="newsletterForm">
            <input type="email" placeholder="Enter your email..." required />
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// ═══════════════ SERVICES PAGE ═══════════════
export function servicesPage() {
  return `
    <!-- PAGE HERO -->
    <section class="page-hero">
      <img src="${IMG.heroOverlay}" alt="Florida luxury home" class="page-hero-img" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content anim">
        <span class="section-tag">Our Services</span>
        <h1 class="page-hero-title">Insurance <span class="text-gradient">Solutions</span></h1>
        <p>Comprehensive coverage for every aspect of your Florida lifestyle.</p>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="section">
      <div class="container">
        <!-- Home -->
        <div class="service-detail anim" id="home">
          <div class="service-detail-img">
            <img src="${IMG.homeIns}" alt="Modern Florida home" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Residential</span>
            <h2>Home Insurance</h2>
            <p>Protect your most valuable asset with comprehensive coverage against hurricanes, floods, fires, and theft. Our policies are tailored specifically for Florida homeowners who face unique weather challenges.</p>
            <ul class="service-bullets">
              <li>Hurricane & wind damage protection</li>
              <li>Personal property coverage</li>
              <li>Liability protection</li>
              <li>Additional living expenses</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Home Quote</a>
          </div>
        </div>

        <!-- Auto -->
        <div class="service-detail reverse anim" id="auto">
          <div class="service-detail-img">
            <img src="${IMG.autoIns}" alt="Car on road" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Vehicle</span>
            <h2>Auto Insurance</h2>
            <p>Drive with confidence knowing you're fully covered. Our auto insurance policies provide extensive protection against accidents, theft, and liability at competitive rates across Florida.</p>
            <ul class="service-bullets">
              <li>Collision & comprehensive coverage</li>
              <li>Uninsured motorist protection</li>
              <li>Personal injury protection (PIP)</li>
              <li>Roadside assistance</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Auto Quote</a>
          </div>
        </div>

        <!-- Liability -->
        <div class="service-detail anim" id="liability">
          <div class="service-detail-img">
            <img src="${IMG.liabilityIns}" alt="Professional office" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Business</span>
            <h2>Liability Insurance</h2>
            <p>Shield your assets with robust liability coverage. Whether you're a homeowner or business owner, our policies protect you from legal claims and financial losses.</p>
            <ul class="service-bullets">
              <li>General liability coverage</li>
              <li>Professional liability</li>
              <li>Umbrella policies</li>
              <li>Business owner's policies</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Liability Quote</a>
          </div>
        </div>

        <!-- Life -->
        <div class="service-detail reverse anim" id="life">
          <div class="service-detail-img">
            <img src="${IMG.lifeIns}" alt="Happy family" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Family</span>
            <h2>Life Insurance</h2>
            <p>Plan for your family's future with a range of term and whole life policies. Ensure your loved ones are financially protected no matter what life brings.</p>
            <ul class="service-bullets">
              <li>Term life policies</li>
              <li>Whole life coverage</li>
              <li>Final expense insurance</li>
              <li>Family financial planning</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Life Quote</a>
          </div>
        </div>

        <!-- Flood -->
        <div class="service-detail anim" id="flood">
          <div class="service-detail-img">
            <img src="${IMG.floodIns}" alt="Waterway in Florida" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Weather</span>
            <h2>Flood Insurance</h2>
            <p>Stay safe against the unpredictable nature of water damage. Florida's unique geography demands specialized flood coverage designed to meet local regulations and your needs.</p>
            <ul class="service-bullets">
              <li>NFIP & private flood options</li>
              <li>Building & contents coverage</li>
              <li>Basement & foundation protection</li>
              <li>Rapid claims processing</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Flood Quote</a>
          </div>
        </div>

        <!-- Boat -->
        <div class="service-detail reverse anim" id="boat">
          <div class="service-detail-img">
            <img src="${IMG.boatIns}" alt="Boat on water" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Marine</span>
            <h2>Boat Insurance</h2>
            <p>Enjoy the water knowing your vessel is fully protected. Whether it's a fishing boat or a yacht, we've got coverage against accidents, theft, and liability for every adventure.</p>
            <ul class="service-bullets">
              <li>Hull & motor coverage</li>
              <li>Liability protection</li>
              <li>Salvage & wreck removal</li>
              <li>Personal effects coverage</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Boat Quote</a>
          </div>
        </div>

        <!-- Motorcycle -->
        <div class="service-detail anim" id="motorcycle">
          <div class="service-detail-img">
            <img src="${IMG.motoIns}" alt="Motorcycle on highway" loading="lazy" />
          </div>
          <div class="service-detail-content">
            <span class="section-tag">Recreational</span>
            <h2>Motorcycle Insurance</h2>
            <p>Hit the open road with security. Our motorcycle insurance provides comprehensive protection against accidents, theft, and liability for daily commuters and weekend warriors alike.</p>
            <ul class="service-bullets">
              <li>Collision & comprehensive</li>
              <li>Accessory coverage</li>
              <li>Medical payments</li>
              <li>Uninsured motorist</li>
            </ul>
            <a href="#/quote" class="btn btn-primary">Get Motorcycle Quote</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <div class="cta-bg"><img src="${IMG.florida2}" alt="Florida" loading="lazy" /><div class="cta-overlay"></div></div>
      <div class="container cta-content anim">
        <h2>Not Sure What Coverage You Need?</h2>
        <p>Our agents will walk you through every option and help you find the perfect plan.</p>
        <a href="#/contact" class="btn btn-primary btn-glow">Talk to an Agent</a>
      </div>
    </section>
  `;
}

// ═══════════════ CLAIMS PAGE ═══════════════
export function claimsPage() {
  const carriers = [
    { name: 'Allstate', phone: '800-547-8676', domain: 'allstate.com' },
    { name: 'Cabrillo Coastal', phone: '866-482-5246', domain: 'cabgen.com' },
    { name: 'Cypress', phone: '888-352-9773', domain: 'cypressinsurance.com' },
    { name: 'Florida Peninsula', phone: '866-549-9672', domain: 'floridapeninsula.com' },
    { name: 'Security First', phone: '877-581-4862', domain: 'securityfirstflorida.com' },
    { name: 'Tower Hill', phone: '866-482-5246', domain: 'thig.com' },
    { name: 'Universal', phone: '866-262-8200', domain: 'universalproperty.com' },
    { name: 'UPC Insurance', phone: '800-862-3246', domain: 'upcinsurance.com' },
    { name: 'Slide', phone: '866-230-3758', domain: 'slideinsurance.com' },
    { name: 'Monarch National', phone: '866-482-5246', domain: 'monarchnational.com' },
    { name: 'Castle Key', phone: '800-255-7828', domain: 'allstate.com' },
    { name: 'American Modern', phone: '800-543-2644', domain: 'americanmodern.com' },
    { name: 'AonEdge', phone: '844-640-2522', domain: 'aonedge.com' },
    { name: 'American Integrity', phone: '866-482-5246', domain: 'americanintegrity.com' },
    { name: 'Citizens', phone: '866-411-2742', domain: 'citizensfla.com' },
    { name: 'Cypress P&C', phone: '877-560-5224', domain: 'cypressinsurance.com' },
    { name: 'Homeowners Choice', phone: '844-640-2522', domain: 'hcpci.com' },
    { name: 'Southern Oak', phone: '866-482-5246', domain: 'southernoakins.com' },
    { name: 'GeoVera', phone: '866-411-2742', domain: 'geovera.com' },
    { name: 'SafePoint', phone: '877-560-5224', domain: 'safepointins.com' }
  ];

  return `
    <section class="page-hero">
      <img src="${IMG.claims}" alt="Filing a claim" class="page-hero-img" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content anim">
        <span class="section-tag">File a Claim</span>
        <h1 class="page-hero-title">Our Carrier <span class="text-gradient">Partners</span></h1>
        <p>Direct claims reporting for faster processing and peace of mind.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="claims-intro anim">
          <img src="${IMG.office}" alt="Professional office" class="claims-intro-img" loading="lazy" />
          <div class="claims-intro-text">
            <h2>Need to File a Claim?</h2>
            <p>Contact your carrier directly for the fastest service, or call our office if you need guidance.</p>
            <a href="tel:2395421117" class="btn btn-primary">Call Our Office: (239) 542-1117</a>
          </div>
        </div>

        <div class="claims-grid">
          ${carriers.map(c => `
            <div class="claim-card anim">
              <div class="claim-logo-box">
                <img src="https://logo.clearbit.com/${c.domain}" alt="${c.name} logo" class="claim-logo" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(c.name)}&background=random&color=fff&size=128'" />
              </div>
              <div class="claim-content">
                <h3 class="claim-name">${c.name}</h3>
                <a href="tel:${c.phone.replace(/[^0-9]/g, '')}" class="claim-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  ${c.phone}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ═══════════════ ABOUT PAGE ═══════════════
export function aboutPage() {
  return `
    <section class="page-hero">
      <img src="${IMG.team}" alt="Our team" class="page-hero-img" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content anim">
        <span class="section-tag">About Us</span>
        <h1 class="page-hero-title">Your Local <span class="text-gradient">Insurance Experts</span></h1>
        <p>Serving Fort Myers, Cape Coral, Lehigh, and Naples with personalized insurance solutions.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split-section">
          <div class="split-image anim">
            <img src="${IMG.family}" alt="Protected family" loading="lazy" />
          </div>
          <div class="split-content anim">
            <h2 class="section-title">Who We <span class="text-gradient">Are</span></h2>
            <p>At Anchor Line Insurance, we specialize in providing comprehensive Home, Auto, Business, and Life insurance solutions tailored to the unique needs of Florida residents.</p>
            <p>Serving Fort Myers, Cape Coral, Lehigh, and Naples, we are committed to delivering unparalleled service and expert guidance to ensure you get the best coverage at the most competitive rates.</p>
            <p>Our quick quotes and personalized approach make it easy to protect what matters most to you.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section values-section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-tag">Our Values</span>
          <h2 class="section-title">What Sets Us <span class="text-gradient">Apart</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-card anim">
            <div class="value-img"><img src="${IMG.florida1}" alt="Florida community" loading="lazy" /></div>
            <h3>Community First</h3>
            <p>We're a local agency serving our Florida neighbors with care and dedication.</p>
          </div>
          <div class="value-card anim" data-delay="150">
            <div class="value-img"><img src="${IMG.florida3}" alt="Florida home" loading="lazy" /></div>
            <h3>Personalized Service</h3>
            <p>Every policy is tailored to your specific needs — no cookie-cutter solutions.</p>
          </div>
          <div class="value-card anim" data-delay="300">
            <div class="value-img"><img src="${IMG.florida2}" alt="Florida neighborhood" loading="lazy" /></div>
            <h3>Competitive Rates</h3>
            <p>Access to 20+ carriers means we find you the best coverage at the best price.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations -->
    <section class="section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-tag">Our Offices</span>
          <h2 class="section-title">Visit Us <span class="text-gradient">Today</span></h2>
        </div>
        <div class="locations-grid">
          <div class="location-card glass-card anim">
            <div class="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-81.9655!3d26.5944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db414f2b0b76c5%3A0x1234567890!2s3423+Chiquita+Blvd+S%2C+Cape+Coral%2C+FL+33914!5e0!3m2!1sen!2sus" width="100%" height="200" style="border:0;border-radius:12px 12px 0 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="location-info">
              <h4>Cape Coral — Main</h4>
              <p>3423 Chiquita Blvd S<br>Cape Coral, FL 33914</p>
              <a href="tel:2395421117" class="location-phone">(239) 542-1117</a>
            </div>
          </div>
          <div class="location-card glass-card anim" data-delay="150">
            <div class="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-82.0988!3d26.9792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db414f2b0b76c5%3A0x1234567891!2s2605+Tamiami+Trl%2C+Port+Charlotte%2C+FL+33952!5e0!3m2!1sen!2sus" width="100%" height="200" style="border:0;border-radius:12px 12px 0 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="location-info">
              <h4>Port Charlotte</h4>
              <p>2605 Tamiami Trl Ste 2<br>Port Charlotte, FL 33952</p>
              <a href="tel:9416275180" class="location-phone">(941) 627-5180</a>
            </div>
          </div>
          <div class="location-card glass-card anim" data-delay="300">
            <div class="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-81.9891!3d26.5633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db414f2b0b76c5%3A0x1234567892!2s2135+Santa+Barb+Blvd%2C+Cape+Coral%2C+FL+33991!5e0!3m2!1sen!2sus" width="100%" height="200" style="border:0;border-radius:12px 12px 0 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="location-info">
              <h4>Cape Coral — South</h4>
              <p>2135 Santa Barb Blvd Ste 103<br>Cape Coral, FL 33991</p>
              <a href="tel:2394581122" class="location-phone">(239) 458-1122</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ═══════════════ CAREER PAGE ═══════════════
export function careerPage() {
  return `
    <section class="page-hero">
      <img src="${IMG.career}" alt="Join our team" class="page-hero-img" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content anim">
        <span class="section-tag">Join Our Team</span>
        <h1 class="page-hero-title">We Are <span class="text-gradient">Hiring</span></h1>
        <p>Build your career with Florida's growing insurance agency.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="split-section">
          <div class="split-content anim">
            <h2 class="section-title">Why Work <span class="text-gradient">With Us</span></h2>
            <p>Are you looking for a new career? We have several openings in Insurance Sales, Service, Support and Marketing! Our office in Fort Myers, Florida is growing!</p>
            <p>Come join a team of talented individuals serving our community with their insurance needs!</p>
            <div class="perks-grid">
              <div class="perk"><span class="perk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg></span> Full Time Work Schedule</div>
              <div class="perk"><span class="perk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span> Flexible Hours</div>
              <div class="perk"><span class="perk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span> Paid Time Off</div>
              <div class="perk"><span class="perk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></span> Holiday Pay</div>
              <div class="perk"><span class="perk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg></span> Base Salaries + Commission</div>
              <div class="perk"><span class="perk-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></span> Growth Opportunities</div>
            </div>
            <p class="accent-text">Insurance Experience is preferred but not required!</p>
          </div>
          <div class="split-image anim">
            <img src="${IMG.team}" alt="Our team" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section form-section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-tag">Apply Now</span>
          <h2 class="section-title">Employment <span class="text-gradient">Application</span></h2>
        </div>
        <form class="page-form glass-card anim" id="careerForm">
          <div class="form-row">
            <div class="form-group"><label for="careerFirst">First Name</label><input type="text" id="careerFirst" required /></div>
            <div class="form-group"><label for="careerLast">Last Name</label><input type="text" id="careerLast" required /></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label for="careerPhone">Phone</label><input type="tel" id="careerPhone" required /></div>
            <div class="form-group"><label for="careerEmail">Email</label><input type="email" id="careerEmail" required /></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label for="careerDOB">Birth Date</label><input type="date" id="careerDOB" /></div>
            <div class="form-group"><label for="careerCerts">Certifications</label><input type="text" id="careerCerts" placeholder="Any professional certifications?" /></div>
          </div>
          <div class="form-group"><label for="careerExp">Work Experience</label><textarea id="careerExp" rows="3" placeholder="What is your work experience?"></textarea></div>
          <div class="form-group"><label for="careerWhy">Why should we hire you?</label><textarea id="careerWhy" rows="3"></textarea></div>
          <button type="submit" class="btn btn-primary btn-full">Submit Application</button>
        </form>
      </div>
    </section>
  `;
}

// ═══════════════ QUOTE PAGE ═══════════════
export function quotePage() {
  return `
    <section class="page-hero page-hero-short">
      <img src="${IMG.florida3}" alt="Florida home" class="page-hero-img" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content anim">
        <span class="section-tag">Get Protected</span>
        <h1 class="page-hero-title">Request a <span class="text-gradient">Free Quote</span></h1>
        <p>Fill out the form and one of our expert agents will reach out with a personalized quote.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="quote-layout">
          <div class="quote-sidebar anim">
            <div class="quote-benefit-card glass-card">
              <h3>Why Get a Quote?</h3>
              <div class="q-benefit"><span>✓</span> No obligation, free quote</div>
              <div class="q-benefit"><span>✓</span> Compare rates from 20+ carriers</div>
              <div class="q-benefit"><span>✓</span> Response within 24 hours</div>
              <div class="q-benefit"><span>✓</span> Personalized coverage plans</div>
            </div>
            <div class="quote-contact-card glass-card">
              <h3>Prefer to Call?</h3>
              <a href="tel:2395421117" class="quote-phone">(239) 542-1117</a>
              <a href="tel:9416275180" class="quote-phone">(941) 627-5180</a>
              <a href="tel:2394581122" class="quote-phone">(239) 458-1122</a>
              <a href="tel:2398006521" class="quote-phone">(239) 800-6521</a>
              <a href="mailto:Info@Anchorlineinsurance.Com" class="quote-email">Info@Anchorlineinsurance.Com</a>
            </div>
          </div>
          <form class="page-form glass-card anim" id="quoteForm">
            <h3>Quote Details</h3>
            <div class="form-row">
              <div class="form-group"><label for="quoteFirst">First Name</label><input type="text" id="quoteFirst" required /></div>
              <div class="form-group"><label for="quoteLast">Last Name</label><input type="text" id="quoteLast" required /></div>
            </div>
            <div class="form-group"><label for="quoteEmail">Email</label><input type="email" id="quoteEmail" required /></div>
            <div class="form-group"><label for="quotePhone">Phone Number</label><input type="tel" id="quotePhone" required /></div>
            <div class="form-group"><label for="quoteLocation">Location</label><input type="text" id="quoteLocation" placeholder="City, State" /></div>
            <div class="form-group">
              <label for="quoteType">Insurance Type</label>
              <select id="quoteType">
                <option value="">Select type...</option>
                <option>Home Insurance</option>
                <option>Auto Insurance</option>
                <option>Life Insurance</option>
                <option>Liability Insurance</option>
                <option>Flood Insurance</option>
                <option>Boat Insurance</option>
                <option>Motorcycle Insurance</option>
              </select>
            </div>
            <div class="form-group"><label for="quoteMsg">Additional Details</label><textarea id="quoteMsg" rows="3" placeholder="Any specific coverage needs?"></textarea></div>
            <div class="form-checkbox">
              <input type="checkbox" id="quoteConsent" required />
              <label for="quoteConsent">By submitting, you agree to receive calls, texts, and emails from Anchor Line Insurance. Consent is not a condition of purchase.</label>
            </div>
            <button type="submit" class="btn btn-primary btn-full btn-glow">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// ═══════════════ CONTACT PAGE ═══════════════
export function contactPage() {
  return `
    <section class="page-hero">
      <img src="${IMG.contact}" alt="Contact us" class="page-hero-img" />
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content anim">
        <span class="section-tag">Get In Touch</span>
        <h1 class="page-hero-title">Contact <span class="text-gradient">Us</span></h1>
        <p>We'd love to hear from you. Reach out by phone, email, or visit one of our offices.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-layout">
          <div class="contact-info anim">
            <div class="contact-item">
              <div class="contact-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:2395421117">(239) 542-1117</a>
                <a href="tel:9416275180">(941) 627-5180</a>
                <a href="tel:2394581122">(239) 458-1122</a>
                <a href="tel:2398006521">(239) 800-6521</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:Info@Anchorlineinsurance.Com">Info@Anchorlineinsurance.Com</a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div>
                <h4>Locations</h4>
                <span>3423 Chiquita Blvd S, Cape Coral, FL 33914</span>
                <span>2605 Tamiami Trl Ste 2, Port Charlotte, FL 33952</span>
                <span>2135 Santa Barb Blvd Ste 103, Cape Coral, FL 33991</span>
              </div>
            </div>
            <div class="contact-socials">
              <a href="#" class="social-link" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="#" class="social-link" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" class="social-link" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="#" class="social-link" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a href="#" class="social-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a>
            </div>
          </div>
          <form class="page-form glass-card anim" id="contactForm">
            <h3>Send Us a Message</h3>
            <div class="form-group"><label for="contactName">Name</label><input type="text" id="contactName" required /></div>
            <div class="form-group"><label for="contactPhone">Phone</label><input type="tel" id="contactPhone" required /></div>
            <div class="form-group"><label for="contactEmail">Email</label><input type="email" id="contactEmail" required /></div>
            <div class="form-group"><label for="contactMsg">Message</label><textarea id="contactMsg" rows="5" required></textarea></div>
            <button type="submit" class="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- LOCATIONS -->
    <section class="section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-tag">Our Offices</span>
          <h2 class="section-title">Visit Us <span class="text-gradient">Today</span></h2>
        </div>
        <div class="locations-grid">
          <div class="location-card glass-card anim">
            <div class="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-81.9655!3d26.5944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db414f2b0b76c5%3A0x1234567890!2s3423+Chiquita+Blvd+S%2C+Cape+Coral%2C+FL+33914!5e0!3m2!1sen!2sus" width="100%" height="200" style="border:0;border-radius:12px 12px 0 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="location-info">
              <h4>Cape Coral — Main</h4>
              <p>3423 Chiquita Blvd S<br>Cape Coral, FL 33914</p>
              <a href="tel:2395421117" class="location-phone">(239) 542-1117</a>
            </div>
          </div>
          <div class="location-card glass-card anim" data-delay="150">
            <div class="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-82.0988!3d26.9792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db414f2b0b76c5%3A0x1234567891!2s2605+Tamiami+Trl%2C+Port+Charlotte%2C+FL+33952!5e0!3m2!1sen!2sus" width="100%" height="200" style="border:0;border-radius:12px 12px 0 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="location-info">
              <h4>Port Charlotte</h4>
              <p>2605 Tamiami Trl Ste 2<br>Port Charlotte, FL 33952</p>
              <a href="tel:9416275180" class="location-phone">(941) 627-5180</a>
            </div>
          </div>
          <div class="location-card glass-card anim" data-delay="300">
            <div class="location-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d-81.9891!3d26.5633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db414f2b0b76c5%3A0x1234567892!2s2135+Santa+Barb+Blvd%2C+Cape+Coral%2C+FL+33991!5e0!3m2!1sen!2sus" width="100%" height="200" style="border:0;border-radius:12px 12px 0 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="location-info">
              <h4>Cape Coral — South</h4>
              <p>2135 Santa Barb Blvd Ste 103<br>Cape Coral, FL 33991</p>
              <a href="tel:2394581122" class="location-phone">(239) 458-1122</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
