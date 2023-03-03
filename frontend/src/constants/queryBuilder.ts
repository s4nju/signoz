export type QueryBuilderStateT = 'search';

export const QUERY_BUILDER_STATE_KEYS = {
	SEARCH: 'search' as QueryBuilderStateT,
};

// VALUES
export const QUERY_BUILDER_SEARCH_VALUES = {
	MULTIPLY: 'MULTIPLY_VALUE',
	SINGLE: 'SINGLE_VALUE',
	NON: 'NON_VALUE',
	NOT_VALID: 'NOT_VALID',
};

// OPERATORS
export const OPERATORS = {
	IN: 'IN',
	NIN: 'NOT_IN',
	LIKE: 'LIKE',
	NLIKE: 'NOT_LIKE',
	EQUALS: 'EQUALS',
	NOT_EQUALS: 'NOT_EQUALS',
	EXISTS: 'EXISTS',
	NOT_EXISTS: 'NOT_EXISTS',
	CONTAINS: 'CONTAINS',
	NOT_CONTAINS: 'NOT_CONTAINS',
	GTE: 'GREATER_THAN_OR_EQUALS',
	GT: 'GREATER_THAN',
	LTE: 'LESS_THAN_OR_EQUALS',
	LT: 'LESS_THAN',
};

export const QUERY_BUILDER_OPERATORS_BY_TYPES = {
	STRING: [
		OPERATORS.EQUALS,
		OPERATORS.NOT_EQUALS,
		OPERATORS.IN,
		OPERATORS.NIN,
		OPERATORS.LIKE,
		OPERATORS.NLIKE,
		OPERATORS.CONTAINS,
		OPERATORS.NOT_CONTAINS,
		OPERATORS.EXISTS,
		OPERATORS.NOT_EXISTS,
	],
	NUMBER: [
		OPERATORS.EQUALS,
		OPERATORS.NOT_EQUALS,
		OPERATORS.IN,
		OPERATORS.NIN,
		OPERATORS.EXISTS,
		OPERATORS.NOT_EXISTS,
		OPERATORS.GTE,
		OPERATORS.GT,
		OPERATORS.LTE,
		OPERATORS.LT,
	],
	BOOLEAN: [
		OPERATORS.EQUALS,
		OPERATORS.NOT_EQUALS,
		OPERATORS.EXISTS,
		OPERATORS.NOT_EXISTS,
	],
	UNIVERSAL: [
		OPERATORS.EQUALS,
		OPERATORS.NOT_EQUALS,
		OPERATORS.IN,
		OPERATORS.NIN,
		OPERATORS.EXISTS,
		OPERATORS.NOT_EXISTS,
		OPERATORS.LIKE,
		OPERATORS.NLIKE,
		OPERATORS.GTE,
		OPERATORS.GT,
		OPERATORS.LTE,
		OPERATORS.LT,
		OPERATORS.CONTAINS,
		OPERATORS.NOT_CONTAINS,
	],
};