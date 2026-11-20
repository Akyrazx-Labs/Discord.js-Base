import test from 'node:test';
import assert from 'node:assert/strict';

import formatUptime from '../src/utils/formatUptime.js';
import pingCommand from '../src/commands/prefix/ping.js';

test('formatUptime returns seconds for short durations', () => {
    assert.equal(formatUptime(5000), '5s');
});

test('formatUptime returns minutes and seconds', () => {
    assert.equal(formatUptime(125000), '2m 5s');
});

test('formatUptime returns hours, minutes and seconds', () => {
    assert.equal(formatUptime(3723000), '1h 2m 3s');
});

test('formatUptime returns days, hours and minutes', () => {
    assert.equal(formatUptime(90061000), '1d 1h 1m');
});

test('ping command exports the expected structure', () => {
    assert.equal(pingCommand.name, 'ping');
    assert.equal(pingCommand.description, 'Mostra a latência do bot e da API');
    assert.deepEqual(pingCommand.aliases, ['latencia', 'ms']);
    assert.equal(pingCommand.cooldown, 3);
    assert.equal(typeof pingCommand.execute, 'function');
});
