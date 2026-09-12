import js from '@eslint/js';
import tseslint from 'typescript-eslint';
export default[{
  ignores:['dist/**','node_modules/**','assets/**']
},js.configs.recommended,...tseslint.configs.recommended,{
  files:['src/**/*.{ts,tsx}'],
  rules:{'no-unused-vars':'off','no-undef':'off'}
}];
