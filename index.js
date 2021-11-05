module.exports = getMethod => {
const newMethod = getMethod().split('\r\n');
const {method} = newMethod[0].split(' ');

return method === 'GET';
}