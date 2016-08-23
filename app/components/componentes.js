import navbar from './widgets/navbar/navbar';
import roles from './roles/roles';
import profiles from './profiles/profiles';
import adminNav from './widgets/admin-nav/admin-nav';

let componentsModule = angular.module('app.components', [
    navbar.name,
    roles.name,
    profiles.name,
    adminNav.name
]);

export default componentsModule;
