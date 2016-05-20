import postcss from 'postcss';

const myPlugin = postcss.plugin('myPlugin', options => {
  return css => {
    css.walkDecls(decl => {
      if (decl.prop === 'custom-background') {
        decl.prop = 'background';
        decl.value = decl.value.replace('💩','#7F4A1E');
        
        const comment = postcss.comment({text: 'converted from custom-background'});
        comment.moveBefore(decl);
        
        comment.prev().remove();
      }
    });
  };
});

export default myPlugin;
