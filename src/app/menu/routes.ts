export const routes: any[] = [{
  name: 'Profile',
  router: 'profile',
  adminRequired: false
}, {
  name: 'My Devices',
  router: 'devices/mydevices',
  adminRequired: false
}, {
  name: 'All Devices',
  router: 'devices/alldevices',
  adminRequired: true
}, {
  name: 'Employees',
  router: 'employees',
  adminRequired: false
}, {
  name: 'Identify',
  router: 'identify',
  adminRequired: false
}, {
  name: 'Places',
  router: 'places',
  adminRequired: false
}
];

