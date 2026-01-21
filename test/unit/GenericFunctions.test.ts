/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

import { handleErrorResponse } from '../../nodes/Setforth/GenericFunctions';

describe('GenericFunctions', () => {
	describe('handleErrorResponse', () => {
		it('should return correct message for 400 error', () => {
			const result = handleErrorResponse(400);
			expect(result).toContain('Bad Request');
		});

		it('should return correct message for 401 error', () => {
			const result = handleErrorResponse(401);
			expect(result).toContain('Unauthorized');
		});

		it('should return correct message for 403 error', () => {
			const result = handleErrorResponse(403);
			expect(result).toContain('Forbidden');
		});

		it('should return correct message for 404 error', () => {
			const result = handleErrorResponse(404);
			expect(result).toContain('Not Found');
		});

		it('should return correct message for 429 error', () => {
			const result = handleErrorResponse(429);
			expect(result).toContain('Too Many Requests');
		});

		it('should return correct message for 500 error', () => {
			const result = handleErrorResponse(500);
			expect(result).toContain('Internal Server Error');
		});

		it('should return custom message for unknown error code', () => {
			const result = handleErrorResponse(418, 'I am a teapot');
			expect(result).toBe('I am a teapot');
		});

		it('should return generic message for unknown error code without message', () => {
			const result = handleErrorResponse(418);
			expect(result).toContain('418');
		});
	});
});
