'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { type ContactContent } from '@/content/contact';
import { Button } from '@/components/ui/Button';

type Props = {
  form: ContactContent['form'];
  success: ContactContent['success'];
  error: ContactContent['error'];
  /** Lien localisé vers la politique de confidentialité. */
  privacyHref: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
/**
 * Clé publique Web3Forms : prévue par le service pour être embarquée dans
 * le code client (implémentation officielle JavaScript).
 */
const WEB3FORMS_ACCESS_KEY = '21d49848-72e4-4d6c-99d2-6ed4c93e1a6d';

/**
 * Formulaire de contact — seul composant interactif de la page.
 *
 * Envoi direct à Web3Forms depuis le navigateur (FormData, sans en-tête
 * Content-Type manuel). Les champs ne sont pas contrôlés : en cas d'erreur,
 * la saisie est conservée telle quelle. Après un succès, le formulaire est
 * réinitialisé et remplacé par le panneau de confirmation, avec déplacement
 * du focus.
 *
 * Le champ `botcheck` est le honeypot natif de Web3Forms : invisible pour
 * les humains et les lecteurs d'écran. Aucune donnée saisie n'est
 * journalisée.
 */
export function ContactForm({ form, success, error, privacyHref }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const successTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === 'success') successTitleRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const formElement = event.currentTarget;
    const data = new FormData(formElement);

    setStatus('sending');
    try {
      // `subject` est réservé par Web3Forms pour l'objet du courriel reçu ;
      // l'objet choisi par le visiteur est transmis sous `demande`.
      const demande = String(data.get('subject') ?? '');
      data.set('subject', 'Nouveau message depuis lejourconsulting.com');
      if (demande) data.set('demande', demande);
      data.append('access_key', WEB3FORMS_ACCESS_KEY);
      data.append('from_name', 'Site Frédéric Lejour');

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: data,
      });
      const body = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (response.ok && body?.success !== false) {
        formElement.reset();
        setStatus('success');
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.error('[contact] Réponse Web3Forms non positive', {
            status: response.status,
            message: body?.message ?? null,
          });
        }
        setStatus('error');
      }
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[contact] Envoi Web3Forms impossible',
          error instanceof Error ? error.message : 'unknown'
        );
      }
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-border bg-surface px-8 py-10 md:px-12"
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full border border-accent text-accent"
          aria-hidden="true"
        >
          <Check size={22} strokeWidth={1.75} />
        </span>
        <h3
          ref={successTitleRef}
          tabIndex={-1}
          className="mt-8 font-display text-heading-xl text-foreground outline-none"
        >
          {success.title}
        </h3>
        <p className="mt-4 max-w-prose text-body text-muted">{success.text}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 font-body text-body-sm font-medium text-foreground underline underline-offset-4 decoration-foreground transition-opacity hover:opacity-80"
        >
          {success.again}
        </button>
      </div>
    );
  }

  const fieldClasses =
    'w-full border border-border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted transition-colors focus:border-accent';
  const labelClasses = 'mb-2 block font-body text-body-sm font-medium text-foreground';

  return (
    <div>
      <h2 className="font-display text-heading-xl text-foreground text-balance">{form.title}</h2>

      <form onSubmit={handleSubmit} className="mt-8">
        <fieldset disabled={status === 'sending'} className="m-0 min-w-0 space-y-6 border-0 p-0">
          {/* Honeypot natif Web3Forms : ignoré par les humains, piège les robots. */}
          <div className="hidden" aria-hidden="true">
            <label>
              Ne pas remplir ce champ
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div>
            <label htmlFor="contact-name" className={labelClasses}>
              {form.fields.name}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              maxLength={120}
              autoComplete="name"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClasses}>
              {form.fields.email}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-company" className={labelClasses}>
              {form.fields.company}{' '}
              <span className="font-normal text-muted">{form.fields.companyOptional}</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              maxLength={160}
              autoComplete="organization"
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className={labelClasses}>
              {form.fields.subject}
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              defaultValue=""
              className={fieldClasses}
            >
              <option value="" disabled>
                {form.fields.subjectPlaceholder}
              </option>
              {form.fields.subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClasses}>
              {form.fields.message}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              maxLength={5000}
              className={fieldClasses}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="contact-consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-or"
            />
            <label htmlFor="contact-consent" className="text-body-sm text-muted">
              {form.consent}
            </label>
          </div>

          <div>
            <Button type="submit" variant="primary" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
              {status === 'sending' ? form.sending : form.submit}
            </Button>
          </div>
        </fieldset>

        {status === 'error' ? (
          <p role="alert" className="mt-6 border-l-2 border-error pl-4 text-body-sm text-error">
            {error.text}
          </p>
        ) : null}

        <p className="mt-6 border-t border-border pt-6 text-body-sm text-muted">
          {form.reassurance}{' '}
          <Link
            href={privacyHref}
            className="font-medium text-foreground underline underline-offset-4 decoration-accent transition-opacity hover:opacity-80"
          >
            {form.privacyLabel}
          </Link>
        </p>
      </form>
    </div>
  );
}
