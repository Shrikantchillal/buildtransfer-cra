import Header from './components/header';
import { shallow } from 'enzyme';

const sum = (x, y) => x + y; 

describe('Examining the syntax of jest test', () => {
  it('sum numbers', () => {
    expect(1+2).toEqual(3);
  });

  it('New sum numbers', () => {
    expect(sum(4,5)).toEqual(9);
    expect(sum(3,3)).toEqual(6);
  });
});

describe('First react component from enzyme', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});

