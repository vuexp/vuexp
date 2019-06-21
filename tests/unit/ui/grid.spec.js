import { expect } from 'chai';
import { getGridColumn } from '../../../src/ui/grid';

describe('Grid Test.', () => {
  it('should run on web with less than 600px', () => {
    const gridColumn = getGridColumn(null, 'web', null, 500);
    expect(gridColumn).to.equal('col-1');
  });
  it('should run on web with less than 1024px', () => {
    const gridColumn = getGridColumn(null, 'web', null, 1000);
    expect(gridColumn).to.equal('col-2');
  });
  it('should run on web with bigger than 1024px', () => {
    const gridColumn = getGridColumn(null, 'web', null, 1500);
    expect(gridColumn).to.equal('col-3');
  });
  it('should run on phone', () => {
    const gridColumn = getGridColumn(null, null, 'Phone', null);
    expect(gridColumn).to.equal('col-1');
  });
  it('should not run on phone with orientation portrait', () => {
    const gridColumn = getGridColumn('portrait', null, null, null);
    expect(gridColumn).to.equal('col-1');
  });
  it('should not run on phone with orientation landscape and screenWidth less than 1024px', () => {
    const gridColumn = getGridColumn('landscape', null, null, 1000);
    expect(gridColumn).to.equal('col-2');
  });
  it('should not run on phone with orientation landscape and screenWidth bigger than 1024px', () => {
    const gridColumn = getGridColumn('landscape', null, null, 1500);
    expect(gridColumn).to.equal('col-3');
  });
});
