import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BarChart3, BrainCircuit, BriefcaseBusiness, Check, ChevronRight, Globe2, Handshake, LineChart, Mail, MapPin, Network, ShieldCheck, Sparkles, Target, TrendingUp, UsersRound } from 'lucide-react';
import './styles.css';

const expertises = [
  {
    icon: BriefcaseBusiness,
    title: 'Business Development',
    points: ['Acquisition client', 'Croissance commerciale', 'Stratégie de développement'],
  },
  {
    icon: Handshake,
    title: 'Strategic Relationship',
    points: ['Relation client stratégique', 'Négociation complexe', 'Accompagnement business'],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Performance',
    points: ['Optimisation commerciale', 'Performance business', 'Stratégie de croissance'],
  },
];

const credentials = [
  { value: '20+', label: 'années d’expérience' },
  { value: '3', label: 'marchés européens' },
  { value: 'B2B', label: 'relation stratégique' },
  { value: 'IA', label: 'automatisation & performance' },
];

const journey = [
  'Direction commerciale',
  'Développement business',
  'Immobilier & projets internationaux',
  'IA, automatisation & acquisition digitale',
];

const approach = [
  'Créer de la valeur avant de convaincre',
  'Comprendre les enjeux business réels',
  'Structurer une acquisition plus qualitative',
  'Renforcer la confiance dans la relation commerciale',
];

