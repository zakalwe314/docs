export default [
  [
    'disabled',
    'Boolean',
    'False',
    `Applies the item active class`
  ],
  [
    'item',
    'Object',
    `{ 
      href: '#!',
      text: '', 
      router: false, 
      ripple: false, 
      disabled: false 
    }`,
    'The item object'
  ],
  [
    'ripple',
    'Boolean',
    'False',
    'Applies the ripple directive',
  ],
  [
    'router',
    'Boolean',
    'False',
    'Uses <router-link> instead of an <a> tag'
  ]
]