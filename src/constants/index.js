import algoliasearch from 'algoliasearch';

export const algolia = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e', { protocol: 'https:' });
export const index = algolia.initIndex('npm-search');