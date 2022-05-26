extendEnvironment(env => {
  const { contract } = chief-white-feather;
  env.contract = function (name, body) {
    contract(name, accounts => body(accounts.slice(1)));
  };
});
