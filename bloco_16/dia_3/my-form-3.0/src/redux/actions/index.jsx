export const saveForm = (name, value) => ({
  type: 'SAVEFORM',
  [name]: value,
});
