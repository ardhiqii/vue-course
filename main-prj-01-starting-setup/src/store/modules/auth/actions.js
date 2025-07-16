export default {
  async login(context, payload) {
    const resp = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBx7qOC4D84RvICJ6-HZb6fiFGngs6xeRc',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const respData = await resp.json();

    if (!resp.ok) {
      console.log(respData);
      const error = new Error(
        respData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    console.log(respData);

    context.commit('setUser', {
      token: respData.idToken,
      userId: respData.localId,
      tokenExpiration: respData.expiresIn,
    });
  },

  async signup(context, payload) {
    const resp = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBx7qOC4D84RvICJ6-HZb6fiFGngs6xeRc',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const respData = await resp.json();

    if (!resp.ok) {
      console.log(respData);
      const error = new Error(
        respData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }

    console.log(respData);

    context.commit('setUser', {
      token: respData.idToken,
      userId: respData.localId,
      tokenExpiration: respData.expiresIn,
    });
  },
};
