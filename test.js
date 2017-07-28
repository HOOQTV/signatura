'use strict';

const test = require('tape'),
    sign = require('./');

test('sign', (t) => {
    t.plan(3);
    t.equal('LJ/2DQV5VZYyg/jafVfyHIzr2ag=',
            sign('GET', 'https://partners.hooq.tv/v1/customes/foo/bar?customer=1', 'supersecret'));

    t.equal('qZwbpGMSw7bBwgIhJVWbEHigFVM=',
            sign('POST', 'https://partners.hooq.tv/v1/customes/foo/bar?customer=1', 'supersecret', { hihi: 'haha' }));

    t.equal('u3951nR3b59A1jCbRPIWdbMoWu4=',
            sign('POST', 'https://partners.hooq.tv/v1/customes/foo/bar?customer=1', 'supersecret', 'hihi=haha&hoho=hehe'));
});
