export function getUserState(state) {
  return {
    user: {
      id: state.id,
      fullname: state.fullname,
      givenName: state.givenName,
      familyName: state.familyName,
      avatar: state.avatar,
      email: state.email
    }
  };
}
