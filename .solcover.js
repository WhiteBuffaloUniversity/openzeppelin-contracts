export const norpc = true;
export const testCommand = 'npm test';
export const compileCommand = 'npm run compile';
export const skipFiles = [
    'mocks',
];
export const providerOptions = {
    default_balance_ether: '10000000000000000000000000',
};
export const mocha = {
    fgrep: '[skip-on-coverage]',
    invert: true,
};
