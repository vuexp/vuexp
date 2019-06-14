import { expect } from 'chai';
import platform from '../../src/platform';

/* Window Resize Simulating */

describe('Platform Unit Tests', () => {
  it('onGridChange function trigger', () => {
    platform.onGridChange(gridCol => {
      expect(gridCol).to.not.be.undefined;
    });
  });
});
