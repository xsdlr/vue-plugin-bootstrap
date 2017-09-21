import assert from 'assert'
import plugin from 'vue-plugin'
import Vue from 'vue'
Vue.use(plugin)

describe('$hello', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
  })

  it('hello world', async() => {
    await vm.$nextTick(() => {
      assert.equal(vm.$hello(), 'hello world', 'shuld be hello world')
    })
  })

  it('hello xsdlr', async() => {
    await vm.$nextTick(() => {
      assert.equal(vm.$hello('xsdlr'), 'hello xsdlr', 'shuld be hello xsdlr')
    })
  })
})
