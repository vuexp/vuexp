const AttributeProps = {
  width: {
    getProperty(value) {
      return `width: ${value}px;`;
    },
  },
  height: {
    getProperty(value) {
      return `height: ${value}px;`;
    },
  },
  backgroundColor: {
    getProperty(value) {
      return `background-color: ${value}`;
    },
  },
  flexShrink: {
    parents: ['FlexboxLayout'],
    getProperty(value) {
      return `flex-shrink: ${value}`;
    },
  },
  flexGrow: {
    parents: ['FlexboxLayout'],
    getProperty(value) {
      return `flex-grow: ${value}`;
    },
  },
  flexWrapBefore: {
    parents: ['FlexboxLayout'],
    getProperty(value) {
      if (value) return 'flex-wrap: wrap; width: 100%;';
    },
  },
  order: {
    parents: ['FlexboxLayout'],
    getProperty(value) {
      return `order: ${value}`;
    },
  },
  top: {
    parents: ['AbsoluteLayout'],
    getProperty(value) {
      return `top: ${value}px;`;
    },
  },
  left: {
    parents: ['AbsoluteLayout'],
    getProperty(value) {
      return `left: ${value}px;`;
    },
  },
  alignSelf: {
    parents: ['FlexboxLayout'],
    getProperty(value) {
      return `align-self: ${value}`;
    },
  },
  row: {
    parents: ['GridLayout'],
    getProperty(value) {
      return `grid-row:${parseInt(value) + 1};`;
    },
  },
  col: {
    parents: ['GridLayout'],
    getProperty(value) {
      return `grid-column:${parseInt(value) + 1};`;
    },
  },
  rowSpan: {
    parents: ['GridLayout'],
    getProperty(value) {
      return `grid-row-end: span  ${value}`;
    },
  },
  colSpan: {
    parents: ['GridLayout'],
    getProperty(value) {
      return `grid-column-end: span ${value}`;
    },
  },
  fontStyle: {
    getProperty(value) {
      return `font-style: ${value}`;
    },
  },
  fontWeight: {
    getProperty(value) {
      return `font-weight: ${value}`;
    },
  },
  color: {
    getProperty(value) {
      return `color: ${value}`;
    },
  },
};

const Attributes = {
  mounted() {
    const { $el, $parent, $attrs } = this;
    let cssString = '';
    for (const attr in $attrs) {
      if ($parent) {
        const parentComponentName = $parent.$options._componentTag;

        if (AttributeProps[attr] && AttributeProps[attr].hasOwnProperty('parents') && AttributeProps[attr].parents.includes(parentComponentName)) {
          cssString += AttributeProps[attr].getProperty($attrs[attr]);
        }
      }
      $el.style.cssText += ';' + cssString;
    }
  },
};

export default Attributes;