function App() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const form = event.target;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main>
      <section className="hero" id="top">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <nav className="nav">
          <a className="brand" href="#top" aria-label="Lejour Consulting accueil">
            <span>LC</span>
            <strong>Lejour Consulting</strong>
          </a>
          <div className="nav-links">
            <a href="#expertises">Expertises</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid section-shell">
          <div className="hero-copy reveal">
            <div className="eyebrow"><Sparkles size={16} /> Consulting business senior</div>
            <h1>Développement commercial • Relation stratégique • Growth & Acquisition</h1>
            <p>
              J’accompagne entreprises et professionnels dans leurs enjeux de croissance,
              d’acquisition client et de performance commerciale.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#parcours">Découvrir mon parcours <ArrowRight size={18} /></a>
              <a className="btn secondary" href="#expertises">Explorer mes expertises</a>
              <a className="btn ghost" href="#contact">Me contacter</a>
            </div>
          </div>

          <div className="hero-visual reveal delay">
            <div className="orbital-card main-card">
              <div className="card-topline">
                <span>Strategic Growth</span>
                <LineChart size={20} />
              </div>
              <div className="signal-chart">
                <span style={{ height: '34%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '46%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '66%' }} />
                <span style={{ height: '88%' }} />
              </div>
              <div className="metric-row">
                <div><strong>Relation</strong><small>Trust-driven</small></div>
                <div><strong>Acquisition</strong><small>Value-led</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy section-shell">
        <div className="quote-card reveal">
          <span>Philosophie</span>
          <h2>“Ma priorité a toujours été de comprendre comment créer suffisamment de valeur pour rendre la décision d’achat évidente.”</h2>
        </div>
      </section>

      <section className="section-shell section portrait-section">
        <div className="portrait-container reveal">
          <div className="portrait-image">
            <div className="portrait-placeholder">
              <img src="https://avignon-local-commercial-rentable-84140.presto-immo.com/wp-content/uploads/sites/220/2026/03/profil-frederic-lejour-lejour-consulting.jpg" alt="Frédéric Lejour" className="portrait-img" />
            </div>
          </div>
          <div className="portrait-content">
            <span>À propos</span>
            <h2>Frédéric Lejour</h2>
            <p>
              Plus de 20 ans d’expérience au service de la croissance et de la relation stratégique.
              Expert en développement commercial, négociation complexe et relation client stratégique,
              j’accompagne entreprises et professionnels dans leurs enjeux de croissance, d’acquisition
              et de performance commerciale.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section" id="expertises">
        <div className="section-heading reveal">
          <span>Expertises</span>
          <h2>Une approche commerciale senior, structurée autour de la valeur.</h2>
        </div>
        <div className="expertise-grid">
          {expertises.map((item) => {
            const Icon = item.icon;
            return (
              <article className="expertise-card reveal" key={item.title}>
                <div className="icon-box"><Icon size={24} /></div>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => <li key={point}><Check size={16} />{point}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section parcours" id="parcours">
        <div className="section-heading reveal">
          <span>Parcours</span>
          <h2>Plus de deux décennies au croisement du business, de la relation client et de la croissance.</h2>
        </div>
        <div className="stats-grid reveal">
          {credentials.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="timeline reveal">
          <div className="timeline-meta">
            <Globe2 size={22} /> France / Allemagne / Espagne
          </div>
          {journey.map((item, index) => (
            <div className="timeline-item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section approach">
        <div className="approach-panel reveal">
          <div>
            <span className="section-kicker">Approche</span>
            <h2>Un partenaire de confiance pour clarifier, structurer et accélérer le développement commercial.</h2>
            <p>
              Mon accompagnement combine compréhension business, intelligence relationnelle,
              stratégie d’acquisition et exigence de performance, avec une posture sobre,
              directe et orientée résultats durables.
            </p>
          </div>
          <div className="approach-list">
            {approach.map((item) => <div key={item}><ShieldCheck size={18} />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="contact section-shell section" id="contact">
        <div className="contact-card reveal">
          <div className="contact-copy">
            <span className="section-kicker">Contact</span>
            <h2>Échanger sur vos enjeux de croissance.</h2>
            <p>
              Une prise de contact simple et professionnelle pour qualifier vos priorités :
              acquisition, relation stratégique, performance commerciale ou transformation.
            </p>
            <div className="contact-details">
              <a href="mailto:frederic.lejour@lejourconsulting.com"><Mail size={18} /> frederic.lejour@lejourconsulting.com</a>
              <span><MapPin size={18} /> Europe • France / Allemagne / Espagne</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="21d49848-72e4-4d6c-99d2-6ed4c93e1a6d" />
            <input type="hidden" name="subject" value="Nouveau contact depuis LejourConsulting.com" />
            <input type="hidden" name="from_name" value="Lejour Consulting" />
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
            <label>Nom<input type="text" name="name" placeholder="Votre nom" required /></label>
            <label>Email<input type="email" name="email" placeholder="vous@entreprise.com" required /></label>
            <label>Téléphone<input type="tel" name="phone" placeholder="Votre numéro" /></label>
            <label>Entreprise<input type="text" name="company" placeholder="Votre entreprise" /></label>
            <label>Message<textarea name="message" rows="4" placeholder="Votre enjeu principal" required /></label>
            <button className="btn primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours…' : <>Envoyer la demande <ChevronRight size={18} /></>}
            </button>
            {status === 'error' && (
              <p role="alert" style={{ margin: 0, color: '#ff8585', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Une erreur est survenue. Merci de réessayer ou de me contacter directement par email.
              </p>
            )}
          </form>
        </div>

        {status === 'success' && (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            onClick={() => setStatus('idle')}
          >
            <div className="modal-card" onClick={(event) => event.stopPropagation()}>
              <div className="modal-icon"><Check size={28} /></div>
              <h3 id="success-modal-title">Message envoyé avec succès</h3>
              <p>Merci pour votre message. Je reviendrai vers vous rapidement.</p>
              <button type="button" className="btn primary" onClick={() => setStatus('idle')}>
                Fermer
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="section-shell signature-section">
        <div className="signature-content reveal">
          <h2>Frédéric Lejour</h2>
          <p className="signature-tagline">Développement commercial • Relation stratégique • Growth & Acquisition</p>
          <p className="signature-desc">
            J’accompagne entreprises et professionnels dans leurs enjeux de croissance,
            de relation client stratégique et de performance commerciale.
          </p>
          <a className="btn primary signature-cta" href="#contact">Échanger sur votre projet <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className="footer section-shell">
        <div className="footer-content">
          <strong>Lejour Consulting</strong>
          <div className="footer-links">
            <a href="#expertises">Expertises</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-legal">
            <span>© 2026 Lejour Consulting. Tous droits réservés.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
