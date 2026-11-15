import { describe, it, expect, vi, afterEach } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'
import ItemForm from '../ItemForm.vue'

describe('ItemForm', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('schickt einen POST und meldet das gespeicherte Item', async () => {
    // fetch mocken, damit der Test kein echtes Backend braucht
    const saved = { id: 5, name: 'Butter', done: false }
    const fetchMock = vi.fn().mockResolvedValue({ json: () => Promise.resolve(saved) })
    vi.stubGlobal('fetch', fetchMock)

    const wrapper = mount(ItemForm)
    await wrapper.find('input').setValue('Butter')
    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/items'),
      expect.objectContaining({ method: 'POST' }),
    )
    expect(wrapper.emitted('created')?.[0]).toEqual([saved])
  })

  it('schickt bei leerem Namen nichts ab', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const wrapper = mount(ItemForm)
    await wrapper.find('form').trigger('submit')

    expect(fetchMock).not.toHaveBeenCalled()
  })
})