let log = (args) => {};
if (/info|verbose|silly/i.test(process.env.npm_config_loglevel)) {
    log = (args) => {console.log(args)};
}

module.exports = {
    log: log
}
