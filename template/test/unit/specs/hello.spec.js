import plugin from '@'
{{#component}}
import Hello from '@/components/Hello.vue'
{{/component}}
import Vue from 'vue'
Vue.use(plugin)

describe('$hello', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
  })

  it('hello world', () => {
    assert.equal(vm.$hello(), 'hello world')
  })

  it('hello xsdlr', () => {
    assert.equal(vm.$hello('xsdlr'), 'hello xsdlr')
  })
})
{{#component}}
describe('hello.vue', () => {
  let Cons

  beforeEach(() => {
    Cons = Vue.extend(Hello)
  })

  it('default render', () => {
    const vm = new Cons().$mount()
    assert.equal(vm.$el.querySelector('.hello h1').textContent, 'Welcome to Your Vue.js Plugin')
  })

  it('render by props', () => {
    const vm = new Cons({propsData: {name: 'xsdlr'}}).$mount()
    assert.equal(vm.$el.querySelector('.hello h1').textContent, `Welcome to xsdlr's Vue.js Plugin`)
  })
})
{{/component}}
