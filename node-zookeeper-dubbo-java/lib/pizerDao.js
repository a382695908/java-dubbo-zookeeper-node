
const nzd = require('node-zookeeper-dubbo');
const java2js = require('js-to-java');

const opt = {
    application: {name: 'pizer'},
    register: `127.0.0.1:2181`,
    dubboVer: '2.5.6',
    root: 'dubbo',
    dependencies: {
        ExampleTestService: {interface: 'pizer.Service.ExampleTestService', timeout: 6000},
    }
}

const Dubbo = new nzd(opt);

module.exports = {
    pizer: {
        OutString: async (a) => Dubbo.ExampleTestService.OutString(
            java2js.String(a)
        )
    },
}