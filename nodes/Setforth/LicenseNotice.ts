/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

const LICENSE_NOTICE_LOGGED = new Set<string>();

/**
 * Logs the Velocity BPA licensing notice once per node type.
 * Non-blocking, informational only.
 */
export function logLicenseNotice(nodeType: string): void {
	if (LICENSE_NOTICE_LOGGED.has(nodeType)) {
		return;
	}

	LICENSE_NOTICE_LOGGED.add(nodeType);

	const message =
		'[Velocity BPA Licensing Notice] ' +
		'This n8n node is licensed under the Business Source License 1.1 (BSL 1.1). ' +
		'Use of this node by for-profit organizations in production environments requires a commercial license from Velocity BPA. ' +
		'For licensing information, visit https://velobpa.com/licensing or contact licensing@velobpa.com.';

	console.warn(message);
}
