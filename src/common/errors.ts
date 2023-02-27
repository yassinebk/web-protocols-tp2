export const NOT_STRING_ERROR = (attributeName: string) =>
  `The provided ${attributeName} is not a string`;

export const NOT_EMPTY_ERROR = (attributeName: string) =>
  `The provided ${attributeName} is an empty string`;

export const NOT_YEAR = (attributeName: string) =>
  `The provided ${attributeName} is not a valid or logical birth year`;

export const NOT_PHONENUMBER = (attributeName: string) =>
  `The provided ${attributeName} are or do  contain an unvalid phone number`;

export const NOT_ARRAY = (attributeName: string) =>
  `The provided ${attributeName} is not an array`;

export const MIN_LENGTH_ERROR = (attributeName: string, minLength: number) =>
  `The provided ${attributeName} does not respect the min length ${attributeName}`;

export const Max_LENGTH_ERROR = (attributeName: string, minLength: number) =>
  `The provided ${attributeName} does not respect the max length ${attributeName}`;

export const INVALID_EMAIL_TYPE = () =>
  'Not valid enum type, valid enum types are Business email, Personal email, Old business email, Not specified';

export const NOT_DATE = (attributeName: string) =>
  `The provided ${attributeName} is not a valid date`;

export const NOT_INT = (attributeName: string) =>
  `The provided ${attributeName} is not a valid number`;

export const WRONG_TODO_STATUS_STRING = (attributeName: string) =>
  `The provided ${attributeName} has wrong value for todo status. It can be only "waiting", "actif" or "done" `;
