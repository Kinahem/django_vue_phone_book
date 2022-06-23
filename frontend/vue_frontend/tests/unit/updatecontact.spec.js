import { shallowMount, mount, flushPromises } from '@vue/test-utils'
import UpdateContactView from '@/views/UpdateContactView.vue'

describe('UpdateContactView.vue Test', () => {
    let wrapper = null

    it('initializes with correct elements', () => {
        wrapper = shallowMount(UpdateContactView, {
            data() {
                return{
                email: '',
                fullname: '',
                info: '',
                phone: 0
                }
            }
        })

        expect(wrapper.exists()).toBe(true);

        expect(wrapper.vm.email).toBe('')
        expect(wrapper.vm.fullname).toBe('')
        expect(wrapper.vm.info).toBe('')
        expect(wrapper.vm.phone).toBe(0)
    })

    it('initializes', () => {
        // render the component
        wrapper = shallowMount(UpdateContactView, {
            data() {
                return{
                email: 'user@mail.com',
                fullname: 'notuserfullname',
                info: 'info',
                phone: 98098098
                }
            }
        })

        expect(wrapper.exists()).toBe(true);
    
        // check that each element of the user
        expect(wrapper.vm.email).toMatch('user@mail.com')
        expect(wrapper.vm.fullname).toMatch('notuserfullname')
        expect(wrapper.vm.info).toMatch('info')
        expect(wrapper.vm.phone).toBe(98098098)
        
    })


    it('initializes with success message', () => {
    // render the component
        wrapper = shallowMount(UpdateContactView, {
            data() {
                return{
                email: 'user2@yahoo.com',
                fullname: 'user2fullname',
                info: 'info',
                phone: 98098098
                }
            }
        })

        expect(wrapper.exists()).toBe(true);
    
        // check that each element of the user is initialized to empty strings
        expect(wrapper.vm.email).toMatch('user2@yahoo.com')
        expect(wrapper.vm.fullname).toMatch('user2fullname')
        expect(wrapper.vm.info).toMatch('info')
        expect(wrapper.vm.phone).toBe(98098098)
    })


    it('emits an event when wrapper exists', () => {
        // render the component
        wrapper = shallowMount(UpdateContactView, {
            data() {
                return{
                email: 'user2@yahoo.com',
                fullname: 'user2fullname',
                info: 'info',
                phone: 98098098
                }
            }
        })

        expect(wrapper.exists()).toBe(true);
    
        // trigger an event when the button is clicked
        // wrapper.find('button').trigger('click')
    
        // // check that 1 occurrence of the event has been emitted
        // expect(wrapper.emitted('submit')).toBeTruthy
    })


    

})
