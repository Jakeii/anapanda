import DRFAdapter from './drf';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DRFAdapter.extend(TokenAuthorizerMixin);