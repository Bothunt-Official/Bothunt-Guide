# Website Embedding

The website you add in your bot's settings is shown in an iframe on your bot's page. If the iframe would only show an error, Bothunt hides the preview from your bot's page and your bot's settings show a warning explaining why. This happens when your site:

- blocks framing (see below)
- responds with an error status such as `403 Forbidden`, `404 Not Found` or `500`
- can't be reached, for example because the domain expired or its HTTPS certificate is broken

## Sites that block framing

Browsers block a page from loading inside an iframe when the page sends either of these response headers:

- `X-Frame-Options: DENY` or `X-Frame-Options: SAMEORIGIN`
- `Content-Security-Policy` with a `frame-ancestors` directive that doesn't include `https://bothunt.co`, such as `frame-ancestors 'none'` or `frame-ancestors 'self'`

Many frameworks, hosts and security plugins add these headers by default.

## How to fix it

Allow Bothunt to frame your site with the `frame-ancestors` CSP directive and remove `X-Frame-Options`:

```http
Content-Security-Policy: frame-ancestors 'self' https://bothunt.co
```

:::info
Browsers ignore `X-Frame-Options` when `frame-ancestors` is present, but some older clients don't. Removing `X-Frame-Options` is the safest option once `frame-ancestors` is set.
:::

If you'd rather not allow framing, you can leave the website field empty.

## Error responses

If your settings say the website returned an error, open it in a private browser window. Firewalls and bot protection (for example a Cloudflare WAF rule) can return `403` to visitors from some countries or networks. Make sure your homepage loads for everyone, or link a page that does.

## Checking your headers

Run the following to see which headers your site sends:

```sh
curl -sI https://your-site.com | grep -iE "x-frame-options|content-security-policy"
```

After updating your headers, reopen your bot's settings to check again. If your site can now be embedded, the warning disappears and the preview comes back on your bot's page. Results are cached for up to 10 minutes, and Bothunt also rechecks every site daily.
