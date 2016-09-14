authenticate(identification, password, scope = []) {
  return new RSVP.Promise((resolve, reject) => {
    const data                = { 'grant_type': 'password', username: identification, password };
    const serverTokenEndpoint = this.get('serverTokenEndpoint');
    const scopesString = Ember.makeArray(scope).join(' ');
    if (!Ember.isEmpty(scopesString)) {
      data.scope = scopesString;
    } // if (!Ember.isEmpty(scopesString))
    this.makeRequest(serverTokenEndpoint, data).then((response) => {
      run(() => {
        const expiresAt = this._absolutizeExpirationTime(response['expires_in']);
        this._scheduleAccessTokenRefresh(response['expires_in'], expiresAt, response['refresh_token']);
        if (!isEmpty(expiresAt)) {
          response = Ember.merge(response, { 'expires_at': expiresAt });
        }
        resolve(response);
      });
    }, (xhr) => {
      run(null, reject, xhr.responseJSON || xhr.responseText);
    });
  });
},




<script type="text/javascript">
</script>
