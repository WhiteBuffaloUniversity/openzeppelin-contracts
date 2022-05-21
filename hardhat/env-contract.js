extendEnvironment(env => {
  const { contract } = env;

  env.contract = function (name, body) {
    contract(name, accounts => body(accounts.slice(1)));
  };
});
