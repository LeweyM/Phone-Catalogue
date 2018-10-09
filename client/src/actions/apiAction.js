export function phonesSet(phones) {
  return {
    type: "PHONES_SET",
    phones: phones
  };
}

export function phonesError() {
  return {
    type: "PHONES_ERROR",
    message: "oh, looks like there's been an error"
  };
}
