import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import VxpWebView from '../../../src/components/VxpWebView';

describe('VxpWebView.vue', () => {
  const src = 'http://nativescript-vue.org/';
  const html = '<div>Hello World</div>';
  const loadStarted = sinon.spy();
  const loadFinished = sinon.spy();
  const wrapper = mount(VxpWebView, {
    name: 'VxpWebView',
    props: {
      src: String,
      html: String,
    },
    propsData: {
      src,
      html,
    },
    listeners: {
      loadStarted,
      loadFinished,
    },
    attachToDocument: true,
  });

  describe('The component receives given props correctly.', () => {
    it(`should initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper.props().src).to.equal(src);
    });
    it(`should initial source taken from html is equal to: ${html}.`, () => {
      expect(wrapper.props().html).to.equal(html);
    });
    it('should loadFinished event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.loadFinished).to.not.equal(undefined);
    });
    it('should loadStarted event property is passed to the component successfully.', () => {
      expect(wrapper.vm.$listeners.loadStarted).to.not.equal(undefined);
    });
  });

  describe('The component contains exactly one iframe.', () => {
    it('should there is one iframe.', () => {
      expect(wrapper.contains('iframe')).to.equal(true);
      expect(wrapper.findAll('iframe').length).to.equal(1);
    });
  });

  describe('Event testing.', () => {
    it('should the VxpWebView emits load event so, event handler named loadFinished gets thrown.', () => {
      wrapper.find('iframe').trigger('load');
      expect(wrapper.emitted().loadFinished.length).to.equal(1);
      expect(loadFinished.called).to.equal(true);
    });
    it('should the VxpWebView emits load event so, event handler named loadStarted gets thrown.', () => {
      wrapper.find('iframe').trigger('load');
      expect(wrapper.emitted().loadStarted.length).to.equal(1);
      expect(loadStarted.called).to.equal(true);
    });

    it('should loadStarted does not get thrown when navigator is not online.', () => {
      global.navigator.onLine = false;
      const loadStartedListener = sinon.spy();
      const shallowInstanceWrapper = mount(VxpWebView, {
        propsData: {
          src,
          html,
        },
        listeners: {
          loadStarted: loadStartedListener,
        },
      });
      expect(shallowInstanceWrapper.emitted().loadStarted).to.be.not.ok;
      expect(loadStartedListener.called).to.equal(false);
      global.navigator.onLine = true;
    });
  });

  describe('Src prop is changed succesfully.', () => {
    it(`should changing src prop.`, () => {
      wrapper.setProps({ src: '<div><h1>gizem</h1></div>' });
      wrapper.vm.src = '<div><h1>gizem</h1></div>';
      expect(wrapper.find('div').element.innerHTML).to.equal('<div><h1>gizem</h1></div>');
      expect(wrapper.find('div').exists()).to.equal(true);
      expect(wrapper.find('iframe').exists()).to.equal(false);
      expect(wrapper.props().src).to.equal('<div><h1>gizem</h1></div>');
    });
  });

  describe('Html prop is changed succesfully.', () => {
    it(`should changing html prop.`, () => {
      wrapper.setProps({ html: '<div><h1>gizem</h1></div>' });
      wrapper.vm.html = '<div><h1>gizem</h1></div>';
      expect(wrapper.find('div').element.innerHTML).to.equal('<div><h1>gizem</h1></div>');
      expect(wrapper.find('div').exists()).to.equal(true);
      expect(wrapper.find('iframe').exists()).to.equal(false);
      expect(wrapper.props().html).to.equal('<div><h1>gizem</h1></div>');
    });
  });
});

describe('VxpWebView component src prop changing', () => {
  const src = 'http://nativescript-vue.org/';
  const wrapper2 = mount(VxpWebView, {
    name: 'VxpWebView',
    props: {
      src: String,
    },
    propsData: {
      src,
    },
  });
  describe('The component receives given props correctly.', () => {
    it(`should initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper2.props().src).to.equal(src);
    });
  });

  describe('Src prop is changed succesfully.', () => {
    it(`should changing src prop.`, () => {
      wrapper2.setProps({ src: '~/html' });
      wrapper2.vm.src = '~/html';
      expect(wrapper2.props().src).to.equal('~/html');
    });
  });
});

describe('VxpWebView component src prop changing', () => {
  const src = '~/about';
  const wrapper3 = mount(VxpWebView, {
    name: 'VxpWebView',
    props: {
      src: String,
    },
    propsData: {
      src,
    },
  });
  describe('The component receives given props correctly.', () => {
    it(`should initial source taken from src is equal to: ${src}.`, () => {
      expect(wrapper3.props().src).to.equal(src);
    });
  });

  describe('Src prop is changed succesfully.', () => {
    it(`should changing src prop.`, () => {
      wrapper3.setProps({ src: 'http://nativescript-vue.org/' });
      wrapper3.vm.src = 'http://nativescript-vue.org/';
      expect(wrapper3.props().src).to.equal('http://nativescript-vue.org/');
    });
  });
});

describe('VxpWebView component html prop changing', () => {
  const html = '<div><p>Goodbye World</p></div>';
  const wrapper2 = mount(VxpWebView, {
    name: 'VxpWebView',
    props: {
      html: String,
    },
    propsData: {
      html,
    },
  });
  describe('The component receives given props correctly.', () => {
    it(`should initial source taken from html is equal to: ${html}.`, () => {
      expect(wrapper2.props().html).to.equal(html);
    });
  });

  describe('Html prop is changed succesfully.', () => {
    it(`should changing html prop.`, () => {
      wrapper2.setProps({ html: '<div><p>Gone</p></div>' });
      wrapper2.vm.html = '<div><p>Gone</p></div>';
      expect(wrapper2.props().html).to.equal('<div><p>Gone</p></div>');
    });
  });
});

describe('VxpWebView component html prop changing', () => {
  const html = '<div><p>You saw but did not tell</p></div>';
  const wrapper3 = mount(VxpWebView, {
    name: 'VxpWebView',
    props: {
      html: String,
    },
    propsData: {
      html,
    },
  });
  describe('The component receives given props correctly.', () => {
    it(`should initial source taken from html is equal to: ${html}.`, () => {
      expect(wrapper3.props().html).to.equal(html);
    });
  });

  describe('Html prop is changed succesfully.', () => {
    it(`should changing html prop.`, () => {
      wrapper3.setProps({ html: '<div><p>Do not worry</p></div>' });
      wrapper3.vm.html = '<div><p>Do not worry</p></div>';
      expect(wrapper3.props().html).to.equal('<div><p>Do not worry</p></div>');
    });
  });
});
