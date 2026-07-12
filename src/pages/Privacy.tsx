import { useSeo } from '../lib/seo';
import { LegalLayout } from './LegalLayout';

export default function Privacy() {
  useSeo({
    title: 'Privacy Policy',
    description: 'How Jirani OS collects, uses, and protects your data.',
    path: '/privacy',
  });

  return (
    <LegalLayout title="Privacy Policy" updated="January 2026">
      <p>
        This Privacy Policy explains how Jirani OS (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) collects, uses, discloses, and safeguards information when you use our
        website, mobile application, or any related services (collectively, the
        &ldquo;Service&rdquo;). By using the Service, you agree to the collection and use of
        information in accordance with this policy.
      </p>

      <h2>1. Information we collect</h2>
      <h3>1.1 Information you provide directly</h3>
      <ul>
        <li>Account information: name, phone number, email address, and password (stored as a secure hash, never in plain text).</li>
        <li>Business and property information you enter, such as property details, unit information, tenant records, product listings, and pricing.</li>
        <li>Payment-related information necessary to process transactions, such as M-Pesa transaction references. We do not store your M-Pesa PIN or full payment credentials.</li>
        <li>Communications you send us, such as support requests or contact form submissions.</li>
      </ul>
      <h3>1.2 Information collected automatically</h3>
      <ul>
        <li>Device information, such as device type, operating system, and app version, used for diagnostics and compatibility.</li>
        <li>Usage data, such as which features are used, to help us understand and improve the Service.</li>
        <li>Location data, only when a feature that requires it is actively in use (for example, confirming a delivery or parking location), and only with your permission.</li>
      </ul>
      <h3>1.3 Verification codes (OTP)</h3>
      <p>
        When you verify a phone number or email address, we send a one-time verification code to
        that phone number or email address. This is used solely to confirm you control the contact
        method being added or changed, and to secure actions like password resets.
      </p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To provide, maintain, and improve the Service.</li>
        <li>To authenticate your account and protect it against unauthorized access.</li>
        <li>To process transactions and send related notifications (for example, payment confirmations or rent invoices).</li>
        <li>To send you service-related communications, such as security alerts or updates to this policy.</li>
        <li>To respond to support requests and contact form submissions.</li>
        <li>To detect, investigate, and prevent fraudulent or unauthorized activity.</li>
      </ul>

      <h2>3. How we share your information</h2>
      <p>We do not sell your personal information. We may share information in the following circumstances:</p>
      <ul>
        <li><strong>Within your organization:</strong> information you enter is visible to other users in your business according to their assigned role and permissions.</li>
        <li><strong>Service providers:</strong> we work with third parties that help us operate the Service, such as payment processors (for example, Safaricom M-Pesa), SMS and email delivery providers, and cloud hosting providers. These providers are contractually restricted from using your data for any purpose other than providing services to us.</li>
        <li><strong>Legal requirements:</strong> we may disclose information if required by law, regulation, legal process, or governmental request.</li>
        <li><strong>Business transfers:</strong> if Jirani OS is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to this policy.</li>
      </ul>

      <h2>4. Data retention</h2>
      <p>
        We retain your information for as long as your account is active or as needed to provide
        the Service. Financial and transaction records may be retained longer where required by
        applicable accounting or tax regulations. You may request deletion of your account and
        associated personal data, subject to any legal retention requirements.
      </p>

      <h2>5. Data security</h2>
      <p>
        We use industry-standard measures to protect your information, including encryption of
        data in transit and at rest, password hashing, role-based access controls, and audit
        logging of sensitive actions. No system is completely secure, and we cannot guarantee
        absolute security, but we work continuously to protect your information appropriately.
      </p>

      <h2>6. Your rights and choices</h2>
      <ul>
        <li>You may access and update most of your account information directly within the app.</li>
        <li>You may request a copy of the personal data we hold about you.</li>
        <li>You may request deletion of your account and associated data, subject to legal retention requirements. See our <a href="/delete-account">Delete Account</a> page for exactly how.</li>
        <li>You may opt out of non-essential communications at any time.</li>
      </ul>
      <p>To exercise any of these rights, contact us using the details on our Contact page.</p>

      <h2>7. Children&rsquo;s privacy</h2>
      <p>
        The Service is not directed to individuals under the age of 18, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>8. International data transfers</h2>
      <p>
        Your information may be processed and stored on servers located outside your country of
        residence. We take steps to ensure your data is treated securely wherever it is processed.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material
        changes through the Service or by other reasonable means, and update the &ldquo;Last
        updated&rdquo; date above.
      </p>

      <h2>10. Contact us</h2>
      <p>
        If you have questions about this Privacy Policy or how your data is handled, please reach
        out through our <a href="/contact">Contact page</a>.
      </p>
    </LegalLayout>
  );
}
