import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';

import { loadData } from '../imports/api/songs.fixture';

Meteor.startup(() => {
  // code to run on server at startup
  loadData();
});
