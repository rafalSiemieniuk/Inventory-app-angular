export const routes: any[] = [ {
  name: 'Profile',
  router: 'profile',
  showInNav: true
}, {
  name: 'My Devices',
  router: 'devices/mydevices',
  showInNav: true
}, {
  name: 'All Devices',
  router: 'devices/alldevices',
  adminRequired: true,
  showInNav: true
}, {
  name: 'Transfer',
  router: 'devices/transfer'
}, {
  name: 'Employees',
  router: 'employees',
  showInNav: true
}, {
  name: 'Identify',
  router: 'identify',
  showInNav: true
}, {
  name: 'Places',
  router: 'places',
  showInNav: true
}
];

