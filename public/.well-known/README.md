# assetlinks.json — one value still needs filling in

This file (`public/.well-known/assetlinks.json`, deployed at
`https://www.jiranios.com/.well-known/assetlinks.json`) is what lets
Android verify that `com.jiranios.app` is genuinely allowed to open
`https://www.jiranios.com/r/*` links directly, instead of falling back
to a browser (see `AndroidManifest.xml`'s `android:autoVerify="true"`
intent-filter, added alongside this file).

The `package_name` (`com.jiranios.app`) is already correct — confirmed
directly against `frontend/android/app/build.gradle`'s own
`applicationId`.

The `sha256_cert_fingerprints` value is a placeholder
(`REPLACE_WITH_YOUR_RELEASE_SIGNING_CERT_SHA256_FINGERPRINT`) and
**must** be replaced with the real one before App Links verification
will work — this is the one piece of this whole referral system that
genuinely cannot be generated or guessed from this codebase alone, it
has to come from the actual release signing key.

## How to get the real value

**If the app is managed by Play App Signing (the default, and almost
certainly what's in use given this is a Play Console submission):**

1. Google Play Console → your app → **Setup → App signing**.
2. Copy the **SHA-256 certificate fingerprint** under "App signing key
   certificate."
3. Paste it into this file, replacing the placeholder string exactly
   (keep the quotes, keep it as the one item in that array).

**If signing locally instead (a `.jks`/`.keystore` file on your own
machine):**

```
keytool -list -v -keystore your-release-key.jks -alias your-key-alias
```

Look for the line starting `SHA256:` — copy that value (colon-separated
hex, e.g. `14:6D:E9:...`) into this file exactly as printed.

## After updating it

Redeploy the website, then verify it's live and correctly formatted at
`https://www.jiranios.com/.well-known/assetlinks.json` — Android
fetches this URL itself to confirm the link, this repo doesn't need to
do anything further once the real fingerprint is in place and deployed.
