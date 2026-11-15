import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'

const items = [
  { id: 1, name: 'Milch', done: false },
  { id: 2, name: 'Brot', done: true },
]

describe('ItemList', () => {
  it('rendert für jedes Item einen Eintrag', () => {
    const wrapper = mount(ItemList, { props: { items } })
    expect(wrapper.findAll('.item-row')).toHaveLength(2)
    expect(wrapper.text()).toContain('Milch')
    expect(wrapper.text()).toContain('Brot')
  })

  it('markiert nur erledigte Items als erledigt', () => {
    const wrapper = mount(ItemList, { props: { items } })
    expect(wrapper.findAll('.is-done')).toHaveLength(1)
    expect(wrapper.find('.is-done').text()).toContain('Brot')
  })
})