export function getUser(users) {
  return users[Math.floor(Math.random() * (users.length - 0) + 0)];
}

export function getToken(tokens) {
  return tokens[Math.floor(Math.random() * (tokens.length - 0) + 0)].token;
}
