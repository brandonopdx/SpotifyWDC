/* eslint-env node, mocha, jest */
import { copyFunctions, linkObjectProperties } from './Utilities';

describe('UNIT - Utilities', () => {

    it('copyFunctions to copy functions from source to target', () => {
        let source = {
            a: function a () {

            }
        };

        let target = {};

        copyFunctions(source, target);

        expect(target.a).toBe(source.a);

    });

    it('linkObjectProperties to change the values from target to source', () => {
        let source = {
            a: function a () {

            },
            x: 5,
            y: 'this is why'
        };

        let target = {
            y: 'there\'no why'
        };

        linkObjectProperties(source, target, ['x', 'y']);

        expect(target.x).toBe(source.x);
        expect(target.y).toBe(source.y);

        let y = 'I wonder why';
        target.y = y;

        expect(target.y).toBe(source.y);
        expect(target.y).toBe(y);

    });
});
