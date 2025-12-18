#!/bin/bash

# ============================================================================
# n8n-nodes-setforth Test Script
# ============================================================================
# This script helps you test the Setforth node installation and functionality
# in your local n8n instance.
#
# Prerequisites:
#   - Node.js v18.10+
#   - n8n installed locally
#   - Setforth API credentials (Client ID & Secret)
#
# Usage:
#   chmod +x test-setforth-node.sh
#   ./test-setforth-node.sh
# ============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
N8N_PORT=${N8N_PORT:-5678}
N8N_HOST=${N8N_HOST:-localhost}
SETFORTH_ENV=${SETFORTH_ENV:-sandbox}  # 'sandbox' or 'production'

echo -e "${BLUE}============================================================================${NC}"
echo -e "${BLUE}  n8n-nodes-setforth Installation & Test Script${NC}"
echo -e "${BLUE}============================================================================${NC}"
echo ""

# ----------------------------------------------------------------------------
# Step 1: Check Prerequisites
# ----------------------------------------------------------------------------
echo -e "${YELLOW}[Step 1/6] Checking prerequisites...${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed. Please install Node.js v18.10+${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}✗ Node.js version must be 18.10+. Current: $(node -v)${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v)${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm -v)${NC}"

# Check if n8n is installed
if ! command -v n8n &> /dev/null; then
    echo -e "${YELLOW}⚠ n8n CLI not found globally. Checking local...${NC}"
else
    echo -e "${GREEN}✓ n8n $(n8n --version 2>/dev/null || echo 'installed')${NC}"
fi

echo ""

# ----------------------------------------------------------------------------
# Step 2: Install/Link the Package
# ----------------------------------------------------------------------------
echo -e "${YELLOW}[Step 2/6] Installing n8n-nodes-setforth...${NC}"

# Check if we're in the project directory
if [ -f "package.json" ] && grep -q "n8n-nodes-setforth" package.json; then
    echo -e "${GREEN}✓ Already in n8n-nodes-setforth directory${NC}"
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "Installing dependencies..."
        npm install
    fi
    
    # Build if needed
    if [ ! -d "dist" ]; then
        echo "Building project..."
        npm run build
    fi
    
    # Link globally
    echo "Linking package globally..."
    npm link 2>/dev/null || sudo npm link
    
    # Link to n8n
    N8N_CUSTOM_DIR="${HOME}/.n8n/custom"
    mkdir -p "$N8N_CUSTOM_DIR"
    cd "$N8N_CUSTOM_DIR"
    npm link n8n-nodes-setforth 2>/dev/null || true
    cd - > /dev/null
    
    echo -e "${GREEN}✓ Package linked successfully${NC}"
else
    echo -e "${RED}✗ Please run this script from the n8n-nodes-setforth directory${NC}"
    echo "  Or extract the zip file first: unzip n8n-nodes-setforth.zip && cd n8n-nodes-setforth"
    exit 1
fi

echo ""

# ----------------------------------------------------------------------------
# Step 3: Verify Node Registration
# ----------------------------------------------------------------------------
echo -e "${YELLOW}[Step 3/6] Verifying node files...${NC}"

# Check compiled files exist
FILES_TO_CHECK=(
    "dist/nodes/Setforth/Setforth.node.js"
    "dist/nodes/Setforth/SetforthTrigger.node.js"
    "dist/credentials/SetforthOAuth2Api.credentials.js"
    "dist/nodes/Setforth/setforth.svg"
)

ALL_FILES_EXIST=true
for file in "${FILES_TO_CHECK[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file${NC}"
    else
        echo -e "${RED}✗ Missing: $file${NC}"
        ALL_FILES_EXIST=false
    fi
done

if [ "$ALL_FILES_EXIST" = false ]; then
    echo -e "${RED}Some files are missing. Try rebuilding: npm run build${NC}"
    exit 1
fi

echo ""

# ----------------------------------------------------------------------------
# Step 4: Create Test Workflow JSON
# ----------------------------------------------------------------------------
echo -e "${YELLOW}[Step 4/6] Creating test workflow...${NC}"

TEST_WORKFLOW_FILE="/tmp/setforth-test-workflow.json"

