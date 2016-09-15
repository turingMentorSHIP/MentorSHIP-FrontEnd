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



<li><a href="http://localhost:3000/sign_out">Sign Out</a></li>
<li><a href={{environmentVariables "/sign_out"}}>Sign Out</a></li>

<a href="http://localhost:3000/start_auth" class="btn btn-turing btn-lg github-signup"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
<a href={{environmentVariables "/start_auth"}} class="btn btn-turing btn-lg github-signup"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
