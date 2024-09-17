import { userId, userName, userAge, userEmail, userContact, userAddress, userPassword, dataObject, cartObject, wishObject } from './type';

export function updateUserId(Id) {
  return {
    type: userId,
    payload: Id,
  };
}

export function updateUserName(Name) {
  return {
    type: userName,
    payload: Name,
  };
}

export function updateUserAge(Age) {
  return {
    type: userAge,
    payload: Age,
  };
}

export function updateUserEmail(Email) {
  return {
    type: userEmail,
    payload: Email,
  };
}

export function updateUserContact(Contact) {
  return {
    type: userContact,
    payload: Contact,
  };
}

export function updateUserAddress(Address) {
  return {
    type: userAddress,
    payload: Address,
  };
}

export function updateUserPassword(Password) {
  return {
    type: userPassword,
    payload: Password,
  };
}

export function updateDataObjectList(Data) {
  return {
    type: dataObject,
    payload: Data,
  }
}

export function updateCartObjectList(Data) {
  return {
    type: cartObject,
    payload: Data,
  }
}

export function updateWishObjectList(Data) {
  return {
    type: wishObject,
    payload: Data,
  }
}