cat > "$TEST_WORKFLOW_FILE" << 'WORKFLOW_JSON'
{
  "name": "Setforth Node Test Workflow",
  "nodes": [
    {
      "parameters": {},
      "id": "start-node",
      "name": "Manual Trigger",
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [240, 300]
    },
    {
      "parameters": {
        "resource": "contact",
        "operation": "search",
        "returnAll": false,
        "limit": 5,
        "filters": {}
      },
      "id": "setforth-search",
      "name": "Setforth - Search Contacts",
      "type": "n8n-nodes-setforth.setforth",
      "typeVersion": 1,
      "position": [460, 300],
      "credentials": {
        "setforthOAuth2Api": {
          "id": "CREDENTIAL_ID",
          "name": "Setforth OAuth2 API"
        }
      }
    },
    {
      "parameters": {
        "resource": "contentConfig",
        "operation": "getDebtStatuses"
      },
      "id": "setforth-statuses",
      "name": "Setforth - Get Debt Statuses",
      "type": "n8n-nodes-setforth.setforth",
      "typeVersion": 1,
      "position": [460, 480],
      "credentials": {
        "setforthOAuth2Api": {
          "id": "CREDENTIAL_ID",
          "name": "Setforth OAuth2 API"
        }
      }
    },
    {
      "parameters": {
        "resource": "user",
        "operation": "getCurrent"
      },
      "id": "setforth-user",
      "name": "Setforth - Get Current User",
      "type": "n8n-nodes-setforth.setforth",
      "typeVersion": 1,
      "position": [460, 660],
      "credentials": {
        "setforthOAuth2Api": {
          "id": "CREDENTIAL_ID",
          "name": "Setforth OAuth2 API"
        }
      }
    }
  ],
  "connections": {
    "Manual Trigger": {
      "main": [
        [
          { "node": "Setforth - Search Contacts", "type": "main", "index": 0 },
          { "node": "Setforth - Get Debt Statuses", "type": "main", "index": 0 },
          { "node": "Setforth - Get Current User", "type": "main", "index": 0 }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}
WORKFLOW_JSON

echo -e "${GREEN}✓ Test workflow created at: $TEST_WORKFLOW_FILE${NC}"
echo ""

# ----------------------------------------------------------------------------
# Step 5: Display Credential Setup Instructions
# ----------------------------------------------------------------------------
echo -e "${YELLOW}[Step 5/6] Credential Setup Instructions${NC}"
echo ""
echo -e "${BLUE}To configure Setforth credentials in n8n:${NC}"
echo ""
echo "1. Open n8n in your browser: http://${N8N_HOST}:${N8N_PORT}"
echo ""
echo "2. Go to: Settings → Credentials → Add Credential"
echo ""
echo "3. Search for: 'Setforth OAuth2 API'"
echo ""
echo "4. Fill in the following fields:"
echo ""
echo "   ┌─────────────────────────────────────────────────────────────┐"
echo "   │ Field              │ Value                                 │"
echo "   ├─────────────────────────────────────────────────────────────┤"
echo "   │ Environment        │ ${SETFORTH_ENV}                       │"
echo "   │ Client ID          │ <Your Setforth Client ID>             │"
echo "   │ Client Secret      │ <Your Setforth Client Secret>         │"
echo "   │ Scopes             │ contacts debts enrollments            │"
echo "   │                    │ settlements documents users teams     │"
echo "   └─────────────────────────────────────────────────────────────┘"
echo ""
echo "5. Click 'Save' to store the credentials"
echo ""

# ----------------------------------------------------------------------------
# Step 6: Display Test Instructions
# ----------------------------------------------------------------------------
echo -e "${YELLOW}[Step 6/6] Testing Instructions${NC}"
echo ""
echo -e "${BLUE}Manual Testing Steps:${NC}"
echo ""
echo "1. Start n8n (if not already running):"
echo "   ${GREEN}n8n start${NC}"
echo ""
echo "2. Open n8n in your browser:"
echo "   ${GREEN}http://${N8N_HOST}:${N8N_PORT}${NC}"
echo ""
echo "3. Verify node appears in the node panel:"
echo "   - Click '+' to add a new node"
echo "   - Search for 'Setforth'"
echo "   - You should see:"
echo "     • Setforth (main node)"
echo "     • Setforth Trigger (webhook node)"
echo ""
echo "4. Create a test workflow:"
echo "   a. Add a 'Manual Trigger' node"
echo "   b. Add a 'Setforth' node"
echo "   c. Connect them"
echo "   d. Configure the Setforth node:"
echo "      - Select your credentials"
echo "      - Resource: Contact"
echo "      - Operation: Search"
echo "   e. Click 'Test Workflow'"
echo ""
echo "5. Or import the test workflow:"
echo "   - Go to Workflows → Import from File"
echo "   - Select: ${TEST_WORKFLOW_FILE}"
echo "   - Update credential IDs in each Setforth node"
echo ""

# ----------------------------------------------------------------------------
# Quick API Test (Optional)
# ----------------------------------------------------------------------------
echo -e "${BLUE}Optional: Quick API Connectivity Test${NC}"
echo ""
echo "If you have curl and want to test API connectivity directly:"
echo ""
echo "  # Set your credentials"
echo "  export SETFORTH_CLIENT_ID='your_client_id'"
echo "  export SETFORTH_CLIENT_SECRET='your_client_secret'"
echo ""
echo "  # Get OAuth token (Sandbox)"
echo "  curl -X POST https://api.sandbox.setforth.com/oauth/token \\"
echo "    -H 'Content-Type: application/x-www-form-urlencoded' \\"
echo "    -d 'grant_type=client_credentials' \\"
echo "    -d \"client_id=\${SETFORTH_CLIENT_ID}\" \\"
echo "    -d \"client_secret=\${SETFORTH_CLIENT_SECRET}\""
echo ""

# ----------------------------------------------------------------------------
# Summary
# ----------------------------------------------------------------------------
echo -e "${BLUE}============================================================================${NC}"
echo -e "${GREEN}  Setup Complete!${NC}"
echo -e "${BLUE}============================================================================${NC}"
echo ""
echo "Summary:"
echo "  • Package installed and linked"
echo "  • Node files verified"
echo "  • Test workflow created"
echo ""
echo "Next steps:"
echo "  1. Start n8n: ${GREEN}n8n start${NC}"
echo "  2. Open: ${GREEN}http://${N8N_HOST}:${N8N_PORT}${NC}"
echo "  3. Add Setforth credentials"
echo "  4. Test the nodes!"
echo ""
echo "For issues, check:"
echo "  • n8n logs for errors"
echo "  • Ensure credentials are correct"
echo "  • Verify API access with Setforth"
echo ""
echo -e "${BLUE}============================================================================${NC}"
