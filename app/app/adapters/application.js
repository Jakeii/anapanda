import RESTAdapter from 'ember-data/adapters/rest';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default RESTAdapter.extend(TokenAuthorizerMixin, {
  namespace: 'api/v1'
});