import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue Test', () => {
    let wrapper = null

    it('initializes with correct elements', () => {
        wrapper = mount(AboutView, {
                
            
        })

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.text()).toContain('About')
        expect(wrapper.text()).toContain('Vue App created within the courses')
        expect(wrapper.text()).toContain('Web application development technology')
    })
    
})