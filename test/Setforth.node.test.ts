/**
 * Copyright (c) 2026 Velocity BPA
 * Licensed under the Business Source License 1.1
 */

import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { Setforth } from '../nodes/Setforth/Setforth.node';

// Mock n8n-workflow
jest.mock('n8n-workflow', () => ({
  ...jest.requireActual('n8n-workflow'),
  NodeApiError: class NodeApiError extends Error {
    constructor(node: any, error: any) { super(error.message || 'API Error'); }
  },
  NodeOperationError: class NodeOperationError extends Error {
    constructor(node: any, message: string) { super(message); }
  },
}));

describe('Setforth Node', () => {
  let node: Setforth;

  beforeAll(() => {
    node = new Setforth();
  });

  describe('Node Definition', () => {
    it('should have correct basic properties', () => {
      expect(node.description.displayName).toBe('Setforth');
      expect(node.description.name).toBe('setforth');
      expect(node.description.version).toBe(1);
      expect(node.description.inputs).toContain('main');
      expect(node.description.outputs).toContain('main');
    });

    it('should define 3 resources', () => {
      const resourceProp = node.description.properties.find(
        (p: any) => p.name === 'resource'
      );
      expect(resourceProp).toBeDefined();
      expect(resourceProp!.type).toBe('options');
      expect(resourceProp!.options).toHaveLength(3);
    });

    it('should have operation dropdowns for each resource', () => {
      const operations = node.description.properties.filter(
        (p: any) => p.name === 'operation'
      );
      expect(operations.length).toBe(3);
    });

    it('should require credentials', () => {
      expect(node.description.credentials).toBeDefined();
      expect(node.description.credentials!.length).toBeGreaterThan(0);
      expect(node.description.credentials![0].required).toBe(true);
    });

    it('should have parameters with proper displayOptions', () => {
      const params = node.description.properties.filter(
        (p: any) => p.displayOptions?.show?.resource
      );
      for (const param of params) {
        expect(param.displayOptions.show.resource).toBeDefined();
        expect(Array.isArray(param.displayOptions.show.resource)).toBe(true);
      }
    });
  });

  // Resource-specific tests
describe('Setforth Resource Resource', () => {
  let mockExecuteFunctions: any;

  beforeEach(() => {
    mockExecuteFunctions = {
      getNodeParameter: jest.fn(),
      getCredentials: jest.fn().mockResolvedValue({ 
        apiKey: 'test-key', 
        baseUrl: 'https://api.setforth.com' 
      }),
      getInputData: jest.fn().mockReturnValue([{ json: {} }]),
      getNode: jest.fn().mockReturnValue({ name: 'Test Node' }),
      continueOnFail: jest.fn().mockReturnValue(false),
      helpers: { 
        httpRequest: jest.fn(),
        requestWithAuthentication: jest.fn() 
      },
    };
  });

  describe('create operation', () => {
    it('should create a resource successfully', async () => {
      const mockResponse = { id: '123', name: 'Test Resource' };
      mockExecuteFunctions.getNodeParameter
        .mockReturnValueOnce('create')
        .mockReturnValueOnce({ name: 'Test Resource' });
      mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

      const result = await executeSetforthResourceOperations.call(
        mockExecuteFunctions,
        [{ json: {} }]
      );

      expect(result).toEqual([{ json: mockResponse, pairedItem: { item: 0 } }]);
      expect(mockExecuteFunctions.helpers.httpRequest).toHaveBeenCalledWith({
        method: 'POST',
        url: 'https://api.setforth.com/resources',
        headers: {
          'Authorization': 'Bearer test-key',
          'Content-Type': 'application/json'
        },
        body: { name: 'Test Resource' },
        json: true
      });
    });

    it('should handle create operation errors', async () => {
      mockExecuteFunctions.getNodeParameter
        .mockReturnValueOnce('create')
        .mockReturnValueOnce({ name: 'Test Resource' });
      mockExecuteFunctions.helpers.httpRequest.mockRejectedValue(new Error('API Error'));
      mockExecuteFunctions.continueOnFail.mockReturnValue(true);

      const result = await executeSetforthResourceOperations.call(
        mockExecuteFunctions,
        [{ json: {} }]
      );

      expect(result).toEqual([{ json: { error: 'API Error' }, pairedItem: { item: 0 } }]);
    });
  });

  describe('get operation', () => {
    it('should get a resource successfully', async () => {
      const mockResponse = { id: '123', name: 'Test Resource' };
      mockExecuteFunctions.getNodeParameter
        .mockReturnValueOnce('get')
        .mockReturnValueOnce('123');
      mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

      const result = await executeSetforthResourceOperations.call(
        mockExecuteFunctions,
        [{ json: {} }]
      );

      expect(result).toEqual([{ json: mockResponse, pairedItem: { item: 0 } }]);
      expect(mockExecuteFunctions.helpers.httpRequest).toHaveBeenCalledWith({
        method: 'GET',
        url: 'https://api.setforth.com/resources/123',
        headers: {
          'Authorization': 'Bearer test-key'
        },
        json: true
      });
    });
  });

  describe('getAll operation', () => {
    it('should list resources successfully', async () => {
      const mockResponse = { resources: [{ id: '123', name: 'Test Resource' }] };
      mockExecuteFunctions.getNodeParameter
        .mockReturnValueOnce('getAll')
        .mockReturnValueOnce(50)
        .mockReturnValueOnce(0);
      mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

      const result = await executeSetforthResourceOperations.call(
        mockExecuteFunctions,
        [{ json: {} }]
      );

      expect(result).toEqual([{ json: mockResponse, pairedItem: { item: 0 } }]);
      expect(mockExecuteFunctions.helpers.httpRequest).toHaveBeenCalledWith({
        method: 'GET',
        url: 'https://api.setforth.com/resources',
        headers: {
          'Authorization': 'Bearer test-key'
        },
        qs: {
          limit: 50,
          offset: 0
        },
        json: true
      });
    });
  });

  describe('update operation', () => {
    it('should update a resource successfully', async () => {
      const mockResponse = { id: '123', name: 'Updated Resource' };
      mockExecuteFunctions.getNodeParameter
        .mockReturnValueOnce('update')
        .mockReturnValueOnce('123')
        .mockReturnValueOnce({ name: 'Updated Resource' });
      mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

      const result = await executeSetforthResourceOperations.call(
        mockExecuteFunctions,
        [{ json: {} }]
      );

      expect(result).toEqual([{ json: mockResponse, pairedItem: { item: 0 } }]);
      expect(mockExecuteFunctions.helpers.httpRequest).toHaveBeenCalledWith({
        method: 'PUT',
        url: 'https://api.setforth.com/resources/123',
        headers: {
          'Authorization': 'Bearer test-key',
          'Content-Type': 'application/json'
        },
        body: { name: 'Updated Resource' },
        json: true
      });
    });
  });

  describe('delete operation', () => {
    it('should delete a resource successfully', async () => {
      const mockResponse = { success: true };
      mockExecuteFunctions.getNodeParameter
        .mockReturnValueOnce('delete')
        .mockReturnValueOnce('123');
      mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

      const result = await executeSetforthResourceOperations.call(
        mockExecuteFunctions,
        [{ json: {} }]
      );

      expect(result).toEqual([{ json: mockResponse, pairedItem: { item: 0 } }]);
      expect(mockExecuteFunctions.helpers.httpRequest).toHaveBeenCalledWith({
        method: 'DELETE',
        url: 'https://api.setforth.com/resources/123',
        headers: {
          'Authorization': 'Bearer test-key'
        },
        json: true
      });
    });
  });
});

describe('SetforthEvent Resource', () => {
  let mockExecuteFunctions: any;

  beforeEach(() => {
    mockExecuteFunctions = {
      getNodeParameter: jest.fn(),
      getCredentials: jest.fn().mockResolvedValue({
        apiKey: 'test-key',
        baseUrl: 'https://api.setforth.com'
      }),
      getInputData: jest.fn().mockReturnValue([{ json: {} }]),
      getNode: jest.fn().mockReturnValue({ name: 'Test Node' }),
      continueOnFail: jest.fn().mockReturnValue(false),
      helpers: {
        httpRequest: jest.fn(),
        requestWithAuthentication: jest.fn()
      },
    };
  });

  test('should create event successfully', async () => {
    const mockEventData = { name: 'Test Event', description: 'Test Description' };
    const mockResponse = { id: '123', ...mockEventData };

    mockExecuteFunctions.getNodeParameter
      .mockReturnValueOnce('create')
      .mockReturnValueOnce(mockEventData);
    
    mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

    const result = await executeSetforthEventOperations.call(
      mockExecuteFunctions,
      [{ json: {} }]
    );

    expect(result).toEqual([{
      json: mockResponse,
      pairedItem: { item: 0 }
    }]);
  });

  test('should get event by ID successfully', async () => {
    const mockEventId = '123';
    const mockResponse = { id: '123', name: 'Test Event' };

    mockExecuteFunctions.getNodeParameter
      .mockReturnValueOnce('get')
      .mockReturnValueOnce(mockEventId);
    
    mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

    const result = await executeSetforthEventOperations.call(
      mockExecuteFunctions,
      [{ json: {} }]
    );

    expect(result).toEqual([{
      json: mockResponse,
      pairedItem: { item: 0 }
    }]);
  });

  test('should list events successfully', async () => {
    const mockResponse = { events: [{ id: '1' }, { id: '2' }] };

    mockExecuteFunctions.getNodeParameter
      .mockReturnValueOnce('getAll')
      .mockReturnValueOnce(50)
      .mockReturnValueOnce(0);
    
    mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

    const result = await executeSetforthEventOperations.call(
      mockExecuteFunctions,
      [{ json: {} }]
    );

    expect(result).toEqual([{
      json: mockResponse,
      pairedItem: { item: 0 }
    }]);
  });

  test('should update event successfully', async () => {
    const mockEventId = '123';
    const mockEventData = { name: 'Updated Event' };
    const mockResponse = { id: '123', ...mockEventData };

    mockExecuteFunctions.getNodeParameter
      .mockReturnValueOnce('update')
      .mockReturnValueOnce(mockEventId)
      .mockReturnValueOnce(mockEventData);
    
    mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

    const result = await executeSetforthEventOperations.call(
      mockExecuteFunctions,
      [{ json: {} }]
    );

    expect(result).toEqual([{
      json: mockResponse,
      pairedItem: { item: 0 }
    }]);
  });

  test('should delete event successfully', async () => {
    const mockEventId = '123';
    const mockResponse = { success: true };

    mockExecuteFunctions.getNodeParameter
      .mockReturnValueOnce('delete')
      .mockReturnValueOnce(mockEventId);
    
    mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

    const result = await executeSetforthEventOperations.call(
      mockExecuteFunctions,
      [{ json: {} }]
    );

    expect(result).toEqual([{
      json: mockResponse,
      pairedItem: { item: 0 }
    }]);
  });

  test('should handle errors gracefully when continueOnFail is true', async () => {
    mockExecuteFunctions.getNodeParameter.mockReturnValueOnce('get');
    mockExecuteFunctions.continueOnFail.mockReturnValue(true);
    mockExecuteFunctions.helpers.httpRequest.mockRejectedValue(new Error('API Error'));

    const result = await executeSetforthEventOperations.call(
      mockExecuteFunctions,
      [{ json: {} }]
    );

    expect(result).toEqual([{
      json: { error: 'API Error' },
      pairedItem: { item: 0 }
    }]);
  });
});

describe('SetforthAccount Resource', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			getCredentials: jest.fn().mockResolvedValue({
				apiKey: 'test-key',
				baseUrl: 'https://api.setforth.com',
			}),
			getInputData: jest.fn().mockReturnValue([{ json: {} }]),
			getNode: jest.fn().mockReturnValue({ name: 'Test Node' }),
			continueOnFail: jest.fn().mockReturnValue(false),
			helpers: {
				httpRequest: jest.fn(),
				requestWithAuthentication: jest.fn(),
			},
		};
	});

	describe('create operation', () => {
		it('should create account successfully', async () => {
			const mockResponse = { id: 'acc_123', name: 'Test Account' };
			mockExecuteFunctions.getNodeParameter
				.mockReturnValueOnce('create')
				.mockReturnValueOnce({ name: 'Test Account' });
			mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

			const result = await executeSetforthAccountOperations.call(
				mockExecuteFunctions,
				[{ json: {} }],
			);

			expect(result).toEqual([
				{ json: mockResponse, pairedItem: { item: 0 } },
			]);
		});

		it('should handle create errors', async () => {
			mockExecuteFunctions.getNodeParameter
				.mockReturnValueOnce('create')
				.mockReturnValueOnce({ name: 'Test Account' });
			mockExecuteFunctions.helpers.httpRequest.mockRejectedValue(new Error('API Error'));
			mockExecuteFunctions.continueOnFail.mockReturnValue(true);

			const result = await executeSetforthAccountOperations.call(
				mockExecuteFunctions,
				[{ json: {} }],
			);

			expect(result).toEqual([
				{ json: { error: 'API Error' }, pairedItem: { item: 0 } },
			]);
		});
	});

	describe('get operation', () => {
		it('should get account successfully', async () => {
			const mockResponse = { id: 'acc_123', name: 'Test Account' };
			mockExecuteFunctions.getNodeParameter
				.mockReturnValueOnce('get')
				.mockReturnValueOnce('acc_123');
			mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

			const result = await executeSetforthAccountOperations.call(
				mockExecuteFunctions,
				[{ json: {} }],
			);

			expect(result).toEqual([
				{ json: mockResponse, pairedItem: { item: 0 } },
			]);
		});
	});

	describe('getAll operation', () => {
		it('should list accounts successfully', async () => {
			const mockResponse = { accounts: [{ id: 'acc_123' }], total: 1 };
			mockExecuteFunctions.getNodeParameter
				.mockReturnValueOnce('getAll')
				.mockReturnValueOnce(50)
				.mockReturnValueOnce(0);
			mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

			const result = await executeSetforthAccountOperations.call(
				mockExecuteFunctions,
				[{ json: {} }],
			);

			expect(result).toEqual([
				{ json: mockResponse, pairedItem: { item: 0 } },
			]);
		});
	});

	describe('update operation', () => {
		it('should update account successfully', async () => {
			const mockResponse = { id: 'acc_123', name: 'Updated Account' };
			mockExecuteFunctions.getNodeParameter
				.mockReturnValueOnce('update')
				.mockReturnValueOnce('acc_123')
				.mockReturnValueOnce({ name: 'Updated Account' });
			mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

			const result = await executeSetforthAccountOperations.call(
				mockExecuteFunctions,
				[{ json: {} }],
			);

			expect(result).toEqual([
				{ json: mockResponse, pairedItem: { item: 0 } },
			]);
		});
	});

	describe('delete operation', () => {
		it('should delete account successfully', async () => {
			const mockResponse = { success: true };
			mockExecuteFunctions.getNodeParameter
				.mockReturnValueOnce('delete')
				.mockReturnValueOnce('acc_123');
			mockExecuteFunctions.helpers.httpRequest.mockResolvedValue(mockResponse);

			const result = await executeSetforthAccountOperations.call(
				mockExecuteFunctions,
				[{ json: {} }],
			);

			expect(result).toEqual([
				{ json: mockResponse, pairedItem: { item: 0 } },
			]);
		});
	});
});
});
