import postcss from 'postcss';

const myPlugin = postcss.plugin('myPlugin', options => {
  return css => {
    css.walkDecls(decl => {
      if (decl.prop === 'custom-property' && decl.value.match('💩')) {
        decl.prop = 'background';
        decl.value = '#7F4A1E';
      }
    });
  };
});

export default myPlugin;
