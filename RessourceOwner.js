const mixer = require('sools-core/mixer')
const ModelMixin = require('sools-modeling/types/Model/Mixin')

module.exports = mixer.mixin([ModelMixin], (base) => {
  return class RessourceOwner extends base { }
})
  .define({
    name: 'ressourceOwner'
  })