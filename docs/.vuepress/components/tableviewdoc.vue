
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
        :page="0"
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
          },
          {
              "userId": 6,
              "type": "Person",
              "username": "Sibley",
              "alias": "lgiabucci5",
              "userAccountEmail": "lgiabucci5@intel.com",
              "password": "wPlZvAjPKIS",
              "firstName": "Lisha",
              "lastName": "Giabucci",
              "photo": "http://dummyimage.com/233x211.jpg/5fa2dd/ffffff",
              "phoneNumber": "295-864-4684",
              "addressText": "8 Erie Trail",
              "streetAddress": "0 Grayhawk Parkway",
              "mobileNumber": "485-822-6793",
              "jobTitle": "Environmental Specialist",
              "description": "Focused didactic archive",
              "createdDate": "12/29/2018",
              "updatedDate": "4/12/2019",
              "lead": "lgiabucci5"
          },
          {
              "userId": 7,
              "type": "Person",
              "username": "Tine",
              "alias": "aswaton6",
              "userAccountEmail": "aswaton6@exblog.jp",
              "password": "Jrclgp5N",
              "firstName": "Agata",
              "lastName": "Swaton",
              "photo": "http://dummyimage.com/214x158.bmp/ff4444/ffffff",
              "phoneNumber": "870-124-1814",
              "addressText": "1049 Ruskin Junction",
              "streetAddress": "0025 Dahle Road",
              "mobileNumber": "506-696-5281",
              "jobTitle": "Administrative Officer",
              "description": "Re-contextualized heuristic alliance",
              "createdDate": "1/9/2019",
              "updatedDate": "2/19/2019",
              "lead": "aswaton6"
          },
          {
              "userId": 8,
              "type": "Person",
              "username": "Eve",
              "alias": "jsember7",
              "userAccountEmail": "jsember7@si.edu",
              "password": "CTO6P6hy",
              "firstName": "Johnath",
              "lastName": "Sember",
              "photo": "http://dummyimage.com/176x122.jpg/ff4444/ffffff",
              "phoneNumber": "763-651-4182",
              "addressText": "98 Jenifer Alley",
              "streetAddress": "2 Hauk Place",
              "mobileNumber": "669-585-5282",
              "jobTitle": "Cost Accountant",
              "description": "Optional high-level instruction set",
              "createdDate": "7/18/2018",
              "updatedDate": "10/23/2018",
              "lead": "jsember7"
          },
          {
              "userId": 9,
              "type": "Person",
              "username": "Karlee",
              "alias": "mstirman8",
              "userAccountEmail": "mstirman8@ycombinator.com",
              "password": "Pqst9k5Aw",
              "firstName": "Minne",
              "lastName": "Stirman",
              "photo": "http://dummyimage.com/103x183.jpg/dddddd/000000",
              "phoneNumber": "199-231-9030",
              "addressText": "962 Scofield Park",
              "streetAddress": "64836 Eastlawn Point",
              "mobileNumber": "395-531-6919",
              "jobTitle": "Internal Auditor",
              "description": "Stand-alone next generation attitude",
              "createdDate": "8/1/2018",
              "updatedDate": "4/16/2019",
              "lead": "mstirman8"
          },
          {
              "userId": 10,
              "type": "Person",
              "username": "Andromache",
              "alias": "sduguid9",
              "userAccountEmail": "sduguid9@dmoz.org",
              "password": "vCEWM2Ss",
              "firstName": "Syd",
              "lastName": "Duguid",
              "photo": "http://dummyimage.com/103x161.jpg/dddddd/000000",
              "phoneNumber": "984-230-1613",
              "addressText": "51329 Granby Road",
              "streetAddress": "7 Arizona Way",
              "mobileNumber": "563-438-1034",
              "jobTitle": "Statistician IV",
              "description": "Cross-platform stable implementation",
              "createdDate": "9/9/2018",
              "updatedDate": "3/2/2019",
              "lead": "sduguid9"
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
