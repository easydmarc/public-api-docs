<p align="center">
  <a href="https://easydmarc.com">
    <img src="static/img/logo.svg" alt="EasyDMARC" width="280" />
  </a>
</p>

<h3 align="center">EasyDMARC Public API Documentation</h3>

<p align="center">
  Integrate email authentication, DNS lookups, DMARC reporting, and multi-tenant organization management into your applications.
</p>

<p align="center">
  <a href="https://developers.easydmarc.com"><strong>Documentation</strong></a> &middot;
  <a href="https://easydmarc.com"><strong>Website</strong></a> &middot;
  <a href="https://easydmarc.com/blog/category/blog"><strong>Blog</strong></a> &middot;
  <a href="https://academy.easydmarc.com"><strong>Academy</strong></a> &middot;
  <a href="https://status.easydmarc.com"><strong>Status</strong></a>
</p>

---

## API Features

- **DNS Lookups** — Query A, AAAA, MX, NS, PTR, TXT, CNAME, DMARC, DKIM, SPF, and BIMI records. Single and batch lookups supported.
- **Aggregate Reports (RUA)** — Access DMARC aggregate report data, authentication pass rates, email volume analytics, and compliance reporting.
- **Failure Reports (RUF)** — Retrieve forensic failure report data with detailed per-message authentication results.
- **Domains** — Add, update, verify, and manage domains and domain groups. Monitor setup status and organize domains across accounts.
- **Organizations** — Create, list, update, and delete organizations for multi-tenant partner management.
- **Billing & Subscriptions** — List plans, manage subscriptions, handle renewals, and assign pricing tiers.
- **Authentication** — Generate magic links for secure passwordless SSO login flows.
- **Users** — Create and manage user accounts, update personal info, and control access.
- **Webhooks** — Create, update, delete, and monitor webhook deliveries for real-time event notifications.

## OpenAPI Specification

The full OpenAPI spec is available at [`specs/easydmarc-openapi.json`](specs/easydmarc-openapi.json).

## Quick Start

```bash
curl -X GET "https://api.easydmarc.com/v1.0/dns/dmarc?domain=example.com" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

All requests use the base URL `https://api.easydmarc.com` over HTTPS with `Authorization: Bearer <token>` header. Responses are JSON.

---

## Development

This documentation site is built with [Docusaurus](https://docusaurus.io/) and [docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs).

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.0

### Setup

```bash
npm install
```

Create a `.env` file with the OpenAPI spec source URL:

```
EASYDMARC_PUBLIC_API_SPEC_URL=<url-to-openapi-spec>
```

### Generate API Docs

Download the OpenAPI spec and generate documentation pages:

```bash
npm run gen
```

This will:
1. Download the spec to `specs/easydmarc-openapi.json`
2. Clean previously generated API docs
3. Generate fresh documentation in `docs/public-api/`

### Local Development

```bash
npm start
```

### Production Build

```bash
npm run build
npm run serve
```

### Project Structure

```
├── docs/
│   └── public-api/        # Generated API documentation
├── scripts/
│   └── download-spec.mjs  # Downloads OpenAPI spec from remote source
├── specs/
│   └── easydmarc-openapi.json  # OpenAPI specification
├── src/
│   └── css/               # Custom styles
├── static/                # Static assets (images, favicon)
├── docusaurus.config.ts   # Docusaurus configuration
└── sidebars.ts            # Sidebar configuration
```

---

## License

Copyright © EasyDMARC, Inc. All rights reserved.