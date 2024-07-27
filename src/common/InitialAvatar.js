export default function initialAvatar(name) {
  const initials = name
    ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    : '';
  return {
    sx: {
      backgroundColor: '#D9D9D9',
      color: '#484848',
    },
    children: initials,
  };
}
