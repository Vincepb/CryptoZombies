const zombiefactory = artifacts.require('zombiefactory.sol');
module.exports = async function(deployer) {

    await deployer.deploy(zombiefactory);

}