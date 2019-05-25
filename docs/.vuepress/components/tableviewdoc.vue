
<template>
  <StackLayout>
    <TableView
    :headerFields="headerFields"
    :data="userData"
    :rowSelection="true"
    />
  </StackLayout>
</template>

<script>
import TableView from '../../../src/core/components/TableView/TableView';
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SliderDoc',
  components: {
    StackLayout,
    TableView,
    Label,
  },
  data() {
    return {
      userData: [
        {
          "userId": 1,
          "type": "Person",
          "username": "Jenelle",
          "alias": "afolonin0",
          "userAccountEmail": "afolonin0@privacy.gov.au",
          "password": "arMM2S",
          "firstName": "Amaleta",
          "lastName": "Folonin",
          "photo": "http://dummyimage.com/209x177.bmp/5fa2dd/ffffff",
          "phoneNumber": "406-737-8354",
          "addressText": "73980 Elka Court",
          "streetAddress": "9012 Golden Leaf Trail",
          "mobileNumber": "486-150-9806",
          "jobTitle": "Junior Executive",
          "description": "Distributed reciprocal ability",
          "createdDate": "4/22/2019",
          "updatedDate": "5/29/2018",
          "lead": "afolonin0"
        },
        {
          "userId": 2,
          "type": "Person",
          "username": "Malvina",
          "alias": "rkinneir1",
          "userAccountEmail": "rkinneir1@deliciousdays.com",
          "password": "Lero6xsQgDM",
          "firstName": "Rodolfo",
          "lastName": "Kinneir",
          "photo": "http://dummyimage.com/198x120.bmp/dddddd/000000",
          "phoneNumber": "758-345-3330",
          "addressText": "8 Londonderry Avenue",
          "streetAddress": "7 Barnett Avenue",
          "mobileNumber": "765-920-1913",
          "jobTitle": "Media Manager II",
          "description": "Operative even-keeled system engine",
          "createdDate": "11/26/2018",
          "updatedDate": "8/10/2018",
          "lead": "rkinneir1"
        }
      ],
      headerFields: [
        {
          type: "image",
          name: "photo",
          label: "Photo",
          sortable: false,
        },
        {
          type: "text",
          name: "username",
          label: "user name",
          sortable: false,
        },
        {
          type: "text",
          name: "firstName",
          label: "first name",
          sortable: false,
        },
        {
          type: "text",
          name: "mobileNumber",
          label: "mobile number",
          sortable: true,
        },
        {
          type: "text",
          name: "createdDate",
          label: "create date",
          sortable: true,
        }
      ],
    };
  },
  methods: {
  },
};
</script>
