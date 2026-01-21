# n8n-nodes-setforth

> [Velocity BPA Licensing Notice]
>
> This n8n node is licensed under the Business Source License 1.1 (BSL 1.1).
>
> Use of this node by for-profit organizations in production environments requires a commercial license from Velocity BPA.
>
> For licensing information, visit https://velobpa.com/licensing or contact licensing@velobpa.com.

A comprehensive n8n community node for the **Setforth (FORTH®) API** - a debt resolution technology platform providing CRM, payment processing, e-signature, and credit reporting services for Debt Relief Service Providers (DRSPs).

![License](https://img.shields.io/badge/license-BSL--1.1-blue)
![n8n](https://img.shields.io/badge/n8n-community--node-orange)
![Version](https://img.shields.io/badge/version-1.0.0-green)

> **FORTH® API Notice:** FORTH® is a registered trademark of SetForth, Inc. This n8n community node is developed independently by Velocity BPA, LLC and is not affiliated with, endorsed by, or sponsored by SetForth, Inc. Use of the Setforth API requires a separate API access agreement with SetForth, Inc.

---

## Features

- **38 Resources** with **150+ Operations**
- OAuth2 authentication with environment switching (Production/Sandbox)
- Webhook triggers for 12 real-time event types
- Comprehensive error handling with user-friendly messages
- Pagination support for large datasets
- Binary file handling for document operations

---

## Installation

### Community Nodes (Recommended)

1. Open **Settings** → **Community Nodes**
2. Click **Install**
3. Enter: `n8n-nodes-setforth`
4. Click **Install**

### Manual Installation

```bash
# Navigate to your n8n installation
cd ~/.n8n

# Install the package
npm install n8n-nodes-setforth
```

### Development Installation

```bash
# 1. Extract the zip file
unzip n8n-nodes-setforth.zip
cd n8n-nodes-setforth

# 2. Install dependencies
npm install

# 3. Build the project
npm run build

# 4. Create symlink to n8n custom nodes directory
mkdir -p ~/.n8n/custom
ln -s $(pwd) ~/.n8n/custom/n8n-nodes-setforth

# 5. Restart n8n
n8n start
```

---

## Credentials Setup

| Field | Description |
|-------|-------------|
| **Environment** | Select Production or Sandbox |
| **Client ID** | Your Setforth API Client ID |
| **Client Secret** | Your Setforth API Client Secret |
| **Scope** | OAuth2 scopes (default: `read write`) |

---

## Resources & Operations

### CRM Resources

| Resource | Operations |
|----------|------------|
| **Contact** | Create, Get, Get Many, Update, Delete, Search, Get History Feed |
| **Contact Alert** | Get, Get Many |
| **Contact Note** | Get, Get Many |
| **Contact Communication** | Get, Get Many |
| **Contact Document** | Get, Get Many |
| **Contact List** | Get, Get Many |
| **Contact Workflow** | Get, Get Many |
| **Contact Banking** | Get, Get Many |

### Debt Resources

| Resource | Operations |
|----------|------------|
| **Debt** | Create, Get, Update, Delete, Get Documents, Update Type |
| **Debt Task** | Get, Get Many |
| **Debt Note** | Get, Get Many |
| **Contact Debt** | Get, Get Many |
| **Contact Credit Report** | Get, Get Many |

### Servicing Resources

| Resource | Operations |
|----------|------------|
| **Enrollment** | Get, Get Many |
| **Settlement Offer** | Get, Get Many |
| **Transaction** | Get, Get Many |
| **Account Statement** | Get, Get Many |
| **Creditor** | Get, Get Many |

### Document Resources

| Resource | Operations |
|----------|------------|
| **Document** | Get, Get Many |
| **Document Package** | Get, Get Many |
| **Document Type** | Get, Get Many |
| **Document Template** | Get, Get Many |
| **Document Package Template** | Get, Get Many |

### E-Signature & Credit

| Resource | Operations |
|----------|------------|
| **Clixsign** | Get, Get Many |
| **Forth Credit** | Get, Get Many |

### Administration

| Resource | Operations |
|----------|------------|
| **Admin User** | Get, Get Many |
| **Team** | Get, Get Many |
| **User** | Get, Get Many |
| **Payee** | Get, Get Many |
| **Content Configuration** | Get, Get Many |

### Marketing

| Resource | Operations |
|----------|------------|
| **Campaign** | Get, Get Many |
| **Email Template** | Get, Get Many |

### Other Resources

| Resource | Operations |
|----------|------------|
| **Call** | Get, Get Many |
| **Task** | Get, Get Many |
| **Calendar Event** | Get, Get Many |
| **Lender** | Get, Get Many |
| **Utility** | Get, Get Many |
| **Bulk Operations** | Get, Get Many |

---

## Trigger Node

The Setforth Trigger node supports the following events:

| Event | Description |
|-------|-------------|
| `contact.created` | New contact created |
| `contact.updated` | Contact updated |
| `debt.created` | New debt created |
| `debt.status_changed` | Debt status changed |
| `clixsign.document_signed` | Document signed via Clixsign |
| `enrollment.submitted` | Enrollment submitted |
| `enrollment.approved` | Enrollment approved |
| `payment.received` | Payment received |
| `settlement.created` | Settlement offer created |
| `settlement.status_changed` | Settlement offer status changed |
| `task.completed` | Task completed |
| `workflow.status_changed` | Workflow status changed |

---

## Usage Examples

### Create a Contact

```json
{
  "resource": "contact",
  "operation": "create",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+15551234567"
}
```

### Create a Debt

```json
{
  "resource": "debt",
  "operation": "create",
  "contactId": "{{$json.id}}",
  "creditorName": "Capital One",
  "originalBalance": 5000.00,
  "currentBalance": 4500.00
}
```

---

## Error Handling

The node provides user-friendly error messages for common API errors:

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid request |
| 401 | Unauthorized - Invalid credentials |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

---

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run dev
```

---

## Author

**Velocity BPA**
- Website: [velobpa.com](https://velobpa.com)
- GitHub: [Velocity-BPA](https://github.com/Velocity-BPA)

---

## Licensing

This n8n community node is licensed under the **Business Source License 1.1**.

### Free Use
Permitted for personal, educational, research, and internal business use.

### Commercial Use
Use of this node within any SaaS, PaaS, hosted platform, managed service, or paid automation offering requires a commercial license.

For licensing inquiries:
**licensing@velobpa.com**

See [LICENSE](LICENSE), [COMMERCIAL_LICENSE.md](COMMERCIAL_LICENSE.md), and [LICENSING_FAQ.md](LICENSING_FAQ.md) for details.

---

## Support

- **Documentation**: See this README and inline code documentation
- **Issues**: [GitHub Issues](https://github.com/Velocity-BPA/n8n-nodes-setforth/issues)
- **Commercial Support**: licensing@velobpa.com

---

## Acknowledgments

- [n8n](https://n8n.io) - Workflow automation platform
- [Setforth](https://setforth.com) - Debt resolution technology platform

---

## Trademark Notice

- **FORTH®** is a registered trademark of SetForth, Inc.
- **n8n®** is a registered trademark of n8n GmbH.
- **Velocity BPA™** is a trademark of Velocity BPA, LLC.

This node is not affiliated with, endorsed by, or sponsored by SetForth, Inc. or n8n GmbH.
