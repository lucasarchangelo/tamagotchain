const Token1 = artifacts.require("Token1");

module.exports = async function (deployer, _network, accounts) {

    await deployer.deploy(
        Token1,
    );
}