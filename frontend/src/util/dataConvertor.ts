export function convertObjectToFormData(obj: any) {
  const formData = new FormData();

  if (!isObject(obj)) return formData;

  for (const key in obj) {
    formData.append(key, obj[key]);
  }

  return formData;
}

export function isObject(data: any) {
  return typeof data === "object" && data !== null;
}
