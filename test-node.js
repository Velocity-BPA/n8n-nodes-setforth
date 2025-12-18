#!/usr/bin/env node

/**
 * n8n-nodes-setforth Test Suite
 * 
 * This script validates the node package structure, TypeScript compilation,
 * and optionally tests API connectivity with your Setforth credentials.
 * 
 * Usage:
 *   node test-node.js                    # Run structure tests only
 *   node test-node.js --api              # Include API connectivity test
 *   node test-node.js --api --verbose    # Verbose output
 * 
 * Environment Variables (for API tests):
 *   SETFORTH_CLIENT_ID      - Your Setforth OAuth2 Client ID
 *   SETFORTH_CLIENT_SECRET  - Your Setforth OAuth2 Client Secret
 *   SETFORTH_ENVIRONMENT    - 'sandbox' (default) or 'production'
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Parse command line arguments
const args = process.argv.slice(2);
const runApiTests = args.includes('--api');
const verbose = args.includes('--verbose');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logPass(message) {
  log(`✓ ${message}`, 'green');
}

function logFail(message) {
  log(`✗ ${message}`, 'red');
}

function logWarn(message) {
  log(`⚠ ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ ${message}`, 'blue');
}

function logVerbose(message) {
  if (verbose) {
    log(`  ${message}`, 'cyan');
  }
}

// Test results tracking
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
};

function recordPass() { results.passed++; }
function recordFail() { results.failed++; }
function recordWarn() { results.warnings++; }

// ============================================================================
// Test Suite
// ============================================================================

async function runTests() {
  log('\n========================================', 'blue');
  log('  n8n-nodes-setforth Test Suite', 'blue');
  log('========================================\n', 'blue');

  // Test 1: Package Structure
  log('[Test 1] Package Structure', 'yellow');
  testPackageStructure();

  // Test 2: Package.json Validation
  log('\n[Test 2] Package.json Validation', 'yellow');
  testPackageJson();

  // Test 3: TypeScript Compilation
  log('\n[Test 3] Compiled Files', 'yellow');
  testCompiledFiles();

  // Test 4: Node Definitions
  log('\n[Test 4] Node Definitions', 'yellow');
  testNodeDefinitions();

  // Test 5: Credential Definitions
  log('\n[Test 5] Credential Definitions', 'yellow');
  testCredentialDefinitions();

  // Test 6: Description Files
  log('\n[Test 6] Description Files', 'yellow');
  testDescriptionFiles();

  // Test 7: API Connectivity (optional)
  if (runApiTests) {
    log('\n[Test 7] API Connectivity', 'yellow');
    await testApiConnectivity();
  }

  // Summary
  printSummary();
}

// ----------------------------------------------------------------------------
// Test Functions
// ----------------------------------------------------------------------------

function testPackageStructure() {
  const requiredFiles = [
    'package.json',
    'tsconfig.json',
    'LICENSE',
    'README.md',
    'NOTICE.md',
    'COMMERCIAL-LICENSE.md',
  ];

  const requiredDirs = [
    'credentials',
    'nodes',
    'nodes/Setforth',
    'nodes/Setforth/descriptions',
  ];

  for (const file of requiredFiles) {
    if (fs.existsSync(file)) {
      logPass(`File exists: ${file}`);
      recordPass();
    } else {
      logFail(`Missing file: ${file}`);
      recordFail();
    }
  }

  for (const dir of requiredDirs) {
    if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
      logPass(`Directory exists: ${dir}`);
      recordPass();
    } else {
      logFail(`Missing directory: ${dir}`);
      recordFail();
    }
  }
}

function testPackageJson() {
  try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

    // Check required fields
    const requiredFields = ['name', 'version', 'description', 'license', 'main', 'n8n'];
    for (const field of requiredFields) {
      if (pkg[field]) {
        logPass(`package.json has '${field}'`);
        logVerbose(`  ${field}: ${typeof pkg[field] === 'object' ? JSON.stringify(pkg[field]).substring(0, 50) + '...' : pkg[field]}`);
        recordPass();
      } else {
        logFail(`package.json missing '${field}'`);
        recordFail();
      }
    }

    // Check n8n configuration
    if (pkg.n8n) {
      if (pkg.n8n.credentials && pkg.n8n.credentials.length > 0) {
        logPass(`n8n.credentials defined (${pkg.n8n.credentials.length} credential(s))`);
        recordPass();
      } else {
        logFail('n8n.credentials not defined or empty');
        recordFail();
      }

      if (pkg.n8n.nodes && pkg.n8n.nodes.length > 0) {
        logPass(`n8n.nodes defined (${pkg.n8n.nodes.length} node(s))`);
        recordPass();
      } else {
        logFail('n8n.nodes not defined or empty');
        recordFail();
      }
    }

    // Check keywords
    if (pkg.keywords && pkg.keywords.includes('n8n-community-node-package')) {
      logPass("Has 'n8n-community-node-package' keyword");
      recordPass();
    } else {
      logWarn("Missing 'n8n-community-node-package' keyword (recommended)");
      recordWarn();
    }

    // Check license
    if (pkg.license === 'BSL-1.1') {
      logPass('License is BSL-1.1');
      recordPass();
    } else {
      logWarn(`License is '${pkg.license}' (expected BSL-1.1)`);
      recordWarn();
    }

  } catch (error) {
    logFail(`Failed to parse package.json: ${error.message}`);
    recordFail();
  }
}

function testCompiledFiles() {
  const distFiles = [
    'dist/nodes/Setforth/Setforth.node.js',
    'dist/nodes/Setforth/Setforth.node.d.ts',
    'dist/nodes/Setforth/SetforthTrigger.node.js',
    'dist/nodes/Setforth/SetforthTrigger.node.d.ts',
    'dist/nodes/Setforth/GenericFunctions.js',
    'dist/nodes/Setforth/setforth.svg',
    'dist/credentials/SetforthOAuth2Api.credentials.js',
  ];

  if (!fs.existsSync('dist')) {
    logFail('dist/ directory does not exist. Run: npm run build');
    recordFail();
    return;
  }

  for (const file of distFiles) {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      logPass(`${file} (${(stats.size / 1024).toFixed(1)} KB)`);
      recordPass();
    } else {
      logFail(`Missing: ${file}`);
      recordFail();
    }
  }
}

function testNodeDefinitions() {
  const nodeFile = 'dist/nodes/Setforth/Setforth.node.js';
  
  if (!fs.existsSync(nodeFile)) {
    logFail('Setforth.node.js not found');
    recordFail();
    return;
  }

  try {
    const nodeContent = fs.readFileSync(nodeFile, 'utf8');

    // Check for class export
    if (nodeContent.includes('class Setforth')) {
      logPass('Setforth class defined');
      recordPass();
    } else {
      logFail('Setforth class not found');
      recordFail();
    }

    // Check for description property
    if (nodeContent.includes('description')) {
      logPass('Node description defined');
      recordPass();
    } else {
      logFail('Node description not found');
      recordFail();
    }

    // Check for execute method
    if (nodeContent.includes('execute')) {
      logPass('execute() method defined');
      recordPass();
    } else {
      logFail('execute() method not found');
      recordFail();
    }

    // Count resources
    const resourceMatches = nodeContent.match(/case ['"](\w+)['"]:/g) || [];
    const uniqueResources = new Set(resourceMatches.map(m => m.match(/['"](\w+)['"]/)[1]));
    logInfo(`Resources detected: ${uniqueResources.size}`);

  } catch (error) {
    logFail(`Failed to read node file: ${error.message}`);
    recordFail();
  }
}

function testCredentialDefinitions() {
  const credFile = 'dist/credentials/SetforthOAuth2Api.credentials.js';
  
  if (!fs.existsSync(credFile)) {
    logFail('SetforthOAuth2Api.credentials.js not found');
    recordFail();
    return;
  }

  try {
    const credContent = fs.readFileSync(credFile, 'utf8');

    // Check for class export
    if (credContent.includes('class SetforthOAuth2Api')) {
      logPass('SetforthOAuth2Api class defined');
      recordPass();
    } else {
      logFail('SetforthOAuth2Api class not found');
      recordFail();
    }

    // Check for OAuth2 properties
    const oauthProps = ['clientId', 'clientSecret', 'authentication'];
    for (const prop of oauthProps) {
      if (credContent.includes(prop)) {
        logPass(`OAuth2 property '${prop}' defined`);
        recordPass();
      } else {
        logWarn(`OAuth2 property '${prop}' may be missing`);
        recordWarn();
      }
    }

    // Check for environment options
    if (credContent.includes('sandbox') && credContent.includes('production')) {
      logPass('Environment options (sandbox/production) defined');
      recordPass();
    } else {
      logWarn('Environment options may be missing');
      recordWarn();
    }

  } catch (error) {
    logFail(`Failed to read credentials file: ${error.message}`);
    recordFail();
  }
}

function testDescriptionFiles() {
  const descDir = 'dist/nodes/Setforth/descriptions';
  
  if (!fs.existsSync(descDir)) {
    logFail('descriptions/ directory not found in dist');
    recordFail();
    return;
  }

  const expectedDescriptions = [
    'ContactDescription.js',
    'DebtDescription.js',
    'EnrollmentDescription.js',
    'SettlementOfferDescription.js',
    'DocumentDescription.js',
    'ClixsignDescription.js',
    'ForthCreditDescription.js',
    'CallDescription.js',
    'TaskDescription.js',
    'UserDescription.js',
    'MarketingDescription.js',
    'AdministrationDescription.js',
    'ConfigurationDescription.js',
  ];

  let found = 0;
  let missing = 0;

  for (const desc of expectedDescriptions) {
    const filePath = path.join(descDir, desc);
    if (fs.existsSync(filePath)) {
      found++;
      logVerbose(`Found: ${desc}`);
    } else {
      missing++;
      logVerbose(`Missing: ${desc}`);
    }
  }

  if (missing === 0) {
    logPass(`All ${found} description files present`);
    recordPass();
  } else {
    logWarn(`${found}/${expectedDescriptions.length} description files present`);
    recordWarn();
  }

  // Count total description files
  const allFiles = fs.readdirSync(descDir).filter(f => f.endsWith('.js'));
  logInfo(`Total description files: ${allFiles.length}`);
}

async function testApiConnectivity() {
  const clientId = process.env.SETFORTH_CLIENT_ID;
  const clientSecret = process.env.SETFORTH_CLIENT_SECRET;
  const environment = process.env.SETFORTH_ENVIRONMENT || 'sandbox';

  if (!clientId || !clientSecret) {
    logWarn('API credentials not provided');
    logInfo('Set SETFORTH_CLIENT_ID and SETFORTH_CLIENT_SECRET environment variables');
    logInfo('Example:');
    logInfo('  export SETFORTH_CLIENT_ID="your_client_id"');
    logInfo('  export SETFORTH_CLIENT_SECRET="your_client_secret"');
    logInfo('  node test-node.js --api');
    recordWarn();
    return;
  }

  const baseUrl = environment === 'production' 
    ? 'api.setforth.com' 
    : 'api.sandbox.setforth.com';

  logInfo(`Testing API connectivity to ${environment} environment...`);
  logInfo(`Base URL: https://${baseUrl}`);

  try {
    // Test OAuth token request
    const tokenResponse = await makeRequest({
      hostname: baseUrl,
      path: '/oauth/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}`,
    });

    if (tokenResponse.access_token) {
      logPass('OAuth token obtained successfully');
      logVerbose(`Token type: ${tokenResponse.token_type}`);
      logVerbose(`Expires in: ${tokenResponse.expires_in} seconds`);
      recordPass();

      // Test a simple API call
      const userResponse = await makeRequest({
        hostname: baseUrl,
        path: '/api/v1/users/me',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${tokenResponse.access_token}`,
          'Content-Type': 'application/json',
        },
      });

      if (userResponse && !userResponse.error) {
        logPass('API call successful (GET /users/me)');
        if (userResponse.email) {
          logVerbose(`User email: ${userResponse.email}`);
        }
        recordPass();
      } else {
        logWarn(`API call returned: ${JSON.stringify(userResponse)}`);
        recordWarn();
      }

    } else if (tokenResponse.error) {
      logFail(`OAuth error: ${tokenResponse.error} - ${tokenResponse.error_description || ''}`);
      recordFail();
    } else {
      logWarn(`Unexpected response: ${JSON.stringify(tokenResponse)}`);
      recordWarn();
    }

  } catch (error) {
    logFail(`API connectivity test failed: ${error.message}`);
    recordFail();
  }
}

// ----------------------------------------------------------------------------
// Helper Functions
// ----------------------------------------------------------------------------

function makeRequest(options) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: options.hostname,
      port: 443,
      path: options.path,
      method: options.method,
      headers: options.headers,
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({ raw: data, statusCode: res.statusCode });
        }
      });
    });

    req.on('error', reject);
    
    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

function printSummary() {
  log('\n========================================', 'blue');
  log('  Test Summary', 'blue');
  log('========================================\n', 'blue');

  log(`  Passed:   ${results.passed}`, 'green');
  log(`  Failed:   ${results.failed}`, results.failed > 0 ? 'red' : 'reset');
  log(`  Warnings: ${results.warnings}`, results.warnings > 0 ? 'yellow' : 'reset');
  log('');

  if (results.failed === 0) {
    log('All tests passed! ✓', 'green');
    log('');
    log('Next steps:', 'blue');
    log('  1. Start n8n: n8n start');
    log('  2. Open: http://localhost:5678');
    log('  3. Add Setforth credentials');
    log('  4. Create a workflow with the Setforth node');
  } else {
    log('Some tests failed. Please fix the issues above.', 'red');
    log('');
    log('Common fixes:', 'blue');
    log('  • Run: npm run build');
    log('  • Check for TypeScript errors');
    log('  • Verify all required files exist');
  }

  log('\n========================================\n', 'blue');

  process.exit(results.failed > 0 ? 1 : 0);
}

// Run tests
runTests().catch(error => {
  logFail(`Unhandled error: ${error.message}`);
  process.exit(1);
});
