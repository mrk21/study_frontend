import postcss from 'postcss';

const myPlugin = postcss.plugin('myPlugin', options => {
  return css => {
    css.walkDecls(decl => {
      if (decl.prop === 'custom-property' && decl.value.match('💩')) {
        const comment = postcss.comment({ text: 'converted from custom-property' });
        decl.parent.prepend(comment);
        
        decl.prop = 'background';
        decl.value = '#7F4A1E';
      }
    });
  };
});

export default myPlugin;
