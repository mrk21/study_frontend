import postcss from 'postcss';

const myPlugin = postcss.plugin('myPlugin', options => {
  return css => {
    css.walkDecls(decl => {
      decl.value = decl.value.replace('💩', '#7F4A1E');
    });
  };
});

export default myPlugin;
