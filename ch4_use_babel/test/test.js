import {sampleProvinceData, Province} from '../src/example.js'
import {assert, expect} from 'chai';

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
        expect(asia.shortfall).equal(5);
    });
    it('profit', () => {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.profit, 230);
        expect(asia.profit).equal(230);
    });
});
