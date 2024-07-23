export default function fetchResponseFromAPI() {
  return Promise.resolve({
    message: 'This is a successfully resolved promise',
    status: 'fulfilled',
  });
}
