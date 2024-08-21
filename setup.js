const authSetup = require('../../../auth/shared/setup')
const UserMixin = require('./UserMixin')
const GroupMixin = require('./GroupMixin')

authSetup.user.push(UserMixin)
authSetup.group.push(GroupMixin)