import { mount, flushPromises } from '@vue/test-utils'
import SignInView from '../../src/views/SignInView.vue'

test('Logout Test', () => {
    const $store = {
        
    }
    const wrapper = mount(SignInView)

    expect(wrapper.exists()).toBe(true);
})