import { useSeo } from '../lib/seo';
import { LegalLayout } from './LegalLayout';

export default function Terms() {
  useSeo({
    title: 'Terms of Service',
    description: 'The terms that govern your use of Jirani OS.',
    path: '/terms',
  });

  return (
    <LegalLayout title="Terms of Service" updated="January 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Jirani OS
        (the &ldquo;Service&rdquo;). By creating an account or using the Service, you agree to be
        bound by these Terms. If you are using the Service on behalf of a business, you represent
        that you have the authority to bind that business to these Terms.
      </p>

      <h2>1. Using the Service</h2>
      <p>
        You must provide accurate information when creating an account and keep it up to date. You
        are responsible for maintaining the confidentiality of your login credentials and for all
        activity that occurs under your account. Notify us immediately of any unauthorized use.
      </p>

      <h2>2. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of any applicable regulation.</li>
        <li>Attempt to gain unauthorized access to any part of the Service or another user&rsquo;s account.</li>
        <li>Interfere with or disrupt the integrity or performance of the Service.</li>
        <li>Reverse engineer, decompile, or attempt to extract the source code of the Service, except where permitted by law.</li>
        <li>Use the Service to transmit fraudulent, misleading, or harmful content.</li>
      </ul>

      <h2>3. Your data and content</h2>
      <p>
        You retain ownership of the business data, records, and content you input into the
        Service (&ldquo;Your Data&rdquo;). You grant us a limited license to host, process, and
        display Your Data solely for the purpose of providing the Service to you. See our{' '}
        <a href="/privacy">Privacy Policy</a> for details on how we handle Your Data.
      </p>

      <h2>4. Payments and billing</h2>
      <p>
        Certain features of the Service may require payment. Where applicable, pricing, billing
        cycles, and payment terms will be presented to you at the time of purchase or subscription.
        Payments processed through the Service, including via M-Pesa or other payment providers,
        are subject to the terms of those respective providers in addition to these Terms.
      </p>

      <h2>5. Service availability</h2>
      <p>
        We aim to keep the Service available and reliable, but we do not guarantee uninterrupted
        access. The Service may be temporarily unavailable due to maintenance, updates, or
        circumstances beyond our reasonable control. Certain features, such as point-of-sale
        functionality, are designed to remain usable during connectivity interruptions and sync
        automatically once connectivity is restored.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The Service, including its software, design, branding, and underlying technology, is the
        property of Jirani OS and its licensors, and is protected by intellectual property laws.
        These Terms do not grant you any rights to our trademarks, logos, or brand assets, other
        than as necessary to use the Service as intended.
      </p>

      <h2>7. Termination</h2>
      <p>
        You may stop using the Service and close your account at any time. We may suspend or
        terminate your access to the Service if you violate these Terms, engage in fraudulent or
        harmful activity, or as required by law. Upon termination, your right to use the Service
        will cease, though certain provisions of these Terms will survive termination, including
        those relating to data retention, liability, and dispute resolution.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind, whether express or implied, including but not limited to implied
        warranties of merchantability, fitness for a particular purpose, and non-infringement. We
        do not warrant that the Service will be error-free or uninterrupted.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Jirani OS shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or any loss of profits or
        revenues, arising from your use of or inability to use the Service.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be communicated through
        the Service or by other reasonable means. Continued use of the Service after changes take
        effect constitutes acceptance of the revised Terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of Kenya, without regard to its conflict of law
        principles, unless otherwise required by applicable local law in your jurisdiction.
      </p>

      <h2>12. Contact us</h2>
      <p>
        Questions about these Terms can be directed to us through our{' '}
        <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
