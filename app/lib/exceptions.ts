export class AuthRequiredError extends Error {
  constructor(message = 'Authorization is required to access this page') {
    super(message);
    this.name = 'AuthRequiredError';
  }
}

export class DatabaseError extends Error {
  constructor(message = 'A database error occurred.') {
    super(message);
    this.name = 'DatabaseError';
  }
}
