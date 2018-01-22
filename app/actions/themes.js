export const actions = {
  CHANGE_PRIMARY_COLOR: 'CHANGE_PRIMARY_COLOR',
};

export const changePrimaryColor = color => ({
  type: actions.CHANGE_PRIMARY_COLOR,
  color,
});
