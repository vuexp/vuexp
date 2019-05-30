
<template>
  <StackLayout>
    <VxpTableView
    :headerFields="headerFields"
    :data="userData"
    :rowSelection="true"
    notFoundMsg="Data cannot be found!"
    >
    <!-- Pagination component as a slot, but could be drag out from Database element -->
      <Pagination
        slot="pagination"
        :totalItems="50"
        :page="5"
      />
      <ItemsPerPageDropDown
        slot="ItemsPerPage"
        label="Items per page"
        :listItemsPerPage="[5, 10, 20, 50, 100]"
      />
    </VxpTableView>
  </StackLayout>
</template>

<script>
import VxpTableView from '../../../src/components/VxpTableView';
import Pagination from '../../../src/core/components/Pagination/Pagination';
import ItemsPerPageDropDown from '../../../src/core/components/Pagination/ItemsPerPageDropDown';
import Label from '../../../src/core/components/Label/Label';
import StackLayout from '../../../src/layouts/StackLayout';

export default {
  name: 'SliderDoc',
  components: {
    StackLayout,
    VxpTableView,
    Label,
    ItemsPerPageDropDown,
    Pagination,
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
          },
          {
              "userId": 3,
              "type": "Person",
              "username": "Chandler",
              "alias": "mlynds2",
              "userAccountEmail": "mlynds2@home.pl",
              "password": "E8dXIRp",
              "firstName": "Matteo",
              "lastName": "Lynds",
              "photo": "http://dummyimage.com/190x239.png/5fa2dd/ffffff",
              "phoneNumber": "431-883-0314",
              "addressText": "17772 Cherokee Trail",
              "streetAddress": "461 Southridge Way",
              "mobileNumber": "302-219-3404",
              "jobTitle": "Research Associate",
              "description": "Fully-configurable exuding policy",
              "createdDate": "9/11/2018",
              "updatedDate": "6/20/2018",
              "lead": "mlynds2"
          },
          {
              "userId": 4,
              "type": "Person",
              "username": "Yvor",
              "alias": "jmenichino3",
              "userAccountEmail": "jmenichino3@ucoz.com",
              "password": "Sv9lcJFpXQ",
              "firstName": "Jacquette",
              "lastName": "Menichino",
              "photo": "http://dummyimage.com/105x125.bmp/5fa2dd/ffffff",
              "phoneNumber": "594-145-8093",
              "addressText": "13158 Northport Trail",
              "streetAddress": "9 Summit Junction",
              "mobileNumber": "197-908-5926",
              "jobTitle": "Pharmacist",
              "description": "Networked value-added collaboration",
              "createdDate": "7/10/2018",
              "updatedDate": "3/8/2019",
              "lead": "jmenichino3"
          },
          {
              "userId": 5,
              "type": "Person",
              "username": "Mathian",
              "alias": "kcarslaw4",
              "userAccountEmail": "kcarslaw4@smh.com.au",
              "password": "2f5n2uszr12a",
              "firstName": "Kendra",
              "lastName": "Carslaw",
              "photo": "http://dummyimage.com/156x212.png/ff4444/ffffff",
              "phoneNumber": "966-745-9019",
              "addressText": "6356 Lotheville Avenue",
              "streetAddress": "0 Oxford Park",
              "mobileNumber": "126-495-3747",
              "jobTitle": "Statistician II",
              "description": "Diverse needs-based concept",
              "createdDate": "1/8/2019",
              "updatedDate": "3/21/2019",
              "lead": "kcarslaw4"
          }
      ],
      headerFields: [
        {
          type: "image",
          name: "photo",
          label: "Photo",
          sortable: false,
          listAlignment: 'horizontal',
        },
        {
          type: "text",
          name: "username",
          label: "user name",
          sortable: true,
          listAlignment: 'horizontal',
        },
        {
          type: "text",
          name: "firstName",
          label: "first name",
          sortable: false,
          listAlignment: 'vertical',
        },
        {
          type: "text",
          name: "lastName",
          label: "Last name",
          sortable: true,
          listAlignment: 'vertical',
        },
        {
          type: "text",
          name: "mobileNumber",
          label: "mobile number",
          sortable: true,
          listAlignment: 'vertical',
        },
        {
          type: "text",
          name: "createdDate",
          label: "create date",
          sortable: true,
          listAlignment: 'vertical',
        }
      ],
    };
  },
  methods: {
  },
};
</script>
