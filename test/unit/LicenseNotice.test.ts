/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

describe('LicenseNotice', () => {
	let consoleWarnSpy: jest.SpyInstance;

	beforeEach(() => {
		consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
		// Clear the module cache to reset the Set
		jest.resetModules();
	});

	afterEach(() => {
		consoleWarnSpy.mockRestore();
	});

	it('should log license notice on first call', () => {
		const { logLicenseNotice } = require('../../nodes/Setforth/LicenseNotice');
		
		logLicenseNotice('TestNode');

		expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
		expect(consoleWarnSpy).toHaveBeenCalledWith(
			expect.stringContaining('[Velocity BPA Licensing Notice]')
		);
		expect(consoleWarnSpy).toHaveBeenCalledWith(
			expect.stringContaining('Business Source License 1.1')
		);
		expect(consoleWarnSpy).toHaveBeenCalledWith(
			expect.stringContaining('https://velobpa.com/licensing')
		);
	});

	it('should not log license notice on subsequent calls for same node', () => {
		const { logLicenseNotice } = require('../../nodes/Setforth/LicenseNotice');
		
		logLicenseNotice('TestNode2');
		logLicenseNotice('TestNode2');
		logLicenseNotice('TestNode2');

		expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
	});

	it('should log license notice for different node types', () => {
		const { logLicenseNotice } = require('../../nodes/Setforth/LicenseNotice');
		
		logLicenseNotice('NodeA');
		logLicenseNotice('NodeB');

		expect(consoleWarnSpy).toHaveBeenCalledTimes(2);
	});
});
