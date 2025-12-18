# n8n-nodes-setforth

[![License: BSL 1.1](https://img.shields.io/badge/License-BSL%201.1-blue.svg)](LICENSE)

An n8n community node package for the **Setforth (FORTH®) API** - a comprehensive debt resolution technology platform providing CRM, payment processing, e-signature, and credit reporting services for Debt Relief Service Providers (DRSPs).

---

## License

This n8n node is developed and licensed by **Velocity BPA, LLC (Velo-BPA)** under the **Business Source License (BSL) 1.1**.

**Commercial/production use requires a per-organization license.**

📧 Contact: [licensing@velobpa.com](mailto:licensing@velobpa.com)  
🌐 Website: [velobpa.com](https://velobpa.com)

See [LICENSE](LICENSE), [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md), and [NOTICE.md](NOTICE.md) for full terms.

---

## FORTH® API Notice

This node integrates with the **FORTH® API**, owned and operated by **SetForth, Inc.**

- API usage is governed by SetForth's API terms
- This license applies **only** to the n8n node software
- Use of the node does not grant API access, and API access does not grant node rights

**FORTH® is a registered trademark of SetForth, Inc.**

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Resources & Operations](#resources--operations)
- [Usage Examples](#usage-examples)
- [Testing](#testing)
- [Local Development](#local-development)
- [Push to GitHub](#push-to-github)
- [Commercial Licensing](#commercial-licensing)
- [Support](#support)

---

## Features

This node package provides comprehensive integration with the Setforth API, enabling automation of:

- **Consumer Onboarding & Enrollment** - Manage contact creation, enrollment workflows, and program assignments
- **Debt Tracking & Settlement** - Create, update, and manage debts and settlement offers
- **Payment Processing** - Handle enrollment payments, pauses, and gateway integrations
- **Creditor Negotiation** - Track settlement offers and transaction data
- **Compliance Documentation** - Generate documents, manage packages, and e-signatures via Clixsign
- **Credit Reporting** - Pull credit reports, KBA verification, and Forth Credit integration
- **Multi-channel Communication** - Send emails, SMS, and external form requests
- **Team & User Management** - Administer teams, users, and settings

### Supported Resources

| Category | Resources |
|----------|-----------|
| **Contact Management** | Contact, Contact List, Contact Alert, Contact Note, Contact Communication, Contact Credit Report, Contact Document, Contact Debt, Contact Workflow, Contact Banking |
| **Debt Management** | Debt, Debt Task, Debt Note |
| **Servicing** | Enrollment, Settlement Offer, Transaction, Account Statement, Creditor |
| **Documents** | Document, Document Package, Document Type, Document Template, Document Package Template |
| **E-Signature** | Clixsign |
| **Credit** | Forth Credit |
| **Marketing** | Campaign, Email Template |
| **Administration** | Team, Admin User, Payee |
| **Configuration** | Content Configuration |
| **Lenders** | Monevo, Lending USA |
| **Utilities** | Data Sources, Phone Search, Routing Validation, Spinwheel Integration |
| **Bulk Operations** | Update Multiple Contacts, Apply Compensation Templates |

---

## Installation

### Via n8n Community Nodes (Recommended)

1. Open your n8n instance
2. Go to **Settings** → **Community Nodes**
3. Click **Install a community node**
4. Enter: `n8n-nodes-setforth`
5. Click **Install**

### Via npm (Manual)

```bash
# Navigate to your n8n custom nodes directory
cd ~/.n8n/custom

# Install the package
npm install n8n-nodes-setforth
```

### Via Local Installation (Development)

```bash
# Clone the repository
git clone https://github.com/Velocity-BPA/n8n-nodes-setforth.git
cd n8n-nodes-setforth

# Install dependencies
pnpm install

# Build the package
pnpm build

# Link to your n8n instance
pnpm link --global
cd ~/.n8n
pnpm link --global n8n-nodes-setforth

# Restart n8n
n8n start
```

---

## Configuration

### Setting Up Credentials

1. In n8n, go to **Credentials** → **Add Credential**
2. Search for **Setforth OAuth2 API**
3. Configure the following:

| Field | Description |
|-------|-------------|
| **Environment** | Select `Production` or `Sandbox` |
| **Client ID** | Your Setforth OAuth2 Client ID |
| **Client Secret** | Your Setforth OAuth2 Client Secret |
| **Scopes** | Space-separated list of scopes (default: `contacts debts enrollments settlements documents users teams`) |
| **Custom API URL** | (Optional) Override the default API URL |

### API Endpoints

- **Production:** `https://api.setforth.com`
- **Sandbox:** `https://api.sandbox.setforth.com`

---

## Resources & Operations

### Contact Resource

| Operation | Description |
|-----------|-------------|
| Create | Create a new contact |
| Get | Get a contact by ID |
| Search | Search for contacts |
| Update | Update a contact |
| Delete | Delete a contact |
| Delink Co-Applicant | Delink a co-applicant from a contact |
| Get History Feed | Get the history feed for a contact |

### Debt Resource

| Operation | Description |
|-----------|-------------|
| Create | Create a new debt |
| Get | Get a debt by ID |
| Update | Update a debt |
| Delete | Delete a debt |
| Update Type | Update debt type |
| Get Documents | Get documents for a debt |

### Enrollment Resource

| Operation | Description |
|-----------|-------------|
| Create Plans | Create enrollment plans |
| Update Plans | Update enrollment plans |
| Delete Plans | Delete enrollment plans |
| Submit | Submit enrollment for approval |
| Approve | Approve an enrollment |
| Get Details | Get enrollment details |
| Pause | Pause enrollment payments |
| Resume Payments | Resume enrollment payments |

### Settlement Offer Resource

| Operation | Description |
|-----------|-------------|
| Create | Create a settlement offer |
| Get | Get a settlement offer |
| Delete | Delete a settlement offer |
| Void | Void a settlement offer |
| Get All Statuses | Get all settlement offer statuses |
| Get Offers On Debt | Get all settlement offers for a debt |

### Clixsign (E-Signature) Resource

| Operation | Description |
|-----------|-------------|
| Create Signing Request | Create an e-signature request |

### Forth Credit Resource

| Operation | Description |
|-----------|-------------|
| Connect with KBA | Connect contact using knowledge-based authentication |
| Verify KBA Answers | Verify KBA answers |
| Connect with SMS | Connect contact using SMS verification |
| Verify SMS Code | Verify SMS verification code |
| Order Equifax Report | Order an Equifax credit report |
| Refresh Equifax Report | Refresh an Equifax credit report |

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

### Create a Debt for a Contact

```json
{
  "resource": "debt",
  "operation": "create",
  "contactId": "{{$json.id}}",
  "creditorName": "ABC Credit Card",
  "originalBalance": 5000.00,
  "currentBalance": 4500.00
}
```

### Create a Settlement Offer

```json
{
  "resource": "settlementOffer",
  "operation": "create",
  "debtId": "{{$json.debt_id}}",
  "settlementAmount": 2250.00
}
```

---

## Testing

This package includes comprehensive test scripts to validate the node installation and functionality.

### Quick Validation Test

```bash
# Run the Node.js test suite
node test-node.js

# With verbose output
node test-node.js --verbose

# Include API connectivity test (requires credentials)
export SETFORTH_CLIENT_ID="your_client_id"
export SETFORTH_CLIENT_SECRET="your_client_secret"
export SETFORTH_ENVIRONMENT="sandbox"
node test-node.js --api --verbose
```

### Interactive Setup & Test Script

```bash
# Run the bash setup script
chmod +x test-setforth-node.sh
./test-setforth-node.sh
```

### Import Test Workflows

Two pre-built n8n workflows are included in `test-workflows/`:

| Workflow | Description |
|----------|-------------|
| `setforth-api-test.json` | Tests 6 read-only API operations in parallel |
| `setforth-contact-crud.json` | Tests full Create → Read → Update → Delete cycle |

To import:
1. Open n8n → Workflows → Import from File
2. Select the JSON file from `test-workflows/`
3. Configure Setforth credentials in each node
4. Execute the workflow

---

## Local Development

### Prerequisites

- Node.js v18.10 or higher
- pnpm v9.1 or higher
- n8n installed locally

### Step-by-Step Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/Velocity-BPA/n8n-nodes-setforth.git
cd n8n-nodes-setforth

# 2. Install dependencies
pnpm install

# 3. Build the project
pnpm build

# 4. Create a symlink for local testing
pnpm link --global

# 5. Navigate to your n8n installation directory
cd ~/.n8n

# 6. Link the package
pnpm link --global n8n-nodes-setforth

# 7. Start n8n
n8n start

# 8. Open n8n in your browser (default: http://localhost:5678)
# 9. The Setforth node should appear in the node list
```

### Building a ZIP for Distribution

```bash
# Build the project
pnpm build

# Create a distributable ZIP
cd ..
zip -r n8n-nodes-setforth.zip n8n-nodes-setforth -x "n8n-nodes-setforth/node_modules/*" -x "n8n-nodes-setforth/.git/*"
```

### Code Quality

```bash
# Lint the code
pnpm lint

# Fix linting issues
pnpm lintfix

# Format code
pnpm format
```

---


## Commercial Licensing

This software is licensed under the **Business Source License (BSL) 1.1**.

### Permitted Uses (No License Required)
- Personal use
- Evaluation and testing
- Development and internal non-commercial use by a single organization

### Commercial Use (License Required)
A commercial license is required for:
- Production use by or on behalf of an organization
- Use within paid, hosted, managed, or multi-tenant n8n environments
- Use by consultants, agencies, or system integrators delivering workflows to clients
- Redistribution, sublicensing, or bundling with commercial products
- Use by multiple legal entities under a single deployment

### License Model
Commercial licenses are issued **per organization**. A separate license is required for:
- Each legal entity
- Each managed services client
- Each multi-tenant or hosted deployment

### Contact
📧 [licensing@velobpa.com](mailto:licensing@velobpa.com)  
🌐 [velobpa.com](https://velobpa.com)

See [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md) for full commercial licensing details.

---

## Industry Context

This node serves the **debt resolution/debt settlement industry**, enabling automation of:

- Consumer onboarding and enrollment workflows
- Debt tracking and settlement management
- Payment scheduling and processing
- Creditor negotiation tracking
- Compliance documentation and e-signatures
- Credit report pulling and monitoring
- Multi-channel communication (SMS, Email)
- Team and user management

**Target Users:** Debt Relief Service Providers (DRSPs), debt settlement companies, financial counseling services, and fintech platforms integrating with Setforth's ecosystem.

---

## Support

For issues, feature requests, or contributions:

- **GitHub Issues:** [github.com/Velocity-BPA/n8n-nodes-setforth/issues](https://github.com/Velocity-BPA/n8n-nodes-setforth/issues)
- **Website:** [velobpa.com](https://velobpa.com)
- **Licensing:** [licensing@velobpa.com](mailto:licensing@velobpa.com)

---

© 2025 Velocity BPA, LLC. All rights reserved.

FORTH® is a registered trademark of SetForth, Inc.
