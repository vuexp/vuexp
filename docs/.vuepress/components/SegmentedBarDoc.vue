<template>
  <StackLayout>
    <SegmentedBar :items="items"></SegmentedBar>
  </StackLayout>
</template>

<script>
import SegmentedBar from '../../../src/components/SegmentedBar';
import SegmentedBarItem from '../../../src/components/SegmentedBarItem';
import TextField from '../../../src/components/TextField';
import Button from '../../../src/components/Button';
import Label from '../../../src/components/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SegmentedBarDoc',
  components: { SegmentedBar, SegmentedBarItem, StackLayout },
  data() {
    return {
      items: [{ title: 'Title 1' }, { title: 'Title 2' }, { title: 'Title 3' }],
      selectedIndex: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
.demo-panel {
  padding: 10px;
  border: #3c495e;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #f1f1f1;
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}

select {
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 2px 10px 2px 0;
}

button {
  padding: 10px 20px;
  font-weight: lighter;
}
</style>
